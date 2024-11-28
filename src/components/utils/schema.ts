import { z } from "zod";
import { FormValueTypes } from "../type";

export const schema: z.ZodType<FormValueTypes> = z.object({
  namefield: z.string().optional(),
  message: z.string().optional(),
  select: z.string().optional(),
  radio: z.string().optional(),
});
