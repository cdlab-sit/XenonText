import React from "react";
import ResizePanel from "react-resize-panel";
import {SideBar} from "../components/index";
import EditArea from "./EditArea";

export default function Main () {

    const main = "editer";

    return (
        <div className="flex flex-auto">
            <ResizePanel
                direction="e"
                handleClass="hidden"
            >
                <SideBar />
            </ResizePanel>
            <EditArea />
        </div>
    );

}
