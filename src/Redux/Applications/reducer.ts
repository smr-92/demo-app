import * as actionTypes from '../actionTypes';

interface ApplicationState {
  loading: boolean;
  data: any[];
  options: string[];
  selectedOption: string;
  error: string;
}

const initialState: ApplicationState = {
  loading: false,
  data: [],
  options: [],
  selectedOption: "",
  error: '',
};

const applicationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_APPLICATIONS_REQUEST:
      return {
        ...state,
        options: [],
        loading: true,
      };
    case actionTypes.FETCH_APPLICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        options: action.payload,
        error: '',
      };
    case actionTypes.FETCH_APPLICATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        options: [],
        error: action.payload,
      };
    case actionTypes.FETCH_RESOURCE_REQUEST:
      return {
        ...state,
        options: [],
        loading: true,
      };
    case actionTypes.FETCH_RESOURCE_SUCCESS:
      return {
        ...state,
        loading: false,
        options: action.payload,
        error: '',
      };
    case actionTypes.FETCH_RESOURCE_FAILURE:
      return {
        ...state,
        loading: false,
        options: [],
        error: action.payload,
      };
    case actionTypes.FETCH_APPLICATIONS_DATA_REQUEST:
      return {
        ...state,
        data: [],
        loading: true,
      };
    case actionTypes.FETCH_APPLICATIONS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case actionTypes.FETCH_APPLICATIONS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case actionTypes.RESET_OPTIONS:
      return {
        ...state,
        options: [],
        selectedOption: "",
        data: []
      }
    case actionTypes.CHANGE_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: action.payload
      }
    default:
      return state;
  }
};

export default applicationReducer;