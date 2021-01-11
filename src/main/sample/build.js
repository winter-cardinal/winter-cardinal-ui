/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const path = require( "path" );
const fs = require( "fs" ).promises;
const rimraf = require( "rimraf" );
const PIXI_VERSION = require( "pixi.js/package" ).version;
const WCUI_VERSION = require( '../../../package.json' ).version;

const SAMPLE_DIR = "./src/main/sample";
const SAMPLE_WHITE_DIR = path.join( SAMPLE_DIR, "white" );
const SAMPLE_DARK_DIR = path.join( SAMPLE_DIR, "dark" );
const SAMPLE_RESOURCE_DIR = path.join( SAMPLE_DIR, "resource" );

const SAMPLE_JS_DIR = path.join( SAMPLE_DIR, "js" );
const SAMPLE_JS_PIXI_DIR = path.join( SAMPLE_JS_DIR, "pixi/latest" );
const SAMPLE_JS_WCUI_DIR = path.join( SAMPLE_JS_DIR, "wcardinal-ui/latest" );

const DOCS_SAMPLE_DIR = "./docs/sample";
const DOCS_SAMPLE_WHITE_DIR = path.join( DOCS_SAMPLE_DIR, "white" );
const DOCS_SAMPLE_DARK_DIR = path.join( DOCS_SAMPLE_DIR, "dark" );
const DOCS_SAMPLE_RESOURCE_DIR = path.join( DOCS_SAMPLE_DIR, "resource" );

const DOCS_SAMPLE_JS_DIR = path.join( DOCS_SAMPLE_DIR, "js" );
const DOCS_SAMPLE_JS_PIXI_DIR = path.join( DOCS_SAMPLE_JS_DIR, "pixi", PIXI_VERSION );
const DOCS_SAMPLE_JS_WCUI_DIR = path.join( DOCS_SAMPLE_JS_DIR, "wcardinal-ui", WCUI_VERSION );

const logger = {
	_indent: 0,
	_isFirst: true,

	begin( message ) {
		const isFirst = this._isFirst;
		this._isFirst = false;
		if( ! isFirst && this._indent === 0 ) {
			console.log( "" );
		}
		this.log( message );
		this._indent += 1;
	},

	end() {
		this._indent -= 1;
	},

	log( message ) {
		let indent = "";
		for( let i = 0, imax = this._indent; i < imax; ++i ) {
			indent += "  ";
		}
		console.log( indent + message );
	}
}

const cleanupDirectory = ( path ) => {
	return new Promise(( resolve ) => {
		logger.log( path );
		rimraf( path, () => {
			fs.mkdir( path, { recursive: true } ).then(() => {
				resolve();
			});
		});
	});
};

const makeDirectory = ( dir ) => {
	logger.log( dir );
	return fs.mkdir( dir, { recursive: true } );
}

