/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mesh, MeshMaterial, Renderer, Texture } from "pixi.js";
import { DBaseBackgroundMeshGeometry } from "./d-base-background-mesh-geometry";
import { DCornerMask } from "./d-corner";

export class DBaseBackgroundMesh extends Mesh {
	geometry!: DBaseBackgroundMeshGeometry;
	shader!: MeshMaterial;

	constructor( texture: Texture, borderSize: number, cornerMask: DCornerMask ) {
		super(
			new DBaseBackgroundMeshGeometry( texture, 100, 100, borderSize, cornerMask ),
			new MeshMaterial( texture )
		);
	}

	get texture() {
		return this.shader.texture;
	}

	set texture( texture: Texture ) {
		if( this.shader.texture !== texture ) {
			this.shader.texture = texture;
			this.geometry.texture = texture;
		}
	}

	get width(): number {
		return this.geometry.width;
	}

	set width( width: number ) {
		this.geometry.width = width;
	}

	get height(): number {
		return this.geometry.height;
	}

	set height( height: number ) {
		this.geometry.height = height;
	}

	get borderSize(): number {
		return this.geometry.cornerMask;
	}

	set borderSize( borderSize: number ) {
		this.geometry.borderSize = borderSize;
	}

	get cornerMask(): DCornerMask {
		return this.geometry.cornerMask;
	}

	set cornerMask( cornerMask: DCornerMask ) {
		this.geometry.cornerMask = cornerMask;
	}

	protected _render( renderer: Renderer ): void {
		this.geometry.update();
		super._render( renderer );
	}

	update(): void {
		this.geometry.update();
	}
}
