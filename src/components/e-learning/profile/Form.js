import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const ProfileForm = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      secondname: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className={"flex_row gap-5"}>
          <FormInput
            name={"firstname"}
            label={"First Name"}
            control={form.control}
          />

          <FormInput
            name={"secondname"}
            label={"Second Name"}
            control={form.control}
          />
        </div>

        <FormInput name={"email"} label={"Email"} control={form.control} />

        <FormInput
          name={"phone"}
          label={"Phone Number"}
          control={form.control}
        />
      </form>
    </Form>
  );
};

export default ProfileForm;

const FormInput = ({ name, label, placeholder, control, className }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={"flex-1"}>
        <FormLabel className={"font-normal text-gray-500"}>{label}</FormLabel>
        <FormControl>
          <Input
            className={`h-14 rounded-2xl ${className}`}
            placeholder={placeholder}
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
