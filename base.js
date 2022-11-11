module.exports = {
    root: true,
    reportUnusedDisableDirectives: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    ignorePatterns: ['coverage', 'dist', 'node_modules', 'output', 'public', 'temp', 'tmp', 'types'],
    rules: {
        'no-undef': 'off',
    },
}
