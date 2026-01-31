import { ICourse } from "course";
import { Payload } from "index";

export type IInstructor = {
  _id: string;
  name: string;
  profession: string;
  courseCount: number;
  totalStudents: number;
  rating: number;
  about: string;
  image?: string;
  contactDetails: IContactDetails;
  socialLinks: ISocialLinks;
  courses: ICourse[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type IContactDetails = {
  email: string;
  mobile: string;
  address: string;
};

export type ISocialLinks = {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
};

export type IInstructorPayload = Omit<
  Payload<IInstructor>,
  "courseCount" | "totalStudents" | "rating" | "courses"
>;
