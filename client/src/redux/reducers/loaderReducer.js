const initialSate = {
  loader: false,
};

export const loaderReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loader: action.payload,
      };
    }
    default:
      return state;
  }
};
