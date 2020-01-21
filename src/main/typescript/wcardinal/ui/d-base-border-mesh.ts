/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mesh, MeshMaterial, Renderer, Texture } from "pixi.js";
import { DBaseBorderMeshGeometry } from "./d-base-border-mesh-geometry";
import { DBorderMask } from "./d-border-mask";
import { DCornerMask } from "./d-corner-mask";

export class DBaseBorderMesh extends Mesh {
	geometry!: DBaseBorderMeshGeometry;
	shader!: MeshMaterial;

	constructor( texture: Texture, borderSize: number, borderMask: DBorderMask, cornerMask: DCornerMask ) {
		super(
			new DBaseBorderMeshGeometry( texture, 100, 100, borderSize, borderMask, cornerMask ),
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
		return this.geometry.borderSize;
	}

	set borderSize( borderSize: number ) {
		this.geometry.borderSize = borderSize;
	}

	get borderMask(): DBorderMask {
		return this.geometry.borderMask;
	}

	set borderMask( borderMask: DBorderMask ) {
		this.geometry.borderMask = borderMask;
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
