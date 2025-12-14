import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { storageService } from "./storageService";

export class AxiosInstanceService {
  private api: AxiosInstance;
  private ensureValidToken: () => Promise<void>;

  constructor(baseURL: string, ensureValidToken: () => Promise<void>) {
    this.ensureValidToken = ensureValidToken;
    this.api = axios.create({
      baseURL: baseURL || "http://localhost:6012/api",
      timeout: 10000000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        this.ensureValidToken();
        const token = storageService.getLocal<string>("authToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        const url = error.config?.url || "";
        let errorMessage = "";

        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = `Error Status: ${error.response?.status}\nMessage: ${error.message}`;
        }

        if (error.response?.status === 401) {
          this.handleUnauthorized();
        }

        return Promise.reject(new Error(errorMessage));
      }
    );
  }

  private handleUnauthorized(): void {
    storageService.removeLocal("authToken");
    storageService.removeLocal("userData");
    storageService.removeLocal("refreshToken");

    if (!window.location.pathname.includes("auth/login")) {
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 2000);
    }
  }

  // HTTP methods
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.api.get<T>(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.api.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.api.put<T>(url, data, config);
    return response.data;
  }

  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.api.patch<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.api.delete<T>(url, config);
    return response.data;
  }

  // Get axios instance for other services
  getAxiosInstance(): AxiosInstance {
    return this.api;
  }
}
