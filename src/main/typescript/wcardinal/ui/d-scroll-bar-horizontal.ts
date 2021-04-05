/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DScrollBar, DScrollBarOptions } from "./d-scroll-bar";
import { DScrollBarThumb, DScrollBarThumbOptions } from "./d-scroll-bar-thumb";
import { DScrollBarThumbHorizontal } from "./d-scroll-bar-thumb-horizontal";
import { UtilPointerEvent } from "./util/util-pointer-event";

export class DScrollBarHorizontal extends DScrollBar {
	protected init( options?: DScrollBarOptions ): void {
		super.init( options );

		this.on( UtilPointerEvent.down, ( e: InteractionEvent ) => {
			if( e.target === this ) {
				const width = this.width;
				if( 0 < width ) {
					const size = this._end - this._start;
					const position = e.data.getLocalPosition( this );
					const newStart = Math.min( 1 - size, Math.max( 0, position.x / width - size * 0.5 ) );
					if( this._start !== newStart ) {
						this.emit( "regionmove", newStart, this );
					}
				}
			}
		});

		this._thumb.on( "regionmove", ( x: number ) => {
			const width = this.width;
			if( 0 < width ) {
				const size = this._end - this._start;
				const newStart = Math.min( 1 - size, Math.max( 0, x / width ) );
				if( this._start !== newStart ) {
					this.emit( "regionmove", newStart, this );
				}
			}
		});
	}

	protected createThumb( options?: DScrollBarThumbOptions ): DScrollBarThumb {
		return new DScrollBarThumbHorizontal( options );
	}

	onRegionChange(): void {
		const thumb = this._thumb;
		const width = this.width;
		const height = this.height;
		const thumbMinimumLength = Math.min( width * 0.5, thumb.getMinimumLength() );
		const space = width - thumbMinimumLength;
		const barStart = space * this._start;
		const barLength = space * this._end + thumbMinimumLength - barStart;

		thumb.position.set( barStart, 0 );
		thumb.resize( barLength, height );

		super.onRegionChange();
	}
}
