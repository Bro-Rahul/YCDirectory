// app/actions/startupActions.ts
'use server';

import { formSchema } from "@/types/zod";
import z, { ZodError } from 'zod';

type StartUpFormType = z.infer<typeof formSchema>;

export const submitTasksAction =  async(previousState: StartUpFormType, payload: FormData) => {
  try {
    // Convert FormData to a usable object
    const data = Object.fromEntries(payload.entries());

    // Validate using your Zod schema
    const parsedData = await formSchema.parseAsync(data);
    // console.log(parsedData)
    

    // Simulate a server operation (e.g., database save)
     await new Promise((resolve) => setTimeout(resolve, 3000));

    // console.log("Form Data:", parsedData);

    return previousState
  } catch (error) {
    const errors = error as ZodError;
    // console.error("Error submitting startup:", errors.flatten().fieldErrors);
    return previousState
  }
};
