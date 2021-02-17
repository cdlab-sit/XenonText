import { remote } from 'electron';
import utils from '../../menus/utils';
import { setActiveDocumentId } from './actions';

const { saveFile, closeFile } = utils();
const { app } = remote;

const dialogOptions = {
  type: 'question',
  title: app.name,
  message: `閉じる前に "${document.fileName}" への変更を保存しますか？`,
  detail: '保存しない場合、変更内容が失われます。',
  buttons: ['保存', 'キャンセル', '保存しない'],
  cancelId: 1, // Escキー入力時
  defaultId: 0,
};

// eslint-disable-next-line import/prefer-default-export
export const closeTab = (dispatch, documentId, IsSaved) => {
  if (IsSaved === true) {
    // ファイルが保存されている場合(変更がない場合)
    closeFile(documentId);
  } else {
    // ファイルが保存されていない場合(変更がある場合)
    dispatch(setActiveDocumentId(documentId));

    // activeDocumentIdの変更をレンダリングするため、setTimeoutを利用
    setTimeout(() => {
      const selected = remote.dialog.showMessageBoxSync(dialogOptions);
      switch (selected) {
        case 0: // 保存
          saveFile();
          closeFile(documentId);
          break;
        case 1: // キャンセル
          // do nothing
          break;
        case 2: // 保存しない
          closeFile(documentId);
          break;
        default:
          break;
      }
    }, 0);
  }
};
