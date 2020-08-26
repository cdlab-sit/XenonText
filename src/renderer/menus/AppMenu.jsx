import fs from 'fs';
import { remote } from 'electron';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewDocument, deleteDocument } from '../reducks/editor/actions';

const { app, Menu } = remote;

export default function AppMenu() {
  const dispatch = useDispatch();
  const activeDocumentId = useSelector(
    (state) => state.editor.activeDocumentId,
  );

  // 新規ファイル
  const addNewFile = () => {
    dispatch(setNewDocument());
  };

  // ファイル読み込み
  const readFile = (path) => {
    fs.readFile(path, (error, data) => {
      if (error !== null) {
        throw error;
      }
      data.toString();
    });
  };

  // ファイルを開く
  const openFile = () => {
    const fileIndex = 0;
    const options = {
      properties: ['openFile'],
    };

    remote.dialog.showOpenDialog(options).then((path) => {
      if (path) {
        // TODO: ファイル読み込みを完成させる（ Redux との連携 ）
        readFile(path.filePaths[fileIndex]);
      }
    });
  };

  // ファイルの保存
  const saveFile = () => {
    // TODO: 実装する
  };

  // 名前を付けて保存
  const saveFileAs = () => {
    // TODO: TODO: 実装する
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
  ];

  const addAppMenu = () => {
    const appMenu = Menu.buildFromTemplate(appMenuTemplate);
    Menu.setApplicationMenu(appMenu);
  };

  return <div className="hidden">{addAppMenu()}</div>;
}
