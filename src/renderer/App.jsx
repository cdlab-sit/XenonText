import React, { useState } from 'react';
import { remote } from 'electron';
import Footer from './components/Footer';
import Body from './components/Body';
import TitleBar from './components/TitleBar';
import AppMenu from './menus/AppMenu';

export default function App() {
  // スクリーン状態を保持
  const [isFullScreen, setFullScreen] = useState(false);

  // スクリーン状態の書き換え
  const currentWindow = remote.getCurrentWindow();
  currentWindow.on('enter-full-screen', () => {
    setFullScreen(true);
  });
  currentWindow.on('leave-full-screen', () => {
    setFullScreen(false);
  });

  return (
    <div className="flex flex-col h-screen">
      {!isFullScreen && <TitleBar />}
      <Body />
      <Footer />
      <AppMenu />
    </div>
  );
}
