import { GET_HOUSE_OWNER, GET_HOUSE_LIST } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const getHouseOwner = () => {
  return {
    type: GET_HOUSE_OWNER,
    async payload() {
      try {
        const house = await API.get(
          "/listing",
          setAuthToken(localStorage.getItem("token"))
        );
        return house.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const getHouseList = () => {
  return {
    type: GET_HOUSE_LIST,
    async payload() {
      try {
        const house = await API.get(
          `/houses`,
          setAuthToken(localStorage.getItem("token"))
        );
        return house.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
};
