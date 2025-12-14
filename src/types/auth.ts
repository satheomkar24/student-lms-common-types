export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type IRegisterPayload = Omit<IRegister, "confirmPassword">;

export interface IForgot {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export type IResetPasswordPayload = Omit<IResetPassword, "confirmPassword">;

export interface INewPassword {
  token: string;
  newPassword: string;
}

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export type IChangePasswordPayload = Omit<
  IChangePassword,
  "confirmNewPassword"
>;

export interface IUser {
  id: string;
  name: string;
  email: string;
}
export interface IAuthResponse {
  token: string;
  refreshToken: string;
  user: IUser;
}

export interface IAuthError {
  message: string;
  code: number;
}
