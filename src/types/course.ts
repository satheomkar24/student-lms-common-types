import { IInstructor } from "instructor";

export interface ICourse {
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
}

export interface ILesson {
  id: string;
  name: string;
  video: string;
  duration: string;
}

export interface IFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface IRating {
  id: string;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  average: number;
  course: ICourse;
}
