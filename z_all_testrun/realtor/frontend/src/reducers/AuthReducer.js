export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "login_success":
      const { payload, type } = action;
      localStorage.setItem("access_token", payload.json_data.access);
      localStorage.setItem("refresh_token", payload.json_data.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.json_data.access,
        refresh: payload.json_data.refresh,
      };
  }
};
