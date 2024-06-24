import React from "react";
import { StudentPortalLayout } from "@/components";
import {
  ProfileDetails,
  ProfileHeader,
  ProfileUserCard,
} from "@/components/e-learning/profile";
import LecturerPortalLayout from "@/components/e-learning/lecturer/LecturerPortalLayout";

const Profile = () => {
  return (
    <LecturerPortalLayout>
      <ProfileHeader />

      <div className={"flex_row gap-5 mt-5"}>
        <ProfileUserCard />

        <ProfileDetails />

        <div className={"p-5 w-44"} />
      </div>
    </LecturerPortalLayout>
  );
};

export default Profile;
