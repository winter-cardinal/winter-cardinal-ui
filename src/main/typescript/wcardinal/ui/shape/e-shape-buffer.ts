/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Buffer, DRAW_MODES, Geometry, Point, Renderer, Shader, Texture } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeBufferUnitBuilder } from "./e-shape-buffer-unit-builder";
import { EShapeRendererIterator } from "./e-shape-renderer-iterator";
import { EShapeType } from "./e-shape-type";
import { EShapeUploaded } from "./e-shape-uploaded";
import { EShapeUploadeds } from "./e-shape-uploadeds";

export class EShapeBuffer {
	vertices: Float32Array;
	vertexCapacity: number;
	protected vertexCount: number;
	vertexBuffer: Buffer;

	clippings: Float32Array;
	clippingBuffer: Buffer;

	steps: Float32Array;
	stepBuffer: Buffer;

	antialiases: Float32Array;
	antialiasBuffer: Buffer;

	colorFills: Float32Array;
	colorFillBuffer: Buffer;

	colorStrokes: Float32Array;
	colorStrokeBuffer: Buffer;

	uvs: Float32Array;
	uvBuffer: Buffer;

	indices: Uint16Array | Uint32Array;
	indexCapacity: number;
	protected indexCount: number;
	indexBuffer: Buffer;

	protected renderer: Renderer;
	protected geometry: Geometry;

	protected builder: EShapeBufferUnitBuilder;

	work: Point;
	workStep: Float32Array;

	constructor( ntriangles: number, renderer: Renderer ) {
		const nindices = ntriangles * 3;
		const nvertices = nindices;

		this.vertices = new Float32Array( nvertices * 2 );
		this.vertexCapacity = nvertices;
		this.vertexCount = 0;
		this.vertexBuffer = new Buffer( this.vertices, false, false );

		this.clippings = new Float32Array( nvertices * 3 );
		this.clippingBuffer = new Buffer( this.clippings, false, false );

		this.steps = new Float32Array( nvertices * 2 );
		this.stepBuffer = new Buffer( this.steps, false, false );

		this.antialiases = new Float32Array( nvertices * 4 );
		this.antialiasBuffer = new Buffer( this.antialiases, false, false );

		this.colorFills = new Float32Array( nvertices * 4 );
		this.colorFillBuffer = new Buffer( this.colorFills, false, false );

		this.colorStrokes = new Float32Array( nvertices * 4 );
		this.colorStrokeBuffer = new Buffer( this.colorStrokes, false, false );

		this.uvs = new Float32Array( nvertices * 2 );
		this.uvBuffer = new Buffer( this.uvs, false, false );

		const isIndicesShort = ( nvertices <= 65535 );
		this.indices = ( isIndicesShort ? new Uint16Array( nindices ) : new Uint32Array( nindices ) );
		this.indexCapacity = ntriangles;
		this.indexCount = 0;
		this.indexBuffer = new Buffer( this.indices, false, true );

		this.renderer = renderer;

		this.builder = new EShapeBufferUnitBuilder();

		this.work = new Point();
		this.workStep = new Float32Array( 3 );

		this.geometry = new Geometry()
			.addIndex( this.indexBuffer )
			.addAttribute( "aPosition", this.vertexBuffer, 2 )
			.addAttribute( "aClipping", this.clippingBuffer, 3 )
			.addAttribute( "aStep", this.stepBuffer, 2 )
			.addAttribute( "aAntialias", this.antialiasBuffer, 4 )
			.addAttribute( "aColorFill", this.colorFillBuffer, 4 )
			.addAttribute( "aColorStroke", this.colorStrokeBuffer, 4 )
			.addAttribute( "aUv", this.uvBuffer, 2 );
	}

	upload(): void {
		this.renderer.geometry.bind( this.geometry );
	}

	render( shader: Shader ): void {
		const renderer = this.renderer;
		renderer.geometry.bind( this.geometry );

		const units = this.builder.units;
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

			vcount = this.indexCount * 3 - ioffset1;
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

	update( iterator: EShapeRendererIterator, antialiasWeight: number ): boolean {
		const builder = this.builder;
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
		}

		builder.end();
		this.vertexCount = vindex;
		this.indexCount = iindex;

		return 0 < builder.units.length;
	}

	destroy(): void {
		this.geometry.destroy();
		this.builder.destroy();
	}
}
