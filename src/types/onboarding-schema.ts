import z from "zod";
export const OnBoardingSchema = z.object({
  image: z.string(),
  location: z
    .string()
    .min(2, { message: "Location must be more then 1 character" }),
});
