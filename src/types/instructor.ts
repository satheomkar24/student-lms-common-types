import { ICourse } from "course";

export interface IInstructor {
  id: string;
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
}

export interface IContactDetails {
  email: string;
  mobile: string;
  address: string;
}

export interface ISocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}
