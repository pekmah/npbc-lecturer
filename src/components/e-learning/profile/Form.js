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
import { useSession } from "next-auth/react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const ProfileForm = () => {
  const session = useSession();

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: session?.data?.user?.name?.split(" ")?.at(0),
      secondname: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className={"flex_row gap-5"}>
          <FormInput
            name={"firstname"}
            label={"First Name"}
            control={form.control}
            disabled={true}
            value={session?.data?.user?.name?.split(" ")?.at(0)}
          />

          <FormInput
            name={"secondname"}
            label={"Second Name"}
            control={form.control}
            disabled
            value={session?.data?.user?.name?.split(" ")?.at(1)}
          />
        </div>

        <FormInput
          name={"email"}
          label={"Email"}
          disabled
          value={session?.data?.user?.email}
        />

        <FormInput
          name={"phone"}
          label={"Phone Number"}
          value={session?.data?.user?.phone}
          disabled
        />
      </form>
    </Form>
  );
};

export default ProfileForm;

const FormInput = ({
  name,
  label,
  placeholder,
  control,
  className,
  value,
  ...rest
}) => (
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
            value={value}
            {...rest}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
