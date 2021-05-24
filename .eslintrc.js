module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:cypress/recommended', 'plugin:prettier/recommended'],
    rules: {
        'cypress/no-unnecessary-waiting': 'error',
    },
};
