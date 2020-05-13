import {Footer, Main, TitleBar} from "./components/index";
import React from "react";

export default function App () {

    return (
        <div className="flax flax-col h-screen">
            <TitleBar />
            <Main />
            <Footer />
        </div>
    );

}
