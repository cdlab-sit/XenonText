import {FileStatus} from "../components/index";
import React from "react";

export default function Tabs () {

    const item = "Untitled";

    return (
        <div className="bg-gray-900 h-8 w-40 flex flex-row items-center">
            <h2 className="
                text-xs text-gray-300
                my-1 ml-2 leading-6
                w-32 h-6
                "
            >
                {item}
            </h2>
            <FileStatus />
        </div>
    );

}

