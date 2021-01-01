/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DRenderable, DThemeBase } from "./d-base";
import { DBaseBorderMesh } from "./d-base-border-mesh";
import { DBaseStateSet } from "./d-base-state-set";
import { DBorderMask } from "./d-border-mask";
import { DCornerMask } from "./d-corner-mask";

export class DBaseOutlineRenderable implements DRenderable {
	protected _mesh?: DBaseBorderMesh;
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
	): DBaseBorderMesh {
		let result = this._mesh;
		if( result == null ) {
			result = new DBaseBorderMesh(
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
				const outlineMesh = this.get( base, theme, cornerRadius, cornerHeight, cornerMask, outlineWidth, outlineMask );
				const outlineOffset = outline.getOffset( state );
				const outlineAlign = outline.getAlign( state );
				const outlineOffsetAccumulative = outlineOffset + outlineAlign * outlineWidth;
				outlineMesh.tint = outlineColor;
				outlineMesh.alpha = outlineAlpha;
				outlineMesh.x = -outlineOffsetAccumulative;
				outlineMesh.y = -outlineOffsetAccumulative;
				outlineMesh.width = width + outlineOffsetAccumulative * 2;
				outlineMesh.height = height + outlineOffsetAccumulative * 2;
				outlineMesh.borderMask = outlineMask;
				outlineMesh.cornerMask = cornerMask;
				outlineMesh.visible = true;
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
