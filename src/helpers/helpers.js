import { data } from "browserslist";

export const initRequiredProperties = () => {
  //let's set a global document,sessionStorage and localStorage variable to avoid reference errors.
  global.document = undefined;
  global.window = undefined;
  global.localStorage = undefined;
  global.sessionStorage = undefined;
};

export const getGallerySlug = (gallery, index) => {
  return `/gallery/${gallery?.name?.replace(/ /g, "-")}-${index}`;
};

export const getServiceSlug = (service, index) => {
  return `/services/${
    service?.link || service?.title?.replace(/ /g, "-")
  }-${index}`;
};

export const parseErrorResponse = function (error) {
  let message;
  if (error.response !== null && error.response !== undefined) {
    if (error.response.data.detail) {
      message = error.response.data.detail;
    }
    if (error.response.data.message) {
      if (Array.isArray(error.response.data.message)) {
        let arr = error.response.data.message;
        message = arr[0].messages[0].message;
      } else message = error.response.data.message;
    } else {
      let response = error.response.data;
      if (typeof response === "string") {
        try {
          message = getStringFromObject(JSON.parse(response));
        } catch (e) {
          message = "An error occurred. Please try again or contact support";
        }
      } else if (typeof response === "object") {
        message = getStringFromObject(response);
      } else {
        message = response;
      }
    }

    if (message.length === 0) {
      switch (error.response.status) {
        case 401:
          message = "Unauthorised. Please log in";
          break;
        case 404:
          message = "The requested resource could not be found";
          break;
        default:
          message = "An error occurred. Please try again, or contact support";
          break;
      }
    }
  } else {
    if (typeof error === "string") {
      message = error;
    } else {
      message = "An error occurred. Please try again, or contact support";
    }
  }

  return message;
};

const getStringFromObject = function (obj) {
  let message = "";
  const map = new Map(Object.entries(obj));
  for (const [key, value] of map.entries()) {
    message = `${message} ${key}: ${value}`;
  }
  return message;
};

export const handleChangeDataFn = (e, setData, number) => {
  const name = e.target.name;
  let value = e.target.value;
  if (number) {
    value = e.target.value ? parseInt(e.target.value.replace(/,/g, "")) : 0;
    if (isNaN(value)) return;
  }

  if (setData)
    setData((data) => {
      let dataCopy = { ...data };
      dataCopy[name] = value;
      return dataCopy;
    });
};

/**
 * extract exam result fields from exam results response
 * @param {object} data response from exam results endpoint
 * @param {number} chosenSemesterId semester selected by user under filters
 * @param {string} chosenExamType chosen exam type under
 * @returns {Object[]} array of objects containing selected exam result fields
 */
export const extractExamResultFields = (
  data,
  chosenSemesterId,
  chosenExamType
) => {
  return data?.map((item) => ({
    unitId: item?.unit?.id,
    unitName: item?.unit?.name,
    grade: item?.grade,
    marks: item?.total,
    semester: item?.unit?.semesters?.find((sem) => sem.id === chosenSemesterId)
      ?.number,
    examType: chosenExamType,
    yearOfStudy: new Date(
      item?.unit?.semesters?.find((sem) => sem.id === chosenSemesterId)
        ?.end_date_with_year || ""
    ).getFullYear(),
  }));
};

/**
 * extracts error message from error response.data
 * @param {object} errorResponse error response data
 * @returns {string}
 */
export function extractErrorMessages(errorResponse) {
  if (!errorResponse || typeof errorResponse !== "object") {
    return errorResponse;
  }

  const errorMessages = Object.values(errorResponse).flat();
  return errorMessages.join(" ");
}
