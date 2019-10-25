import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { version } from './package.json';
import { terser } from "rollup-plugin-terser";
import path from 'path';
import copy from 'rollup-plugin-copy';
import sourcemaps from 'rollup-plugin-sourcemaps';
import fs from 'fs';

// In/out directories
const name = 'wcardinal-ui';
const SOURCE_DIR = 'dist/';
const OUTPUT_FILE = `dist/${name}`
const META_INF_DIR = `src/test/resources/META-INF/resources/webjars/${name}/${version}/`;
const PIXI_DIR = 'src/test/resources/META-INF/resources/webjars/pixi/latest/';

// License header
const LICENSE_HEADER_LINES = fs.readFileSync( './LICENSE_HEADER', 'UTF-8' ).split( '\n' );
const LICENSE_HEADER_LINES_LENGTH = LICENSE_HEADER_LINES.length;
if( 0 < LICENSE_HEADER_LINES_LENGTH && LICENSE_HEADER_LINES[ LICENSE_HEADER_LINES_LENGTH - 1 ].trim().length <= 0 ) {
        LICENSE_HEADER_LINES.splice( LICENSE_HEADER_LINES_LENGTH - 1, 1 );
}
const LICENSE_HEADER = LICENSE_HEADER_LINES.join( '\n ' );

// Banner
const BANNER =
`/*
 Winter Cardinal UI v${version}
 ${LICENSE_HEADER}
*/`

// Terser options
const TERSER_OPTIONS = {
	compress: {
		passes: 3
	},
	output: {
		preamble: BANNER
	},
	mangle: {
		properties: {
			regex: /(^_[\$\w]+[A-Za-z]$|^[A-Za-z]\w+_$)/,
			reserved: [
				'_immediateFn',
				'__plugins',
				'_updateUvs',
				'_bounds',
				'_recursivePostUpdateTransform',
				'_refresh',
				'_render',
				'_calculateBounds',
				'_uvs',
				'_currentLocalID',
				'_worldID',
				'_localID',
				'_parentID',
				'_destroyed',
				'_updateID'
			]
		}
	}
};

// Rollup settings
export default ( !process.env.ROLLUP_WATCH ?
	[{
		input: `${SOURCE_DIR}${name}.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}.js`,
			format: 'iife',
			banner: BANNER,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			resolve(),
			commonjs()
		],
		external: [
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}${name}.js`,
		output: [{
			file: `${OUTPUT_FILE}.cjs.js`,
			format: 'cjs',
			banner: BANNER
		}],
		plugins: [
			resolve(),
			commonjs()
		],
		external: [
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}${name}.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}.min.js`,
			format: 'iife',
			sourcemap: true,
			sourcemapPathTransform: ( relativePath ) => {
				return path.relative( "../src/main/typescript/", relativePath )
			},
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			sourcemaps(),
			resolve(),
			commonjs(),
			terser( TERSER_OPTIONS ),
			copy({
				targets: [
					{ src: `dist/${name}.js`, dest: META_INF_DIR },
					{ src: `dist/${name}.min.js`, dest: META_INF_DIR },
					{ src: `dist/${name}.min.js.map`, dest: META_INF_DIR },
					{ src: 'node_modules/pixi.js/dist/*', dest: PIXI_DIR }
				],
				hook: 'writeBundle'
			})
		],
		external: [
			"pixi.js"
		]
	}] :
	[{
		input: `${SOURCE_DIR}${name}.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}.js`,
			format: 'iife',
			banner: BANNER,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			resolve(),
			commonjs(),
			copy({
				targets: [
					{ src: `dist/${name}.js`, dest: META_INF_DIR },
					{ src: `dist/${name}.js`, dest: META_INF_DIR, rename: `${name}.min.js` },
					{ src: 'node_modules/pixi.js/dist/*', dest: PIXI_DIR }
				],
				hook: 'writeBundle'
			})
		],
		external: [
			"pixi.js"
		]
	}]
);
