module.exports = {
    env: {
        es2021: true,
        node: true,
        'jest/globals': true,
    },
    extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'jest'],
    rules: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
