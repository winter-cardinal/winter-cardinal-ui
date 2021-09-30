/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mesh, MeshMaterial, Renderer, Texture } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseBorderMeshGeometry } from "./d-base-border-mesh-geometry";
import { DBorderMask } from "./d-border-mask";
import { DCornerMask } from "./d-corner-mask";

export class DBaseBorderMesh extends Mesh {
	geometry!: DBaseBorderMeshGeometry;
	shader!: MeshMaterial;

	constructor(texture: Texture) {
		super(new DBaseBorderMeshGeometry(), new MeshMaterial(texture));
		texture.on("update", (): void => {
			DApplications.update(this);
		});
	}

	// @ts-ignore
	get width(): number {
		return this.geometry.width;
	}

	set width(width: number) {
		this.geometry.width = width;
	}

	// @ts-ignore
	get height(): number {
		return this.geometry.height;
	}

	set height(height: number) {
		this.geometry.height = height;
	}

	get cornerRadius(): number {
		return this.geometry.cornerRadius;
	}

	set cornerRadius(cornerRadius: number) {
		this.geometry.cornerRadius = cornerRadius;
	}

	get cornerMask(): DCornerMask {
		return this.geometry.cornerMask;
	}

	set cornerMask(cornerMask: DCornerMask) {
		this.geometry.cornerMask = cornerMask;
	}

	get borderWidth(): number {
		return this.geometry.borderWidth;
	}

	set borderWidth(borderWidth: number) {
		this.geometry.borderWidth = borderWidth;
	}

	get borderMask(): DBorderMask {
		return this.geometry.borderMask;
	}

	set borderMask(borderMask: DBorderMask) {
		this.geometry.borderMask = borderMask;
	}

	protected _render(renderer: Renderer): void {
		this.geometry.update(renderer);
		super._render(renderer);
	}
}
