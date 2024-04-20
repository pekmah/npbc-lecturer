import { toast } from "react-toastify";

const useError = () => {
  const showError = (error, customMessage = "", options) => {
    let message = "";
    // check if response message exists
    if (error.response.data?.message) {
      message = error.response.data.message;
    }
    // check if error.message exists
    else if (error?.message) {
      message = error.message;
    }
    // error is string
    else {
      message = error;
    }

    toast.error(customMessage + message, options);
  };

  return showError;
};

export default useError;
