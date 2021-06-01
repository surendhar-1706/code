import { GET_LEADS } from "./types";
const getLeads = (dispatch) => {
  async function getter() {
    try {
      const bla = await fetch("/api/leads/");
      const haio = (res) => {
        dispatch({
          type: GET_LEADS,
          payload: res.data,
        });
      };
    } catch (err) {
      console.log(err);
    }
  }
  getter();
};

export default getLeads;
