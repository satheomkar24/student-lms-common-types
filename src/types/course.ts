import { IInstructor } from "instructor";

export type ICourse = {
  id: string;
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
};

export type ILesson = {
  id: string;
  name: string;
  video: string;
  duration: string;
};

export type IFAQ = {
  id: string;
  question: string;
  answer: string;
};

export type IRating = {
  id: string;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  average: number;
  course: ICourse;
};
