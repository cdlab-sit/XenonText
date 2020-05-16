import PropTypes from "prop-types";
import React from "react";


export default function FileStatus ({pos}) {

    return (
        <div className={pos}>
            <svg
                className="text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1
                    1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414
                    1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586
                    10 4.293 5.707a1 1 0 010-1.414z"
                    fillRule="evenodd"
                />
            </svg>
        </div>
    );

}

FileStatus.propTypes = {
    "pos": PropTypes.string.isRequired
};
