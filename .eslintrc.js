module.exports = {
  root: true,
  'parser': 'babel-eslint',
  'extends': [
    'react-app'
  ],
  'plugins': [
    'flowtype',
    'import',
    'jsx-a11y',
    'react'
  ],
  'env': {
    'browser' : true,
    'es6': true,
    'node': true
  },
  'globals': {
    '__DEV__': false,
    '__TEST__': false,
    '__PROD__': false,
    'Axios': false
  },
  'rules': {
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
		'camelcase': 0,
		'no-regex-spaces': 0,
    'import/no-webpack-loader-syntax': 0
	}
}
