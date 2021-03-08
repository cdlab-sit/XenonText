import { remote } from 'electron';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSideBarVisibility } from '../reducks/settings/actions';
import { getSideBarVisibility } from '../reducks/settings/selectors';
import utils from './utils';
import store from '../reducks/store/store';

const { app, Menu } = remote;
const { addNewFile, openFile, saveFileAs, saveFile } = utils();

export default function AppMenu() {
  const dispatch = useDispatch();
  const sideBarVisibility = getSideBarVisibility(
    useSelector((state) => state.settings),
  );

  const toggleSideBarVisibility = () => {
    dispatch(setSideBarVisibility(!sideBarVisibility));
  };

  const closeFile = () => {
    const { activeDocumentId } = store.getState().editor;
    const { closeFile: utilsCloseFile } = utils();
    utilsCloseFile(activeDocumentId);
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
          accelerator: 'CmdOrCtrl+N',
          click: addNewFile,
        },
        {
          type: 'separator',
        },
        {
          label: '開く…',
          accelerator: 'CmdOrCtrl+O',
          click: openFile,
        },
        {
          type: 'separator',
        },
        {
          label: '保存',
          accelerator: 'CmdOrCtrl+S',
          click: saveFile,
        },
        {
          label: '名前を付けて保存…',
          accelerator: 'Shift+CmdOrCtrl+S',
          click: saveFileAs,
        },
        {
          type: 'separator',
        },
        {
          label: 'ファイルを閉じる',
          accelerator: 'CmdOrCtrl+W',
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
          accelerator: 'CmdOrCtrl+Z',
          role: 'undo',
        },
        {
          label: 'やり直し',
          accelerator: 'Shift+CmdOrCtrl+Z',
          role: 'redo',
        },
        {
          type: 'separator',
        },
        {
          label: '切り取り',
          accelerator: 'CmdOrCtrl+X',
          role: 'cut',
        },
        {
          label: 'コピー',
          accelerator: 'CmdOrCtrl+C',
          role: 'copy',
        },
        {
          label: '貼り付け',
          accelerator: 'CmdOrCtrl+V',
          role: 'paste',
        },
        {
          type: 'separator',
        },
        {
          label: '検索',
          accelerator: 'CmdOrCtrl+F',
          enabled: false,
        },
        {
          label: '置換',
          accelerator: 'Shift+CmdOrCtrl+F',
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
          accelerator: 'CmdOrCtrl+A',
          role: 'selectAll',
        },
        {
          label: '行を選択',
          accelerator: 'CmdOrCtrl+L',
          enabled: false,
        },
        {
          label: '単語を選択',
          accelerator: 'CmdOrCtrl+D',
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
          accelerator: 'CmdOrCtrl+B',
          type: 'checkbox',
          checked: sideBarVisibility,
          click: toggleSideBarVisibility,
        },
        {
          type: 'separator',
        },
        {
          label: 'フルスクリーンにする',
          accelerator: 'Option+CmdOrCtrl+F',
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
