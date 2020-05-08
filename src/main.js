const { app, BrowserWindow } = require('electron')

function createWindow () {
  // ブラウザウインドウを作成
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // そしてこのアプリの index.html をロード
  win.loadFile('index.html')

  // 開発者ツールを開く
  // win.webContents.openDevTools()
}

// このメソッドは、Electron が初期化処理と
// browser window の作成準備が完了した時に呼び出されます。
// 一部のAPIはこのイベントが発生した後にのみ利用できます。
app.whenReady().then(createWindow)

// 全てのウィンドウが閉じられた時に終了します。
app.on('window-all-closed', () => {
  // macOSでは、ユーザが Cmd + Q で明示的に終了するまで、
  // アプリケーションとそのメニューバーは有効なままにするのが一般的です。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // macOSでは、ユーザがドックアイコンをクリックしたとき、
  // そのアプリのウインドウが無かったら再作成するのが一般的です。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})