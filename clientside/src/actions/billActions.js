import axios from "axios";
import {
  BILLS_FAIL,
  BILLS_REQUEST,
  BILLS_SUCCESS,
  BILL_ADD_REQUEST,
  BILL_ADD_FAIL,
  BILL_ADD_SUCCESS,
  //   BILL_DELETE_REQUEST,
  //   BILL_DELETE_FAIL,
  //   BILL_DELETE_SUCCESS,
  //   BILL_DONE_REQUEST,
  //   BILL_DONE_SUCCESS,
  //   BILL_DONE_FAIL,
  REMOVE_ERROR,
} from "../types";

export const listbills = () => async (dispatch, getState) => {
  try {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : "";
    dispatch({ type: BILLS_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
        "x-auth-key": userInfo.token,
      },
    };
    const { data } = await axios.get(`/api/bills/get`, config);
    dispatch({
      type: BILLS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: BILLS_FAIL, payload: error.response });
  }
};

export const removeError = () => (dispatch) => {
  dispatch({ type: REMOVE_ERROR });
};
export const addBill = (newBill) => async (dispatch) => {
  try {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : "";
    dispatch({ type: BILL_ADD_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
        "x-auth-key": userInfo.token,
      },
    };
    // Important check this add bill reducer
    const { data } = await axios.post(`/api/bills/addbill`, newBill, config);
    dispatch({ type: BILL_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BILL_ADD_FAIL,
      payload: error.response.data.msg,
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ERROR,
      });
    }, 7000);
  }
};

// export const deleteTask = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: TASK_DELETE_REQUEST });
//     const config = {
//       headers: {
//         "Content-type": "application/json",
//         "x-auth-key": userInfo.token,
//       },
//     };
//     const { data } = await axios.delete(`/api/todos/delete/${id}`, config);
//     dispatch({ type: TASK_DELETE_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: TASK_DELETE_FAIL,
//       payload: error.response.data.errors[0].msg,
//     });
//     setTimeout(() => {
//       dispatch({
//         type: REMOVE_ERROR,
//       });
//     }, 7000);
//   }
// };

// export const checkTask = (id, content) => async (dispatch) => {
//   try {
//     dispatch({ type: TASK_DONE_REQUEST });
//     const config = {
//       headers: {
//         "Content-type": "application/json",
//         "x-auth-key": userInfo.token,
//       },
//     };
//     const { data } = await axios.put(`/api/todos/edit/${id}`, content, config);
//     if (data.msg) {
//       dispatch({ type: TASK_DONE_FAIL, payload: data.msg });
//     }
//     if (!data.msg) {
//       dispatch({ type: TASK_DONE_SUCCESS, payload: data });
//     }
//   } catch (error) {
//     console.log(error.response.data);
//     dispatch({
//       type: TASK_DONE_FAIL,
//       payload: error.response.data.errors[0].msg,
//     });
//     setTimeout(() => {
//       dispatch({
//         type: REMOVE_ERROR,
//       });
//     }, 7000);
//   }
// };
