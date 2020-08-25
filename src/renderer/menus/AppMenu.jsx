import { remote } from 'electron';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewDocument } from '../reducks/editor/actions';

const { app, Menu } = remote;

export default function AppMenu() {
  const dispatch = useDispatch();

  // 新規ファイル
  const addNewFile = () => {
    dispatch(setNewDocument());
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
  ];

  const addAppMenu = () => {
    const appMenu = Menu.buildFromTemplate(appMenuTemplate);
    Menu.setApplicationMenu(appMenu);
  };

  return <div className="hidden">{addAppMenu()}</div>;
}
