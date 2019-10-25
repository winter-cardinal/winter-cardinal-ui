/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { resources } from "pixi.js";

export class SVGResource extends resources.BaseImageResource {
	readonly source!: HTMLImageElement;
	readonly svg: string;

	protected _load: Promise<void> | null = null;

	constructor( source: string, options: any ) {
		super( new Image() );
		this._width = 0;
		this._height = 0;
		this.svg = source;

		resources.BaseImageResource.crossOrigin( this.source, this.svg, options && options.crossorigin );

		if( ! options || options.autoLoad !== false ) {
			this.load();
		}
	}

	load(): Promise<void> {
		if( this._load ) {
			return this._load;
		}

		this._load = new Promise(( resolve ): void => {
			const image: HTMLImageElement = this.source;

			image.onerror = ( event ): void => {
				image.onerror = null;
				(this as any).onError.run( event ); // TODO: Fix PixiJS
			};

			image.onload = (): void => {
				(this.resize as any)( image.width, image.height ); // TODO: Fix PixiJS
				resolve();
			};

			image.src = this.svg;
		});

		return this._load;
	}

	static test( source: unknown, extension: string ) {
		// url file extension is SVG
		return extension === "svg"
			// source is SVG data-uri
			|| (typeof source === "string" && source.indexOf("data:image/svg+xml;base64") === 0)
			// source is SVG inline
			|| (typeof source === "string" && source.indexOf("<svg") === 0);
	}
}
