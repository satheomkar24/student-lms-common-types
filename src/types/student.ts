import { ICourse } from "course";

export type IStudent = {
  id: string;
  name: string;
  image?: string;
  password: string;
  email: string;
  courses: ICourse[];
  payment: IPayment[];
};

export type IPayment = {
  id: string;
  amount: number;
  course: ICourse;
};
