import * as actionTypes from '../actionTypes';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';

export const fetchApplicationsRequest = () => {
  return {
    type: actionTypes.FETCH_APPLICATIONS_REQUEST,
  };
};

export const fetchApplicationsSuccess = (applications: any[]) => {
  return {
    type: actionTypes.FETCH_APPLICATIONS_SUCCESS,
    payload: applications,
  };
};

export const fetchApplicationsFailure = (error: string) => {
  return {
    type: actionTypes.FETCH_APPLICATIONS_FAILURE,
    payload: error,
  };
};

export const fetchApplications = (): ThunkAction<void, RootState, null, any> => {
  return async (dispatch) => {
    dispatch(fetchApplicationsRequest());
    try {
      const response = await axios.get('https://engineering-task.elancoapps.com/api/applications');
      const data = response.data.map((item: any) => ({
        label: item,
        value: item,
      }));
      dispatch(fetchApplicationsSuccess(data));
    } catch (error: any) {
      console.log(error)
      const errorMsg = error.message;
      dispatch(fetchApplicationsFailure(errorMsg));
    }
  };
};

export const fetchResourcesRequest = () => {
  return {
    type: actionTypes.FETCH_RESOURCE_REQUEST,
  };
};

export const fetchResourcesSuccess = (applications: any[]) => {
  return {
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    payload: applications,
  };
};

export const fetchResourcesFailure = (error: string) => {
  return {
    type: actionTypes.FETCH_RESOURCE_FAILURE,
    payload: error,
  };
};

export const fetchResources= (): ThunkAction<void, RootState, null, any> => {
  return async (dispatch) => {
    dispatch(fetchResourcesRequest());
    try {
      const response = await axios.get('https://engineering-task.elancoapps.com/api/resources');
      const data = response.data.map((item: any) => ({
        label: item,
        value: item,
      }));
      dispatch(fetchResourcesSuccess(data));
    } catch (error: any) {
      console.log(error)
      const errorMsg = error.message;
      dispatch(fetchResourcesFailure(errorMsg));
    }
  };
};

export const fetchApplicationsDataRequest = () => {
  return {
    type: actionTypes.FETCH_APPLICATIONS_DATA_REQUEST,
  };
};

export const fetchApplicationsDataSuccess = (applications: any[]) => {
  return {
    type: actionTypes.FETCH_APPLICATIONS_DATA_SUCCESS,
    payload: applications,
  };
};

export const fetchApplicationsDataFailure = (error: string) => {
  return {
    type: actionTypes.FETCH_APPLICATIONS_DATA_FAILURE,
    payload: error,
  };
};

export const fetchApplicationsData = (applicationName: string): ThunkAction<void, RootState, null, any> => {
  return async (dispatch) => {
    dispatch(fetchApplicationsDataRequest());
    try {
      const response = await axios.get(`https://engineering-task.elancoapps.com/api/applications/${applicationName}`);
      const data = response.data;
      dispatch(fetchApplicationsDataSuccess(data));
    } catch (error: any) {
      console.log(error)
      const errorMsg = error.message;
      dispatch(fetchApplicationsDataFailure(errorMsg));
    }
  };
};

export const fetchResourceData = (resourceName: string): ThunkAction<void, RootState, null, any> => {
  return async (dispatch) => {
    dispatch(fetchApplicationsDataRequest());
    try {
      const response = await axios.get(`https://engineering-task.elancoapps.com/api/resources/${resourceName}`);
      const data = response.data;
      dispatch(fetchApplicationsDataSuccess(data));
    } catch (error: any) {
      console.log(error)
      const errorMsg = error.message;
      dispatch(fetchApplicationsDataFailure(errorMsg));
    }
  };
};

export const resetOptions = () =>  ({
  type: actionTypes.RESET_OPTIONS,
});

export const changeSelectedOption = (option: string) => ({
  type: actionTypes.CHANGE_SELECTED_OPTION,
  payload: option
});