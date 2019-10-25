/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class UtilFileDownloader {
	static downloadUrl( filename: string, url: string ): void {
		const a = document.createElement( "a" );
		a.href = url;
		a.download = filename;
		a.style.display = "none";
		document.body.appendChild( a );
		a.click();
		setTimeout((): void => {
			document.body.removeChild( a );
		}, 100);
	}

	static download( filename: string, contents: string ): void {
		const blob = new Blob(
			[ contents ],
			{ type: "text/plain" }
		);
		if( window.navigator.msSaveBlob ) {
			window.navigator.msSaveBlob( blob, filename );
		} else {
			this.downloadUrl( filename, URL.createObjectURL( blob ) );
		}
	}
}
