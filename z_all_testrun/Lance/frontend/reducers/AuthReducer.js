export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "check":
      console.log("checking");
      return {
        ...state,
      };
    case "login_success":
      const { payload, type } = action;
      localStorage.setItem("access_token", payload.json_data.access_token);
      localStorage.setItem("refresh_token", payload.json_data.refresh_token);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.json_data.access_token,
        refresh: payload.json_data.refresh_token,
      };
    case "login_fail":
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
      };
    case "logout":
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      return {
        ...state,
        isAuthenticated: false,
      };
    case "authenticated":
      console.log("is authenticated ran from reducer");
      return {
        ...state,
        isAuthenticated: true,
      };
  }
};
