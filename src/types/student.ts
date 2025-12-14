import { ICourse } from "course";

export interface IStudent {
  id: string;
  name: string;
  image?: string;
  password: string;
  email: string;
  courses: ICourse[];
  payment: IPayment[];
}

export interface IPayment {
  id: string;
  amount: number;
  course: ICourse;
}
