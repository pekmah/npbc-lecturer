import React from "react";
import { StudentPortalLayout } from "@/components";
import {
  ProfileDetails,
  ProfileHeader,
  ProfileUserCard,
} from "@/components/e-learning/profile";

const Profile = () => {
  return (
    <StudentPortalLayout>
      <ProfileHeader />

      <div className={"flex_row gap-5 mt-5"}>
        <ProfileUserCard />

        <ProfileDetails />

        <div className={"p-5 w-44"} />
      </div>
    </StudentPortalLayout>
  );
};

export default Profile;
