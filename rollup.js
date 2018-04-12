import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
export default {
	input: './test.js',
	output: {
		file: './test.out.js',
		format: 'cjs',
		banner: '#!/usr/bin/env node'
	},
	plugins: [
		json(),
		resolve(),
		commonjs()
	],
	external: id => {
		// This is not a regex list because this would cause a variety of possible mistakes
		const excludeNodeModulesList = [/nodeModule/]
		const isNodeModule = excludeNodeModulesList.some(rx => rx.test(id))
		if (isNodeModule) {
			return true
		}
		return false
	}
};
