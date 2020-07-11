import React from "react";
import {getFooterCount} from "../reducks/editText/selectors";
import {useSelector} from "react-redux";

export default function Footer () {

    const charCount = getFooterCount(useSelector((state) => state)),
        footer = {
            "en": " charactors",
            "ja": " 文字"
        };

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
