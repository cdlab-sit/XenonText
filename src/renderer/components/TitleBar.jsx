import React from "react";

export default function TitleBar () {

    const title = "TitleBar";

    return (
        <header className="w-full h-6 absoluto top-0">
            <h1
                className="
                    text-xs text-center text-white
                    leading-6 font-medium
                "
            >
                {title}
            </h1>
        </header>

    );

}
