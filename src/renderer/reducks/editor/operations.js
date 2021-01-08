/* eslint-disable import/prefer-default-export */
import { deleteDocument } from './actions';

export const closeTab = (dispatch, documentId) => {
  dispatch(deleteDocument(documentId));
};
