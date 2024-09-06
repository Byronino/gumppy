import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingrese un email válido",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe almenos tener 6 caracteres",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "Nombre de usuario es obligatorio",
      })
      .min(3, {
        message: "Nombre de usuario debe tener más de 3 caracteres",
      }),
    email: z.string().email({
      message: "Por favor ingrese un email válido",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe almenos tener 6 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "La contraseña debe almenos tener 6 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Ambos campos deben ser idénticos",
    path: ["confirmPassword"],
  });
