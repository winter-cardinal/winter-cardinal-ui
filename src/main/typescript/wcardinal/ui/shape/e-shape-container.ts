/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, IPoint, Point, Renderer } from "pixi.js";
import { DynamicAtlas } from "../util/dynamic-atlas";
import { DynamicSDFFontAtlases } from "../util/dynamic-sdf-font-atlases";
import { EShape } from "./e-shape";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeRenderer } from "./e-shape-renderer";

export class EShapeContainer extends DisplayObject {
	protected _shapeRenderer: EShapeRenderer | null = null;

	readonly children: EShape[];
	protected _childrenId: number;
	protected _childrenIdRendered: number;

	protected _atlas: DynamicAtlas | null;
	protected _fontAtlases: DynamicSDFFontAtlases;

	protected _pixelScale: number;
	protected _pixelScaleId: number;

	protected _work: Point;

	protected _buffers: EShapeBuffer[];

	constructor() {
		super();

		this.children = [];

		this._childrenId = 0;
		this._childrenIdRendered = -1;

		this._atlas = null;
		this._fontAtlases = new DynamicSDFFontAtlases();

		this._pixelScale = 1;
		this._pixelScaleId = NaN;

		this._work = new Point();

		this._buffers = [];
	}

	calculateBounds(): void {
		this._bounds.clear();
	}

	onChildTransformChange(): void {
		// DO NOTHING
	}

	toDirty(): number {
		return this._childrenId += 1;
	}

	isDirty(): boolean {
		return this._childrenIdRendered < this._childrenId;
	}

	render( renderer: Renderer ): void {
		if( !this.visible || this.worldAlpha <= 0 || !this.renderable ) {
			return;
		}

		const childrenId = this._childrenId;
		const childrenIdRendered = this._childrenIdRendered;
		this._childrenIdRendered = childrenId;
		const isChildrenDirty = childrenIdRendered < childrenId;
		const children = this.children;

		let shapeRenderer: EShapeRenderer | null = this._shapeRenderer;
		if( shapeRenderer == null ) {
			shapeRenderer = this._shapeRenderer = new EShapeRenderer( renderer );
		}
		renderer.batch.setObjectRenderer( shapeRenderer );

		const mask = this.mask;
		if( mask ) {
			renderer.mask.push( this, mask );
			shapeRenderer.render_( this, children, isChildrenDirty );
			renderer.mask.pop( this, mask );
		} else {
			shapeRenderer.render_( this, children, isChildrenDirty );
		}
	}

	containsPoint( point: Point ): boolean {
		return false;
	}

	getFontAtlases(): DynamicSDFFontAtlases {
		return this._fontAtlases;
	}

	getAtlas( resolution: number ): DynamicAtlas {
		let atlas = this._atlas;
		if( atlas == null ) {
			atlas = new DynamicAtlas( resolution );
			this._atlas = atlas;
		}
		return atlas;
	}

	getBuffers(): EShapeBuffer[] {
		return this._buffers;
	}

	toPixelScale( resolution: number ): number {
		this.updateTransform();
		const transform = this.transform;
		const worldID = (transform as any)._worldID;
		if( worldID !== this._pixelScaleId ) {
			this._pixelScaleId = worldID;
			const worldTransform = transform.worldTransform;
			const a = worldTransform.a;
			const b = worldTransform.b;
			const scale = Math.sqrt( a * a + b * b );
			this._pixelScale = 1 / ( resolution * scale );
		}
		return this._pixelScale;
	}

	getPixelScale(): number {
		return this._pixelScale;
	}

	getAntialiasWeight( resolution: number ): number {
		return 1.25 / resolution;
	}

	hitTest( global: IPoint, handler?: ( shape: EShape ) => boolean ): EShape | null {
		const work = this._work;
		const children = this.children;
		for( let i = children.length - 1; 0 <= i; --i ) {
			const child = children[ i ];
			if( child.visible ) {
				const childLocal = child.toLocal( global, undefined, work );
				const childResult = child.contains( childLocal );
				if( childResult != null ) {
					if( handler == null || handler( childResult ) ) {
						return childResult;
					}
				}
			}
		}

		return null;
	}

	hitTestBBox( global: IPoint, handler?: ( shape: EShape ) => boolean ): EShape | null {
		const work = this._work;
		const children = this.children;
		for( let i = children.length - 1; 0 <= i; --i ) {
			const child = children[ i ];
			if( child.visible ) {
				const childLocal = child.toLocal( global, undefined, work );
				if( child.containsBBox( childLocal ) ) {
					if( handler == null || handler( child ) ) {
						return child;
					}
				}
			}
		}

		return null;
	}

	destroy(): void {
		// Buffer
		const buffers = this._buffers;
		if( buffers != null ) {
			for( let i = 0, imax = buffers.length; i < imax; ++i ) {
				buffers[ i ].destroy();
			}
		}
		this._buffers.length = 0;

		// Shapes
		const children = this.children;
		for( let i = children.length - 1; 0 <= i; --i ) {
			children[ i ].destroy();
		}
		children.length = 0;

		//
		super.destroy();
	}
}
