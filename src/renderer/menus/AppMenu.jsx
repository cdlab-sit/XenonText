import fs from 'fs';
import { remote } from 'electron';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFileText,
  setFileInfo,
  setDocumentFromFile,
  setNewDocument,
  deleteDocument,
} from '../reducks/editor/actions';
import { getActiveDocumentSelector } from '../reducks/editor/selectors';

const { app, Menu } = remote;

export default function AppMenu() {
  const dispatch = useDispatch();
  const activeDocumentId = useSelector(
    (state) => state.editor.activeDocumentId,
  );
  const activeDocument = getActiveDocumentSelector(
    useSelector((state) => state),
  );

  // 新規ファイル
  const addNewFile = () => {
    dispatch(setNewDocument());
  };

  // ファイル読み込み
  const readFile = (path) => {
    const data = fs.readFileSync(path);
    return data.toString();
  };

  // ファイルを開く
  const openFile = () => {
    const fileIndex = 0;
    const options = {
      properties: ['openFile'],
    };

    remote.dialog.showOpenDialog(options).then((path) => {
      if (path) {
        const filePath = path.filePaths[fileIndex];
        const fileText = readFile(filePath);
        dispatch(setDocumentFromFile(fileText, filePath));
      }
    });
  };

  // 名前を付けて保存
  const saveFileAs = () => {
    const options = {
      properties: ['openFile'],
    };

    remote.dialog.showSaveDialog(options).then((path) => {
      if (path) {
        const fileText = activeDocument.editedText;
        fs.writeFileSync(path.filePath, fileText);
        dispatch(setFileInfo(activeDocumentId, fileText, path.filePath));
      }
    });
  };

  // ファイルの保存
  const saveFile = () => {
    if (activeDocument.filePath) {
      const fileText = activeDocument.editedText;
      fs.writeFileSync(activeDocument.filePath, fileText);
      dispatch(setFileText(activeDocumentId, fileText));
    } else {
      saveFileAs();
    }
  };

  // ファイル（ タブ ）を閉じる
  const closeFile = () => {
    dispatch(deleteDocument(activeDocumentId));
  };

  const appName = app.name;
  const appMenuTemplate = [
    // XenonText
    {
      label: appName,
      submenu: [
        {
          label: `${appName} について`,
          role: 'about',
        },
        {
          type: 'separator',
        },
        {
          label: 'サービス',
          role: 'services',
          submenu: [],
        },
        {
          type: 'separator',
        },
        {
          label: `${appName} を非表示`,
          role: 'hide',
        },
        {
          label: '他を非表示',
          role: 'hideothers',
        },
        {
          label: 'すべてを表示',
          role: 'unhide',
        },
        {
          type: 'separator',
        },
        {
          label: `${appName} を終了`,
          role: 'quit',
        },
      ],
    },

    // ファイル
    {
      label: 'ファイル',
      submenu: [
        {
          label: '新規ファイル',
          accelerator: 'Command+N',
          click: addNewFile,
        },
        {
          type: 'separator',
        },
        {
          label: '開く…',
          accelerator: 'Command+O',
          click: openFile,
        },
        {
          type: 'separator',
        },
        {
          label: '保存',
          accelerator: 'Command+S',
          click: saveFile,
        },
        {
          label: '名前を付けて保存…',
          accelerator: 'Shift+Command+S',
          click: saveFileAs,
        },
        {
          type: 'separator',
        },
        {
          label: 'ファイルを閉じる',
          accelerator: 'Command+W',
          click: closeFile,
        },
      ],
    },

    // 編集
    {
      label: '編集',
      submenu: [
        {
          label: '元に戻す',
          accelerator: 'Command+Z',
          role: 'undo',
        },
        {
          label: 'やり直し',
          accelerator: 'Shift+Command+Z',
          role: 'redo',
        },
        {
          type: 'separator',
        },
        {
          label: '切り取り',
          accelerator: 'Command+X',
          role: 'cut',
        },
        {
          label: 'コピー',
          accelerator: 'Command+C',
          role: 'copy',
        },
        {
          label: '貼り付け',
          accelerator: 'Command+V',
          role: 'paste',
        },
        {
          type: 'separator',
        },
        {
          label: '検索',
          accelerator: 'Command+F',
          enabled: false,
        },
        {
          label: '置換',
          accelerator: 'SHIFT+Command+F',
          enabled: false,
        },
      ],
    },

    // 選択
    {
      label: '選択',
      submenu: [
        {
          label: 'すべて選択',
          accelerator: 'Command+A',
          role: 'selectAll',
        },
        {
          label: '行を選択',
          accelerator: 'Command+L',
          enabled: false,
        },
        {
          label: '単語を選択',
          accelerator: 'Command+D',
          enabled: false,
        },
      ],
    },

    // 表示
    {
      label: '表示',
      submenu: [
        {
          label: 'サイドバーを表示',
          accelerator: 'Command+B',
          type: 'checkbox',
          enabled: false,
        },
        {
          type: 'separator',
        },
        {
          label: 'フルスクリーンにする',
          accelerator: 'Option+Command+F',
          role: 'togglefullscreen',
        },
      ],
    },

    // ウィンドウ
    {
      label: 'ウインドウ',
      role: 'windowMenu',
    },

    // 開発
    {
      label: '開発',
      submenu: [
        {
          label: '開発者ツールの切り替え',
          role: 'toggleDevTools',
        },
      ],
    },

    // ヘルプ
    {
      label: 'ヘルプ',
      submenu: [
        {
          role: 'help',
        },
      ],
    },
  ];

  const addAppMenu = () => {
    const appMenu = Menu.buildFromTemplate(appMenuTemplate);
    Menu.setApplicationMenu(appMenu);
  };

  return <div className="hidden">{addAppMenu()}</div>;
}
