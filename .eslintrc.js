module.exports = {
	root: true,
	env: {
	  node: true,
	},
	extends: [
	  "plugin:vue/essential",
	  "eslint:recommended",
	  "@vue/typescript/recommended",
	  "@vue/prettier",
	  "@vue/prettier/@typescript-eslint",
	],
	parserOptions: {
	  ecmaVersion: 2020,
	},
	rules: {
		// "no-console": "error"
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto'
			},
		],
	},
  };
  