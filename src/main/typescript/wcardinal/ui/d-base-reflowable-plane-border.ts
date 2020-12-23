/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DRenderable, DThemeBase } from "./d-base";
import { DBaseBorderMesh } from "./d-base-border-mesh";
import { DBaseStateSet } from "./d-base-state-set";
import { DBorderMask } from "./d-border-mask";
import { DCornerMask } from "./d-corner-mask";

export class DBaseReflowablePlaneBorder implements DRenderable {
	protected _mesh?: DBaseBorderMesh;
	protected _cornerRadius: number;
	protected _borderWidth: number;

	constructor() {
		this._cornerRadius = 0;
		this._borderWidth = 0;
	}

	protected get(
		base: DBase, theme: DThemeBase,
		cornerRadius: number, cornerHeight: number, cornerMask: DCornerMask,
		borderWidth: number, borderMask: DBorderMask
	): DBaseBorderMesh {
		let result = this._mesh;
		if( result == null ) {
			result = new DBaseBorderMesh(
				theme.getBorderTexture( cornerRadius, borderWidth ),
				cornerHeight,
				borderMask,
				cornerMask
			);
			(result as any).parent = base;
			this._mesh = result;
			this._cornerRadius = cornerRadius;
		}
		if( this._cornerRadius !== cornerRadius || this._borderWidth !== borderWidth ) {
			this._cornerRadius = cornerRadius;
			this._borderWidth = borderWidth;
			result.texture = theme.getBorderTexture( cornerRadius, borderWidth );
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
		const border = base.border;
		const borderColor = border.getColor( state );
		if( borderColor != null ) {
			const borderAlpha = border.getAlpha( state );
			if( 0 < borderAlpha ) {
				const borderWidth = border.getWidth( state );
				const borderMask = border.getMask( state );
				const borderAlign = border.getAlign( state );
				const borderOffset = borderAlign * borderWidth;
				const borderPlane = this.get( base, theme, cornerRadius, cornerHeight, cornerMask, borderWidth, borderMask );
				borderPlane.tint = borderColor;
				borderPlane.alpha = borderAlpha;
				borderPlane.x = -borderOffset;
				borderPlane.y = -borderOffset;
				borderPlane.width = width + borderOffset * 2;
				borderPlane.height = height + borderOffset * 2;
				borderPlane.borderMask = borderMask;
				borderPlane.cornerMask = cornerMask;
				borderPlane.visible = true;
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
