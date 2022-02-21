import {
  BILLS_FAIL,
  BILLS_REQUEST,
  BILLS_SUCCESS,
  BILL_ADD_FAIL,
  BILL_ADD_REQUEST,
  BILL_ADD_SUCCESS,
  //   BILL_DELETE_REQUEST,
  //   BILL_DELETE_FAIL,
  //   BILL_DELETE_SUCCESS,
  //   BILL_DONE_REQUEST,
  //   BILL_DONE_SUCCESS,
  //   BILL_DONE_FAIL,
  REMOVE_ERROR,
} from "../types";

export const billReducer = (state = { bills: [] }, action) => {
  switch (action.type) {
    case BILLS_REQUEST:
      return { loading: true, bills: [] };
    case BILLS_SUCCESS:
      return { loading: false, bills: action.payload };
    case BILLS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case BILL_ADD_REQUEST:
      return { ...state, loading: true };
    case BILL_ADD_SUCCESS:
      return { loading: false, bills: action.payload };
    case BILL_ADD_FAIL:
      return { ...state, loading: false, error: action.payload };
    // case BILL_DELETE_REQUEST:
    //   return { ...state, loading: true };
    // case BILL_DELETE_SUCCESS:
    //   return { loading: false, tasks: action.payload };
    // case BILL_DELETE_FAIL:
    //   return { ...state, loading: false, error: action.payload };
    // case BILL_DONE_REQUEST:
    //   return { ...state, loading: true };
    // case BILL_DONE_SUCCESS:
    //   return { loading: false, tasks: action.payload };
    // case BILL_DONE_FAIL:
    //   return { ...state, loading: false, error: action.payload };
    case REMOVE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
