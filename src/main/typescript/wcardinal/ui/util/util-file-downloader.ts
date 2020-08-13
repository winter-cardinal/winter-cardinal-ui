/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class UtilFileDownloader {
	/**
	 * Downloads a file of the given name and URL.
	 *
	 * @param filename a file name
	 * @param url a file URL
	 */
	static downloadUrl( filename: string, url: string ): void {
		const a = document.createElement( "a" );
		if( "download" in a ) {
			a.href = url;
			a.setAttribute( "download", filename );
			a.style.display = "none";
			document.body.appendChild( a );
			a.click();
			setTimeout((): void => {
				document.body.removeChild( a );
			}, 66);
		} else {
			if( ! window.open( url ) ) {
				location.href = url;
			}
		}
	}

	/**
	 * Downloads a file of the given name with the given contents.
	 *
	 * @param filename a file name
	 * @param contents file contents
	 * @param insertBom false to stop the BOM insertion
	 */
	static download( filename: string, contents: string, insertBom?: boolean ): void {
		const blob = new Blob(
			( insertBom !== false ? [ "\ufeff", contents ] : [ contents ] ),
			{ type: "text/plain" }
		);
		if( window.navigator.msSaveBlob ) {
			window.navigator.msSaveBlob( blob, filename );
		} else {
			this.downloadUrl( filename, URL.createObjectURL( blob ) );
		}
	}
}
