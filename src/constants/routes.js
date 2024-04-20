export const studentPortalRoute = "/portal/student";
export const lecturerPortalRoute = "/portal/lecturer";

export const studentRoutes = {
  public: [
    studentPortalRoute + "/auth/login",
    studentPortalRoute + "/auth/reset_password",
  ],
  private: [
    studentPortalRoute + "",
    studentPortalRoute + "/academics",
    studentPortalRoute + "/examinations",
    studentPortalRoute + "/finances",
    studentPortalRoute + "/profile",
  ],
};

export const lecturerRoutes = {
  public: [
    lecturerPortalRoute + "/auth/login",
    lecturerPortalRoute + "/auth/reset_password",
  ],
  private: [
    lecturerPortalRoute + "",
    lecturerPortalRoute + "/academics",
    lecturerPortalRoute + "/examinations",
    lecturerPortalRoute + "/profile",
  ],
};
