import {EditArea, SideBar, Tabs} from "../components/index";
import React from "react";
import ResizePanel from "react-resize-panel";

export default function Main () {

    return (
        <div className="flex flex-auto">
            <ResizePanel
                direction="e"
                handleClass="hidden"
                // eslint-disable-next-line react/forbid-component-props
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

}

