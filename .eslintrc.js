module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
    },
    "extends": [
        "eslint:all",
        "plugin:react/all"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};