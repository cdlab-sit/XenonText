import { SET_SIDE_BAR_VISIBILITY } from './actions';
import initialState from '../store/initialState';

const SettingsReducer = (state = initialState.settings, action) => {
  switch (action.type) {
    case SET_SIDE_BAR_VISIBILITY: {
      return {
        ...state,
        sideBar: {
          visibility: !state.sideBar.visibility,
        },
      };
    }
    default:
      return { ...state };
  }
};
export default SettingsReducer;
