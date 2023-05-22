import React, { useContext, useEffect, useState } from "react";
import { Form } from "@/components/admin/login";
import firebase from "@/configs/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "@/storage/MainContext";
import { useRouter } from "next/router";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(Context);
  const { push } = useRouter();

  /**
   * @param e
   * @desc handles login form input change.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const auth = firebase.auth;
  /**
   * @param e
   * @desc signs in user via firebase
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        // Signed in response
        const { email, accessToken } = userCredential.user;
        setUser({ email, accessToken });

        setLoading(false);
        window.alert("Signin successful.");
        // ...
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        window.alert("Signin error. ", errorMessage);
      });
  };

  useEffect(() => {
    // check if user has an access token
    if (user?.accessToken) {
      //   redirect to admin home page
      push("/admin");
    }
  }, [push, user?.accessToken]);

  return (
    <div>
      <Form
        email={state?.email}
        password={state?.password}
        loading={loading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
