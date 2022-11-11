module.exports = {
    extends: ['./base', './comment', './import', './promise', './unicorn', './prettier'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['./typescript'],
        },
        {
            files: ['*.vue'],
            extends: ['./vue'],
        },
    ],
}
