"use client"
import { FormProvider, useForm } from "react-hook-form";
import { Child } from "./Child";

interface FormData {
  displayName: string;
}

export const Parent = () => {
  const formMethods = useForm<FormData>({
    defaultValues: {
      displayName: "Diogo",
    },
  });

  return (
    <FormProvider {...formMethods}>
      <Child />
    </FormProvider>
  );
};
