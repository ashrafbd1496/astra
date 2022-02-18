/**
 * Internal dependencies
 */

module.exports = {
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended-with-formatting',
		'plugin:import/recommended',
		'plugin:eslint-comments/recommended'
	],
	root: true,
	env: {
		browser: true,
	},
	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			presets: [ require.resolve( '@wordpress/babel-preset-default' ) ],
		},
	},
	overrides: [
		{
			files: [
				'tests/e2e/**/*.js',
			],
			extends: [
				'plugin:@wordpress/eslint-plugin/test-e2e',
				'plugin:jest/all'
			],
			rules: {
				"jest/prefer-lowercase-title": [
					"error",
					{
					  "ignore": [ "describe" ]
					}
				],
				"jest/no-hooks": "off",
				"jest/prefer-expect-assertions": "off",
				"jest/prefer-inline-snapshots": "off"
			}
		}
	]
};
