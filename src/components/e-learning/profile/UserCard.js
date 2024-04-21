import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSession } from "next-auth/react";

const UserCard = () => {
  const session = useSession();
  return (
    <div className={"p-5 border border-gray-200 rounded-2xl"}>
      <Image
        className={"h-56 w-56 object-cover rounded-2xl mb-5"}
        src={"/images/e-learning/user.webp"}
        alt={"profile"}
        height={1000}
        width={1000}
      />

      <div className={"flex_col gap-2"}>
        <h6 className={"font-medium text-xl"}>{session?.data?.user?.name}</h6>
        <p className={"font-light text-sm text-gray-700"}>
          {session?.data?.user?.reg_no}
        </p>

        <p className={"text-sm text-gray-600"}>Year 2 . Semester 2</p>

        <Button variant={"outline"} className={"text-xs mt-3 h-12"}>
          Change Profile Picture
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
