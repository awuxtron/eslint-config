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
        'unicorn/no-await-expression-member': 'off',
        'unicorn/new-for-builtins': 'off',
        'unicorn/no-empty-file': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',
    },
}
