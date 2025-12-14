import { storageService } from "@services/storageService";
import { IUser } from "auth";
import { type ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type PropTypes = {
  children: ReactNode;
};

export const AuthGuard = ({ children }: PropTypes) => {
  const userData = storageService.getLocal<IUser>("userData");
  const authToken = storageService.getLocal<string>("authToken");
  const navigate = useNavigate();

  // perform logout if unauthenticated
  useEffect(() => {
    if (!authToken || !userData?.email) {
      storageService.removeLocal("userData");
      storageService.removeLocal("authToken");
      storageService.removeLocal("refreshToken");
      navigate("/auth/login", { replace: true });
    }
  }, []);

  // while logout is running (render nothing)
  if (!authToken || !userData?.email) {
    return null;
  }

  return children;
};
