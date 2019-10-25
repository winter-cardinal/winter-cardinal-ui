/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeRendererIteratorDatum } from "./e-shape-renderer-iterator-datum";

export class EShapeRendererIterator {
	protected _index: number;
	protected _data: EShapeRendererIteratorDatum[];
	protected _datum: EShapeRendererIteratorDatum;
	protected _current: EShape | null;

	constructor() {
		this._index = -1;
		this._datum = new EShapeRendererIteratorDatum();
		this._data = [ this._datum ];
		this._current = null;
	}

	reset( shapes: EShape[] ): EShape | null {
		this._index = 0;
		const current = this._datum = this._data[ 0 ];
		current.reset( shapes );
		this._current = null;
		return this.next();
	}

	get(): EShape | null {
		return this._current;
	}

	next(): EShape | null {
		const datum = this._datum;
		const shape = datum.next();
		if( shape != null ) {
			this._current = shape;
			const children = shape.children;
			if( 0 < children.length ) {
				const datumIndex = this._index = this._index + 1;
				const data = this._data;
				if( datumIndex < data.length ) {
					const newDatum = data[ datumIndex ];
					newDatum.reset( children );
					this._datum = newDatum;
				} else {
					const newDatum = new EShapeRendererIteratorDatum();
					data.push( newDatum );
					newDatum.reset( children );
					this._datum = newDatum;
				}
			}
			return shape;
		} else {
			const datumIndex = this._index = this._index - 1;
			const data = this._data;
			if( 0 <= datumIndex ) {
				this._datum = data[ datumIndex ];
				this._current = null;
				return this.next();
			} else {
				this._current = null;
				return null;
			}
		}
	}
}
