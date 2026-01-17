import { ICourse } from "course";

export type IStudent = {
  _id: string;
  name: string;
  image?: string;
  password: string;
  email: string;
  courses: ICourse[];
  payment: IPayment[];
};

export type IPayment = {
  _id: string;
  amount: number;
  course: ICourse;
};
