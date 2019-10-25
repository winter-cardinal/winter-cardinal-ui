/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

export class UtilClipboard extends utils.EventEmitter {
	constructor() {
		super();

		const element = document.body;
		element.addEventListener( "copy", ( e: ClipboardEvent ): void => {
			if( e.target === element ) {
				e.preventDefault();
				e.stopPropagation();
				this.emit( "copy", this.toClipboardData( e ) );
			}
		});

		element.addEventListener( "cut", ( e: ClipboardEvent ): void => {
			if( e.target === element ) {
				e.preventDefault();
				e.stopPropagation();
				this.emit( "cut", this.toClipboardData( e ) );
			}
		});

		element.addEventListener( "paste", ( e: ClipboardEvent ): void => {
			if( e.target === element ) {
				e.preventDefault();
				e.stopPropagation();
				this.emit( "paste", this.toClipboardData( e ) );
			}
		});
	}

	toClipboardData( e: ClipboardEvent ): DataTransfer {
		return e.clipboardData || (window as any).clipboardData;
	}

	static copy( text: string ): void {
		if( navigator.clipboard ) {
			navigator.clipboard.writeText( text );
		} else {
			const textArea = document.createElement( "textarea" );
			textArea.value = text;
			document.body.appendChild( textArea );
			textArea.focus();
			textArea.select();

			try {
				document.execCommand( "copy" );
			} catch ( e ) {
				// DO NOTHING
			}

			document.body.removeChild( textArea );
		}
	}
}
