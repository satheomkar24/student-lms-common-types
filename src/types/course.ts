import { IInstructor } from "instructor";

export type ICourse = {
  _id: string;
  name: string;
  image: string;
  summery: string;
  details: string;
  price: number;
  level: string;
  category: string;
  lessons: ILesson[];
  faqs: IFAQ[];
  instructor: IInstructor;
  rating: IRating;
  publish:boolean
};

export type ICoursePayload = Omit<ICourse, "_id" | "rating" | "instructor"> & {
  instructor: string;
};

export type ILesson = {
  _id: string;
  name: string;
  video: string;
  duration: string;
};

export type IFAQ = {
  _id: string;
  question: string;
  answer: string;
};

export type IRating = {
  _id: string;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  average: number;
  course: ICourse;
};
