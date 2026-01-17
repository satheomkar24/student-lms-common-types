import { ICourse } from "course";

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
