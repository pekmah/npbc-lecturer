import React, { useState } from "react";
import { Form } from "@/components/admin/register";
import firebase from "@/configs/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const RegisterAdmin = () => {
  const { push } = useRouter();

  const [state, setState] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);
  const auth = firebase.auth;

  /**
   * @param e: Object
   * @desc handles form input change
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    ``;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * @param e: Object
   * @desc handles registration form submission
   */
  const handleSubmit = async (e) => {
    e?.preventDefault();

    setLoading(true);
    createUserWithEmailAndPassword(auth, state?.email, state?.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        push("/admin/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Registration Error: ", errorMessage);
        setLoading(false);
      });
  };
  return (
    <div>
      <Form
        email={state?.email}
        password={state?.password}
        cPassword={state?.confirm}
        loading={loading}
        handleSubmit={handleSubmit}
        handleChange={handleInputChange}
      />
    </div>
  );
};

export default RegisterAdmin;
