import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { FaChevronDown, FaRegUserCircle } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import { User } from "lucide-react";

const DropDown = () => {
  const session = useSession();

  const initials = getInitials(session?.data?.user?.name);

  const logout = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className={"flex gap-3 py-1.5 items-center"}>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-c-blue">
            <span className={"text-white text-base tracking-wider font-bold"}>
              {initials}
            </span>
          </div>

          <span className={"text-base font-normal"}>
            {session?.data?.user?.name}
          </span>

          <FaChevronDown className={"text-primary text-md"} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="gap-3 cursor-pointer">
          <FaRegUserCircle className={"text-lg text-primary"} />
          Account
        </DropdownMenuItem>

        <DropdownMenuItem onClick={logout} className="gap-3 cursor-pointer">
          <MdLogout className={"text-lg text-primary"} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;

const getInitials = (name) => {
  if (name) {
    const splitName = name?.split(" ");
    const firstInitial = splitName[0][0];
    const secondInitial = splitName[1] ? splitName[1][0] : splitName[0][1];
    return (firstInitial + secondInitial).toUpperCase();
  }
};
