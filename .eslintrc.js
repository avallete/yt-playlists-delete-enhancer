const unitTestsExtends = ['plugin:ava/recommended']
const cypressTestsExtends = ['plugin:cypress/recommended', 'eslint-config-sinon', 'plugin:chai-friendly/recommended']
const commonExtends = ['plugin:prettier/recommended', 'plugin:unicorn/recommended', 'plugin:radar/recommended']
const tsExtends = ['airbnb-typescript/base', ...commonExtends]
const jsExtends = ['airbnb-base', ...commonExtends]

// Override some rules that we abuse into our tests
const UNIT_TESTS_TS_OVERRIDE = {
  files: ['test/**/*.ts'],
  extends: [...unitTestsExtends, ...tsExtends],
  rules: {
    'radar/no-duplicate-string': 'off',
    'no-unused-expressions': 'off',
  },
}
const UNIT_TESTS_JS_OVERRIDE = {
  files: ['test/**/*.js'],
  extends: [...unitTestsExtends, ...jsExtends],
  rules: {
    'radar/no-duplicate-string': 'off',
    'no-unused-expressions': 'off',
  },
}
const CYPRESS_TS_OVERRIDE = {
  files: ['cypress/**/*.ts'],
  extends: [...cypressTestsExtends, ...tsExtends],
  rules: {
    'radar/no-duplicate-string': 'off',
    'no-unused-expressions': 'off',
  },
}
const CYPRESS_JS_OVERRIDE = {
  files: ['cypress/**/*.js'],
  extends: [...cypressTestsExtends, ...jsExtends],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'radar/no-duplicate-string': 'off',
    'no-unused-expressions': 'off',
    quotes: 'off',
    semi: 'off',
  },
}
const TS_OVERRIDE = {
  files: ['**/*.ts', '**/*.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: [...tsExtends],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [UNIT_TESTS_TS_OVERRIDE, CYPRESS_TS_OVERRIDE],
}

module.exports = {
  extends: jsExtends,
  overrides: [UNIT_TESTS_JS_OVERRIDE, CYPRESS_JS_OVERRIDE, TS_OVERRIDE],
}
