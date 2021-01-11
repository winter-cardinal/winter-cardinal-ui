/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const path = require( "path" );
const fs = require( "fs" ).promises;

const CHEATSHEET_DIR = "./src/main/cheatsheet";
const DOCS_CHEATSHEET_DIR = "./docs/cheatsheet";

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

const eachFiles = ( dir, iteratee, filter, recursively, rootDir ) => {
	rootDir = rootDir != null ? rootDir : dir;
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
						relative: path.relative( rootDir, filepath ),
						stat: stat,
						name: parsed.name,
						ext: parsed.ext
					};
					if( filter == null || filter( file ) ) {
						return iteratee( file );
					}
				} else if( recursively && stat.isDirectory() ) {
					return eachFiles( filepath, iteratee, filter, recursively, rootDir );
				}
			}));
		});
		return Promise.all( promises );
	});
};

const loadFile = ( file ) => {
	return fs.readFile( file.path, 'utf8' ).then(( contents ) => {
		file.contents = contents;
		return file;
	});
};

const isMarkdownFile = ( file ) => {
	return file.ext === ".md";
};

const make = async ( dir, destinationFile ) => {
	logger.begin( "Generating cheatsheet" );
	logger.log( destinationFile );

	// Files
	let files = await eachFiles( path.join( CHEATSHEET_DIR, dir ), loadFile, isMarkdownFile );
	files = files.filter( filepath  => filepath != null ).sort(( a , b ) => {
		if( a.relative < b.relative ) {
			return -1;
		} else if( b.relative < a.relative ) {
			return +1;
		} else {
			return 0;
		}
	});

	logger.begin( "Source files" );
	files.forEach(( file ) => {
		logger.log( path.join( dir, file.dir, `${file.name}${file.ext}` ) );
	});
	logger.end();

	// Header
	const header = '# Cheatsheet\n\n';

	// Body
	const body = files.map( file => file.contents ).join( "\n" );

	// TOC
	const toc = '## Table of contents\n\n' + files.map(( file ) => {
		return file.contents.split( "\n" )
		.filter(( line ) => {
			return line.trim().startsWith( "##" );
		})
		.map(( line ) => {
			const isSubSection = line.startsWith( '###' );
			const trimmed = line.substring( isSubSection ? 3 : 2 ).trim();
			const anchor = trimmed.toLowerCase().replace( /[^a-zA-Z0-9- ]/g, "" ).replace( /\s+/g, "-" );
			return (isSubSection ? "\t" : "") + `* [${trimmed}](#${anchor})`;
		})
		.join( "\n" );
	})
	.join( "\n" ) + "\n\n";

	// Write
	const contents = header + toc + body;
	await fs.writeFile( path.join( DOCS_CHEATSHEET_DIR, destinationFile ), contents, 'utf8' );
	logger.end();
};

make( "basics", "all-in-one.md" );
