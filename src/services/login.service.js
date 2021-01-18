import Axios from "axios";
import { BASE_URL, REGISTER, LOGIN } from "../utils/index";

export const signupForm = async (loginValue) => {
  try {
    if (Object.values(loginValue).every((val) => val !== "")) {
      const { data, status } = await Axios.post(
        `${BASE_URL}${LOGIN}`,
        loginValue
      );
      if (status === 200) {
        return { resp: data, error: undefined };
      }
    } else {
      return {
        resp: "",
        error: "Please fill all values",
      };
    }
  } catch (e) {}
};

export const registerForm = async (registerValue) => {
  try {
    if (Object.values(registerValue).every((val) => val !== "")) {
      const { data, status } = await Axios.post(
        `${BASE_URL}${REGISTER}`,
        registerValue
      );
      if (status === 201) {
        return { resp: data, error: undefined };
      }
    } else {
      return {
        resp: "",
        error: "Please fill all values",
      };
    }
  } catch (e) {
    console.log(e, e.message);
  }
};
