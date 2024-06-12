import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
    email: string;
    githubUrl: string;
    yearsOfExperience: number;
    password: string;
    confirmPassword: string;
    gender: string;
  };

  export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    gender?: string;
  };
  

  export type ValidFieldNames =
  | "email"
  | "githubUrl"
  | "yearsOfExperience"
  | "password"
  | "confirmPassword"
  | "gender";