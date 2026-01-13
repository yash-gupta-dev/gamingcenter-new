import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
})

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export const useForgotPasswordForm = () => {
  return useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
    },
    shouldFocusError: true,
  });
};