const toDarkSample = ( contents ) => {
	return contents
		.replace( /-theme-white\./g, "-theme-dark." )
		.replace( /background-color:\s*#[a-fA-F0-9]+/g, "background-color: #2e2e2e" );
};

const toVersionedSample = ( contents ) => {
	return contents
		.replace( /\/wcardinal-ui\/latest\//g, `/wcardinal-ui/${WCUI_VERSION}/` )
		.replace( /\/pixi\/latest\//g, `/pixi/${PIXI_VERSION}/` );
};

const writeFile = ( dir, name, ext, contents ) => {
	const filepath = path.join( dir, `${name}${ext}` );
	logger.log( filepath );
	return fs.mkdir( dir, { recursive: true } ).then(() => {
		return fs.writeFile( filepath, contents, 'utf8' );
	});
}

const makeDarkSample = async ( file ) => {
	const contents = await fs.readFile( file.path, 'utf8' );
	await writeFile( path.join( SAMPLE_DARK_DIR, file.dir ), file.name, file.ext, toDarkSample( contents ) );
	return file;
};

const makeDocsSample = async ( file ) => {
	const contents = await fs.readFile( file.path, 'utf8' );
	file.contents = contents;

	const white = toVersionedSample( contents );
	await writeFile( path.join( DOCS_SAMPLE_WHITE_DIR, file.dir ), file.name, file.ext, white );

	const dark = toDarkSample( white );
	await writeFile( path.join( DOCS_SAMPLE_DARK_DIR, file.dir ), file.name, file.ext, dark );

	return file;
};

const compareString = ( a, b ) => {
	return (a < b ? -1 : (b < a ? +1 : 0));
};

const compareFile = ( a, b ) => {
	if( a == null ) {
		if( b == null ) {
			return 0;
		} else {
			return +1;
		}
	} else {
		if( b == null ) {
			return -1;
		}
	}

	return compareString( a.title, b.title );
};

const toLabel = ( name ) => {
	return name[ 0 ].toUpperCase() + name.substring( 1, name.length ).replace( /-/g, " " );
};

const toTitle = ( file ) => {
	const contents = file.contents;
	const TITLE_START = "<title>";
	const TITLE_END = "</title>";
	const index0 = contents.indexOf( TITLE_START );
	if( 0 <= index0 ) {
		const index1 = contents.indexOf( TITLE_END, index0 + TITLE_START.length );
		if( 0 <= index1 ) {
			return contents.substring( index0 + TITLE_START.length, index1 );
		}
	}
	return toLabel( file.name );
};

const toIndent = ( level, part ) => {
	let result = "";
	for( let i = 0; i < level; ++i ) {
		result += part;
	}
	return result;
}

const toUrl = ( file ) => {
	if( 0 < file.dir.length ) {
		return `${file.dir}/${file.name}.html`;
	}
	return `${file.name}.html`;
};

const toIndexHTML = ( files, level ) => {
	const indent = toIndent( level, "	" );
	let result = `${indent}<ul>\n`;
	files.sort( compareFile );
	files.forEach(( file ) => {
		if( file != null ) {
			if( "files" in file ) {
				const children = file.files;
				if( 0 < children.length ) {
					result += `${indent}	<li>${toLabel( file.name )}\n`;
					result += toIndexHTML( children, level + 1 );
					result += `${indent}	</li>\n`
				}
			} else {
				const url = toUrl( file );
				result += `${indent}	<li><a href="./${url}">${toTitle( file )}</a></li>\n`;
			}
		}
	});
	result += `${indent}</ul>\n`;
	return result;
};

const makeIndexHTML = async ( dir, files ) => {
	const contents =
	'<!DOCTYPE html>\n' +
	'<html>\n' +
	'<head>\n' +
	'	<meta charset="utf-8">\n' +
	'	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">\n' +
	'	<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
	'	<style>\n' +
	'	body {\n' +
	'		margin: 0;\n' +
	'		padding: 4em;\n' +
	'	}\n' +
	'	</style>\n' +
	'</head>\n' +
	'<body>\n' +
	'	<h1>Samples</h1>\n' +
	toIndexHTML( files, 1 ) +
	'</body>\n' +
	'</html>';

	await writeFile( dir, "index", ".html", contents );
};

const toIndexMarkdown = ( files, level ) => {
	const indent = toIndent( level, "    " );
	let result = "";
	files.sort( compareFile );
	files.forEach(( file ) => {
		if( file != null ) {
			if( "files" in file ) {
				const children = file.files;
				if( 0 < children.length ) {
					result += `${indent}* ${toLabel( file.name )}\n`;
					result += toIndexMarkdown( children, level + 1 );
				}
			} else {
				const url = toUrl( file );
				result += `${indent}* [${toTitle( file )}](./${url})\n`;
			}
		}
	});
	return result;
};

const makeIndexMarkdown = async ( dir0, dir1, files ) => {
	const contents = `# Samples\n\n${toIndexMarkdown( files, 0 )}\n`;
	await writeFile( dir0, "index", ".md", contents );
	await writeFile( dir1, "index", ".md", contents );
};

const copyFile = async ( dir, file ) => {
	const contents = await fs.readFile( file.path, 'utf8' );
	await writeFile( path.join( dir, file.dir ), file.name, file.ext, contents );
	return file;
}

const loadFile = ( file ) => {
	return fs.readFile( file.path, 'utf8' ).then(( contents ) => {
		file.contents = contents;
		file.title = toTitle( file );
		return file;
	});
};

const eachFiles = ( dir, iteratee, filter, recursively, rootDir ) => {
	if( rootDir == null ) {
		rootDir = dir;
	}
	return fs.readdir( `${dir}/` ).then(( filenames ) => {
		const promises = [];
		filenames.forEach(( filename ) => {
			const filepath = path.resolve( dir, filename );
			promises.push( fs.stat( filepath ).then(( stat ) => {
				if( stat.isFile() ) {
					const parsed = path.parse( filename );
					const file = {
						path: filepath,
						dir: path.relative( rootDir, dir ),
						stat: stat,
						name: parsed.name,
						ext: parsed.ext,
						title: toLabel( parsed.name )
					};
					if( filter == null || filter( file ) ) {
						return iteratee( file );
					}
				} else if( recursively && stat.isDirectory() ) {
					return eachFiles( filepath, iteratee, filter, recursively, rootDir ).then(( files ) => {
						return {
							name: filename,
							title: toLabel( filename ),
							files: files
						}
					});
				}
			}));
		});
		return Promise.all( promises );
	});
};

const isIndexFile = ( file ) => {
	return file.name === "index";
}

const isPublic = ( file ) => {
	return ! file.name.startsWith( "_" );
};

const isFile = ( file ) => {
	return true;
};

const isHTMLFile = ( file ) => {
	return file.ext === ".html";
};

const isSampleHTMLFile = ( file ) => {
	return isHTMLFile( file ) && ! isIndexFile( file );
};

const isJSFile = ( file ) => {
	return ( file.ext === ".js" || file.ext === ".map" );
};

const isJSForBrowser = ( file ) => {
	return isJSFile( file ) &&
		file.name.indexOf( ".cjs" ) < 0 &&
		file.name.indexOf( ".esm" ) < 0 &&
		file.name.indexOf( ".browser" ) < 0;
};

const buildDark = async () => {
	logger.begin( "Cleaning up directories" );
	await cleanupDirectory( SAMPLE_DARK_DIR );
	logger.end();

	logger.begin( "Generating dark samples" );
	await eachFiles( SAMPLE_WHITE_DIR, makeDarkSample, isHTMLFile, true );
	logger.end();
};

const buildIndex = async () => {
	logger.begin( "Generating index page" );
	const files = await eachFiles( SAMPLE_WHITE_DIR, loadFile, isSampleHTMLFile, true );
	await makeIndexHTML( SAMPLE_WHITE_DIR, files );
	logger.end();
};

const buildDocs = async () => {
	logger.begin( "Versions" );
	logger.log( `PixiJS: ${PIXI_VERSION}` );
	logger.log( `WinterCardinal UI: ${WCUI_VERSION}` );
	logger.end();

	// Cleanup directories
	logger.begin( "Cleaning up directories" );
	await cleanupDirectory( DOCS_SAMPLE_DIR );
	logger.end();

	// Make samples
	logger.begin( "Generating samples" );
	const files = await eachFiles( SAMPLE_WHITE_DIR, makeDocsSample, isSampleHTMLFile, true );
	logger.end();

	// Copy JS files
	logger.begin( "Copying JS files" );
	await eachFiles( SAMPLE_JS_PIXI_DIR, ( file ) => {
		return copyFile( DOCS_SAMPLE_JS_PIXI_DIR, file );
	}, isFile );
	await eachFiles( SAMPLE_JS_WCUI_DIR, ( file ) => {
		return copyFile( DOCS_SAMPLE_JS_WCUI_DIR, file );
	}, isJSForBrowser );
	logger.end();

	// Copy resource files
	logger.begin( "Copying resource files" );
	await eachFiles( SAMPLE_RESOURCE_DIR, ( file ) => {
		return copyFile( DOCS_SAMPLE_RESOURCE_DIR, file );
	}, isFile, true );
	logger.end();

	// Create index html
	logger.begin( "Generating index page" );
	await makeIndexMarkdown( DOCS_SAMPLE_WHITE_DIR, DOCS_SAMPLE_DARK_DIR, files );
	logger.end();
};

const argv = process.argv;
if( argv.length < 2 ) {
	logger.log( "dark: Builds dark samples" );
	logger.log( "index: Builds index.html" );
	logger.log( "docs: Builds samples in the docs/sample" );
} else {
	const command = argv[ 2 ];
	switch( command ) {
	case "dark":
		buildDark();
		break;
	case "index":
		buildIndex();
		break;
	case "docs":
		buildDocs();
		break;
	default:
		logger.log( `Unknown command: ${command}` );
	}
}
