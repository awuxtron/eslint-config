module.exports = {
    extends: ['plugin:import/recommended'],
    settings: {
        'import/resolver': {
            node: true,
        },
    },
    rules: {
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-absolute-path': 'warn',
        'import/no-deprecated': 'warn',
        'import/no-mutable-exports': 'error',
        'import/no-self-import': 'error',
        'import/no-unresolved': 'off',
        'import/no-useless-path-segments': 'warn',
        'import/order': [
            'warn',
            {
                alphabetize: { order: 'asc' },
                groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown', 'object'],
                warnOnUnassignedImports: true,
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:import/typescript'],
            settings: {
                'import/resolver': {
                    typescript: true,
                },
            },
        },
    ],
}
