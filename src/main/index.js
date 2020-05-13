import {BrowserWindow, app} from "electron";
import fs from "fs";

const createWindow = () => {

    // ブラウザウインドウを作成
    const win = new BrowserWindow({
        "height": 720,
        "titleBarStyle": "hidden",
        "webPreferences": {
            "nodeIntegration": true
        },
        "width": 1280
    });

    // そしてこのアプリの index.html をロード
    win.loadFile("index.html");

    /*
     * 開発者ツールを開く
     * win.webContents.openDevTools();
     */

};

// eslint-disable-next-line
if (process.env.NODE_ENV === "development") {

    fs.watch(
        "dist",
        () => {

            for (const win of BrowserWindow.getAllWindows()) {

                win.reload();

            }

        }
    );

}

/*
 * このメソッドは、Electron が初期化処理と
 * BrowserWindow の作成準備が完了した時に呼び出されます。
 * 一部のAPIはこのイベントが発生した後にのみ利用できます。
 */
app.whenReady().then(createWindow);

// 全てのウィンドウが閉じられた時に終了します。
app.on(
    "window-all-closed",
    () => {

        /*
         * ユーザが Cmd + Q で明示的に終了するまで、
         * アプリケーションとそのメニューバーは有効なままにするのが一般的です（ macOS ）。
         */
        if (process.platform !== "darwin") {

            app.quit();

        }

    }

);

app.on(
    "activate",
    () => {

        /*
         * ユーザがドックアイコンをクリックしたとき、
         * そのアプリのウインドウが無かったら再作成するのが一般的です（ macOS ）。
         */
        const noWindow = 0;
        if (BrowserWindow.getAllWindows().length === noWindow) {

            createWindow();

        }

    }

);
