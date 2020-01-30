/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Buffer, DRAW_MODES, Geometry, Renderer, Shader, Texture } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeBufferUnitBuilder } from "./e-shape-buffer-unit-builder";
import { EShapeRendererIterator } from "./e-shape-renderer-iterator";
import { EShapeType } from "./e-shape-type";
import { EShapeUploaded } from "./e-shape-uploaded";
import { EShapeUploadeds } from "./e-shape-uploadeds";

export class EShapeBuffer {
	vertices: Float32Array;
	protected _vertexCapacity: number;
	protected _vertexCount: number;
	protected _vertexBuffer: Buffer | null;

	clippings: Float32Array;
	protected _clippingBuffer: Buffer | null;

	steps: Float32Array;
	protected _stepBuffer: Buffer | null;

	colorFills: Float32Array;
	protected _colorFillBuffer: Buffer | null;

	colorStrokes: Float32Array;
	protected _colorStrokeBuffer: Buffer | null;

	uvs: Float32Array;
	protected _uvBuffer: Buffer | null;

	indices: Uint16Array | Uint32Array;
	protected _indexCapacity: number;
	protected _indexCount: number;
	indexCountRequested: number;
	protected _indexBuffer: Buffer | null;

	protected _renderer: Renderer;
	protected _geometry: Geometry | null;

	protected _builder: EShapeBufferUnitBuilder;

	constructor( ntriangles: number, renderer: Renderer ) {
		const nindices = ntriangles * 3;
		const nvertices = nindices;

		this.vertices = new Float32Array( nvertices * 2 );
		this._vertexCapacity = nvertices;
		this._vertexCount = 0;
		this._vertexBuffer = null;

		this.clippings = new Float32Array( nvertices * 3 );
		this._clippingBuffer = null;

		this.steps = new Float32Array( nvertices * 6 );
		this._stepBuffer = null;

		this.colorFills = new Float32Array( nvertices * 4 );
		this._colorFillBuffer = null;

		this.colorStrokes = new Float32Array( nvertices * 4 );
		this._colorStrokeBuffer = null;

		this.uvs = new Float32Array( nvertices * 2 );
		this._uvBuffer = null;

		const isIndicesShort = ( nvertices <= 65535 );
		this.indices = ( isIndicesShort ? new Uint16Array( nindices ) : new Uint32Array( nindices ) );
		this._indexCapacity = ntriangles;
		this._indexCount = 0;
		this.indexCountRequested = 0;
		this._indexBuffer = null;

		this._renderer = renderer;

		this._builder = new EShapeBufferUnitBuilder();

		this._geometry = null;
	}

	updateVertices(): void {
		const vertexBuffer = this._vertexBuffer;
		if( vertexBuffer ) {
			vertexBuffer.update();
		}
	}

	updateClippings(): void {
		const clippingBuffer = this._clippingBuffer;
		if( clippingBuffer ) {
			clippingBuffer.update();
		}
	}

	updateSteps(): void {
		const stepBuffer = this._stepBuffer;
		if( stepBuffer ) {
			stepBuffer.update();
		}
	}

	updateColorFills(): void {
		const colorFillBuffer = this._colorFillBuffer;
		if( colorFillBuffer ) {
			colorFillBuffer.update();
		}
	}

	updateColorStrokes(): void {
		const colorStrokeBuffer = this._colorStrokeBuffer;
		if( colorStrokeBuffer ) {
			colorStrokeBuffer.update();
		}
	}

	updateUvs(): void {
		const uvBuffer = this._uvBuffer;
		if( uvBuffer ) {
			uvBuffer.update();
		}
	}

	updateIndices(): void {
		const indexBuffer = this._indexBuffer;
		if( indexBuffer ) {
			indexBuffer.update();
		}
	}

