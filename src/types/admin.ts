export type IAdmin = {
  _id: string;
  name: string;
  image?: string;
  password: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type IAdminPayload = {
  name: string;
  image?: string;
};
