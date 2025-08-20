// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
	{
		ignores: ['dist/**/*', 'node_modules/**/*']
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			sourceType: 'module',
			globals: {
				...globals.node
			}
		},
		rules: {}
	}
];
