import initialState from '../store/initialState';

const FileReducer = (state = initialState.file, action) => {
  /* Electron側とつなげるので現在未実装 */
  switch (action.type) {
    default:
      return state;
  }
};

export default FileReducer;