	protected getGeometry(): Geometry {
		let result = this._geometry;
		if( result == null ) {
			this._vertexBuffer = new Buffer( this.vertices, false, false );
			this._clippingBuffer = new Buffer( this.clippings, false, false );
			this._stepBuffer = new Buffer( this.steps, false, false );
			this._colorFillBuffer = new Buffer( this.colorFills, false, false );
			this._colorStrokeBuffer = new Buffer( this.colorStrokes, false, false );
			this._uvBuffer = new Buffer( this.uvs, false, false );
			this._indexBuffer = new Buffer( this.indices, false, true );

			this._geometry = result = new Geometry()
				.addIndex( this._indexBuffer )
				.addAttribute( "aPosition", this._vertexBuffer, 2 )
				.addAttribute( "aClipping", this._clippingBuffer, 3 )
				.addAttribute( "aStep", this._stepBuffer, 2 )
				.addAttribute( "aAntialias", this._stepBuffer, 4 )
				.addAttribute( "aColorFill", this._colorFillBuffer, 4 )
				.addAttribute( "aColorStroke", this._colorStrokeBuffer, 4 )
				.addAttribute( "aUv", this._uvBuffer, 2 );
		}
		return result;
	}

	upload(): void {
		this._renderer.geometry.bind( this.getGeometry() );
	}

	render( shader: Shader ): void {
		const renderer = this._renderer;
		renderer.geometry.bind( this.getGeometry() );

		const units = this._builder.units;
		const unitCount = units.length;
		if( 0 < unitCount ) {
			const type = DRAW_MODES.TRIANGLES;

			let unit0 = null;
			let unit1 = units[ 0 ];
			let ioffset0 = 0;
			let ioffset1 = unit1.indexOffset * 3;
			let vcount = 0;
			let texture = Texture.WHITE;
			for( let i = 0, imax = unitCount - 1; i < imax; ++i ) {
				unit0 = unit1;
				unit1 = units[ i + 1 ];
				ioffset0 = ioffset1;
				ioffset1 = unit1.indexOffset * 3;
				vcount = ioffset1 - ioffset0;
				texture = unit0.texture || Texture.WHITE;
				if( 0 < vcount && texture.valid ) {
					shader.uniforms.sampler = renderer.texture.bind( texture );
					renderer.geometry.draw( type, vcount, ioffset0 );
				}
			}

			vcount = this._indexCount * 3 - ioffset1;
			texture = unit1.texture || Texture.WHITE;
			if( 0 < vcount && texture.valid ) {
				shader.uniforms.sampler = renderer.texture.bind( texture );
				renderer.geometry.draw( type, vcount, ioffset1 );
			}
		}
	}

	isCompatible( shape: EShape, uploaded: EShapeUploaded, vindex: number, iindex: number ): boolean {
		return (
			uploaded.getBuffer() === this &&
			uploaded.getVertexOffset() === vindex &&
			uploaded.getIndexOffset() === iindex &&
			uploaded.isCompatible( shape )
		);
	}

	update( iterator: EShapeRendererIterator, antialiasWeight: number, noMoreThanOne: boolean ): boolean {
		const builder = this._builder;
		builder.begin();

		let vindex = 0;
		let iindex = 0;
		let shape = iterator.get();
		for( ; shape != null; shape = iterator.next() ) {
			const uploaded = shape.uploaded;
			if( uploaded == null || ! this.isCompatible( shape, uploaded, vindex, iindex ) ) {
				break;
			}

			uploaded.update( shape );
			uploaded.buildUnit( builder );

			vindex += uploaded.getVertexCount();
			iindex += uploaded.getIndexCount();

			if( noMoreThanOne ) {
				iterator.next();
				builder.end();
				this._vertexCount = vindex;
				this._indexCount = iindex;
				return 0 < builder.units.length;
			}
		}

		for( ; shape != null; shape = iterator.next() ) {
			const creater = EShapeUploadeds[ shape.type ] || EShapeUploadeds[ EShapeType.GROUP ];
			if( creater == null ) {
				break;
			}

			const uploaded = creater( this, shape, vindex, iindex, antialiasWeight );
			if( uploaded == null ) {
				break;
			}

			uploaded.buildUnit( builder );
			vindex += uploaded.getVertexCount();
			iindex += uploaded.getIndexCount();

			if( noMoreThanOne ) {
				iterator.next();
				break;
			}
		}

		builder.end();
		this._vertexCount = vindex;
		this._indexCount = iindex;
		return 0 < builder.units.length;
	}

	check( vindex: number, ioffset: number, vcount: number, icount: number ): boolean {
		this.indexCountRequested = icount;
		return vindex + vcount <= this._vertexCapacity && ioffset + icount <= this._indexCapacity;
	}

	destroy(): void {
		const geometry = this._geometry;
		if( geometry ) {
			geometry.destroy();
		}
		this._builder.destroy();
	}
}
