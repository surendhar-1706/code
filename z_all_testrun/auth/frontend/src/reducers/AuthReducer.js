export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "login_success":
      const { payload, type } = action;
      console.log("printing action");
      console.log(action);
      console.log("printing action data");
      console.log(action.payload.data);
      console.log("printing payload data");
      console.log(payload);
      console.log("printing payload.data.access");
      console.log(payload.data.access);
      console.log("login_success_ran");
      // console.log(action.payload.data.user);

      localStorage.setItem("access", action.payload.data.access);
      return {
        ...state,
        isAuthenticated: true,
        access: action.payload.data.access,
        refresh: action.payload.data.refresh,
      };
    case "login_failed":
      console.log("fail");
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
      };
    case "user_loaded_success":
      console.log("loaded_success");
      return {
        ...state,
        user: action,
      };
    case "user_loaded_fail":
      console.log("load_success");
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
