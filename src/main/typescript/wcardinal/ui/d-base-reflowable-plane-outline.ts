/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DRenderable, DThemeBase } from "./d-base";
import { DBaseOutlineMesh } from "./d-base-outline-mesh";
import { DBaseStateSet } from "./d-base-state-set";
import { DBorderMask } from "./d-border-mask";
import { DCornerMask } from "./d-corner-mask";

export class DBaseReflowablePlaneOutline implements DRenderable {
	protected _mesh?: DBaseOutlineMesh;
	protected _cornerRadius: number;
	protected _outlineWidth: number;

	constructor() {
		this. _cornerRadius = 0;
		this. _outlineWidth = 0;
	}

	protected get(
		base: DBase, theme: DThemeBase,
		cornerRadius: number, cornerHeight: number, cornerMask: DCornerMask,
		outlineWidth: number, outlineMask: DBorderMask
	): DBaseOutlineMesh {
		let result = this._mesh;
		if( result == null ) {
			result = new DBaseOutlineMesh(
				theme.getBorderTexture( cornerRadius, outlineWidth ),
				cornerHeight,
				outlineMask,
				cornerMask
			);
			(result as any).parent = base;
			this._mesh = result;
			this._cornerRadius = cornerRadius;
			this._outlineWidth = outlineWidth;
		}
		if( this._cornerRadius !== cornerRadius || this._outlineWidth !== outlineWidth ) {
			this._cornerRadius = cornerRadius;
			this._outlineWidth = outlineWidth;
			result.texture = theme.getBorderTexture( cornerRadius, outlineWidth );
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
		const outline = base.outline;
		const outlineColor = outline.getColor( state );
		if( outlineColor != null ) {
			const outlineAlpha = outline.getAlpha( state );
			if( 0 < outlineAlpha ) {
				const outlineWidth = outline.getWidth( state );
				const outlineMask = outline.getMask( state );
				const outlineOffset = outline.getOffset( state );
				const outlineAlign = outline.getAlign( state );
				const outlineOffsetAccumulative = outlineOffset + outlineAlign * outlineWidth;
				const outlinePlane = this.get( base, theme, cornerRadius, cornerHeight, cornerMask, outlineWidth, outlineMask );
				outlinePlane.tint = outlineColor;
				outlinePlane.alpha = outlineAlpha;
				outlinePlane.x = -outlineOffsetAccumulative;
				outlinePlane.y = -outlineOffsetAccumulative;
				outlinePlane.width = width + outlineOffsetAccumulative * 2;
				outlinePlane.height = height + outlineOffsetAccumulative * 2;
				outlinePlane.borderMask = outlineMask;
				outlinePlane.cornerMask = cornerMask;
				outlinePlane.visible = true;
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
