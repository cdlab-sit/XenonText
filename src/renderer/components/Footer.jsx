/* eslint-disable */
import React from "react";
import {getCharCount} from "../reducks/charCount/selectors";
import {useSelector} from "react-redux";

export default function Footer () {
    const selectors = useSelector(state => state);
    // const charCount = useSelector(selectors);
    console.log(selectors)
    const charCount = getCharCount(selectors)
    console.log(charCount);
    const footer = {
        "en": " charactors",
        "ja": " 文字"
    };
    // エディター部分の文字列長を取得するように変更する

    // 下記の footer 位置固定は absolute ではなく App で flex などでレイアウト決定が良いかも
    return (
        <footer className="w-full h-6 bg-gray-800">
            <p
                className="
                    text-xs text-gray-300 text-right select-none
                    leading-6 w-40 font-medium
                "
            >
                {charCount}
                {footer.en}
            </p>
        </footer>
    );

}
/* eslint-disable */
