import {object, string} from 'zod';


export const createUserSchema = object({
    body: object({
      name: string({
        required_error: "Name is required",
      }),
      personalId: string({
        required_error: "Personal ID is required",
      }),
      password: string({
        required_error: "Password is required",
      }).min(5, "Password too short - should be 5 characters min"),
    })
  });