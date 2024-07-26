
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb-base',
        'plugin:jest/all',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement',
            'space-infix-ops': 'off',
            'no-multi-spaces': 'off',
            'no-magic-numbers': 'off'
        ],
    },
    overrides: [
        {
            files: ['*.js'],
            excludedFiles: 'babel.config.js',
        }
    ]
};
