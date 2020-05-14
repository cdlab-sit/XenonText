import {EditArea, SideBar, Tabs} from "../components/index";
import React from "react";
import ResizePanel from "react-resize-panel";

export default function Main () {

    /* eslint-disable react/forbid-component-props */
    return (
        <div className="flex flex-auto">
            <ResizePanel
                direction="e"
                handleClass="hidden"
                style={{"width": "200px"}}
            >
                <SideBar />
            </ResizePanel>
            <div className="flex flex-col w-full">
                <Tabs />
                <EditArea />
            </div>
        </div>
    );
    /* eslint-enable react/forbid-component-props */

}
