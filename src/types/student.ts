import { ICourse } from "course";

export type IStudent = {
  _id: string;
  name: string;
  image?: string;
  password: string;
  email: string;
  courses: ICourse[];
  payment: IPayment[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type IPayment = {
  _id: string;
  amount: number;
  course: ICourse;
};

export type IStudentPayload = {
  name: string;
  image?: string;
};
