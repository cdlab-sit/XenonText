import React from "react";

export default function Footer () {

    // エディター部分の文字列長を取得するように変更する
    const charCount = 1234567890,
        footer = {
            "en": " charactors",
            "ja": " 文字"
        };

    // 下記の footer 位置固定は absolute ではなく App で flex などでレイアウト決定が良いかも
    return (
        <footer className="w-full h-6 bg-gray-800">
            <p
                className="
                    text-xs text-gray-300 text-right
                    leading-6 w-40 font-medium
                "
            >
                {charCount}
                {footer.en}
            </p>
        </footer>
    );

}
