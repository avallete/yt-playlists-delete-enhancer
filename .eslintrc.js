const unitTestsExtends = ['plugin:ava/recommended']
const cypressTestsExtends = ['plugin:cypress/recommended', 'eslint-config-sinon', 'plugin:chai-friendly/recommended']
const commonExtends = ['plugin:prettier/recommended', 'plugin:unicorn/recommended', 'plugin:sonarjs/recommended']
const tsExtends = ['airbnb-typescript/base', ...commonExtends]
const jsExtends = ['airbnb-base', ...commonExtends]

// Override some rules that we abuse into our tests
const UNIT_TESTS_TS_OVERRIDE = {
  files: ['test/**/*.ts', 'test/**/*.tsx'],
  extends: [...unitTestsExtends, ...tsExtends],
  rules: {
    'sonarjs/no-duplicate-string': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
}
const UNIT_TESTS_JS_OVERRIDE = {
  files: ['test/**/*.js'],
  extends: [...unitTestsExtends, ...jsExtends],
  rules: {
    'sonarjs/no-duplicate-string': 'off',
    'no-unused-expressions': 'off',
  },
}
const CYPRESS_TS_OVERRIDE = {
  files: ['cypress/**/*.ts'],
  extends: [...cypressTestsExtends, ...tsExtends],
  rules: {
    'sonarjs/no-duplicate-string': 'off',
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
    'sonarjs/no-duplicate-string': 'off',
    'no-unused-expressions': 'off',
    quotes: 'off',
    semi: 'off',
  },
}
const TS_OVERRIDE = {
  rules: {
    // disable for event handlers, use preact naming convention for scoped ignore rules
    // allow us to du currentTarget.value = 'something' into event handlers
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['currentTarget'] }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    // DOM .append unavailable in typescript types definitions
    'unicorn/prefer-dom-node-append': 'off',
    // Since our final script is bundled, devDependencies and dependencies are just useful
    // for semantic separation. Only include in dependencies the packages who the code actually
    // end up into your final bundled file
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
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
