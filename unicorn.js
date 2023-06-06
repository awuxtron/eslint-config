module.exports = {
    extends: ['plugin:unicorn/recommended'],
    rules: {
        'unicorn/filename-case': [
            'warn',
            {
                cases: {
                    kebabCase: true,
                    pascalCase: true,
                },
            },
        ],
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/new-for-builtins': 'off',
        'unicorn/no-empty-file': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
    },
}
