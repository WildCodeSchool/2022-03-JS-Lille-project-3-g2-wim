const initialState = {
  id: null,
  email: null,
  password: null,
  name: null,
  firstname: null,
  age: null,
  schoolOption: null,
  schoolName: null,
  schoolClass_id: null,
};
// eslint is disabled specificly here or there's an error message Default parameters should be last  default-param-last
/*eslint-disable */
export default (state = initialState, action) => {
  /* eslint-enable */
  switch (action.type) {
    case "USER_LOGOUT":
      return initialState;

    case "USER_LOGIN":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
