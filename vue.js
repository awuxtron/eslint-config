module.exports = {
    extends: ['plugin:vue/vue3-recommended', './typescript', './prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
    },
}
