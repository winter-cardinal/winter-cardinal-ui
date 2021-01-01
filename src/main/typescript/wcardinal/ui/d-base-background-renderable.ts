/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DRenderable, DThemeBase } from "./d-base";
import { DBaseBackgroundMesh } from "./d-base-background-mesh";
import { DBaseStateSet } from "./d-base-state-set";
import { DCornerMask } from "./d-corner-mask";

export class DBaseBackgroundRenderable implements DRenderable {
	protected _mesh?: DBaseBackgroundMesh;
	protected _cornerRadius: number;

	constructor() {
		this._cornerRadius = 0;
	}

	protected get(
		base: DBase, theme: DThemeBase,
		cornerRadius: number, cornerHeight: number, cornerMask: DCornerMask
	): DBaseBackgroundMesh {
		let result = this._mesh;
		if( result == null ) {
			result = new DBaseBackgroundMesh(
				theme.getBackgroundTexture( cornerRadius ),
				cornerHeight, cornerMask
			);
			(result as any).parent = base;
			this._mesh = result;
			this._cornerRadius = cornerRadius;
		}
		if( this._cornerRadius !== cornerRadius ) {
			this._cornerRadius = cornerRadius;
			result.texture = theme.getBackgroundTexture( cornerRadius );
			result.borderSize = cornerHeight;
		}
		return result;
	}

	protected hide() {
		const mesh = this._mesh;
		if( mesh != null ) {
			mesh.visible = false;
		}
	}

	onReflow(
		base: DBase, width: number, height: number,
		theme: DThemeBase, state: DBaseStateSet,
		cornerRadius: number, cornerHeight: number, cornerMask: DCornerMask
	): void {
		const background = base.background;
		const backgroundColor = background.getColor( state );
		if( backgroundColor != null ) {
			const backgroundAlpha = background.getAlpha( state );
			if( 0 < backgroundAlpha ) {
				const backgroundMesh = this.get( base, theme, cornerRadius, cornerHeight, cornerMask );
				backgroundMesh.tint = backgroundColor;
				backgroundMesh.alpha = backgroundAlpha;
				backgroundMesh.width = width;
				backgroundMesh.height = height;
				backgroundMesh.cornerMask = cornerMask;
				backgroundMesh.visible = true;
			} else {
				this.hide();
			}
		} else {
			this.hide();
		}
	}

	render( renderer: PIXI.Renderer ): void {
		this._mesh?.render( renderer );
	}

	updateTransform(): void {
		this._mesh?.updateTransform();
	}
}
