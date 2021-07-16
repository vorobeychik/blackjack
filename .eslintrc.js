module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
     project: './tsconfig.json',
    },
    rules: {
        "no-underscore-dangle":"off",
        "import/prefer-default-export":"off",
        "no-param-reassign":"off",
        "import/no-cycle":"off",
        "@typescript-eslint/object-curly-spacing":"off",
        "@typescript-eslint/space-infix-ops":"off",
        'max-len':'off',
        'jsx-a11y/click-events-have-key-events':'off',
        'jsx-a11y/no-static-element-interactions':'off',
    },
};