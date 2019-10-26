/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DReflowable } from "./d-base";
import { DBaseBackgroundMesh } from "./d-base-background-mesh";
import { DBaseBorderMesh } from "./d-base-border-mesh";
import { DBaseOutlineMesh } from "./d-base-outline-mesh";
import { UtilTexturePlane } from "./util/util-texture-plane";

export class DBaseReflowable implements DReflowable {
	protected _lastBackgroundCornerRadius: number;
	protected _lastBorderCornerRadius: number;
	protected _lastBorderWidth: number;
	protected _lastOutlineCornerRadius: number;
	protected _lastOutlineWidth: number;
	protected _backgroundPlane: DBaseBackgroundMesh;
	protected _borderPlane: DBaseBorderMesh;
	protected _outlinePlane: DBaseOutlineMesh;

	constructor( base: DBase ) {
		const corner = base.corner;
		const cornerRadius = corner.getRadius();
		const cornerHeight = cornerRadius + 1;
		const cornerMask = corner.getMask();
		const backgroundPlane = this._backgroundPlane = new DBaseBackgroundMesh(
			UtilTexturePlane.newBackground( cornerRadius ),
			cornerHeight, cornerMask
		);
		base.appendRenderable( backgroundPlane, true );

		const state = base.state;

		const border = base.border;
		const borderWidth = border.getWidth( state );
		const borderMask = border.getMask( state );
		const borderPlane = this._borderPlane = new DBaseBorderMesh(
			UtilTexturePlane.newBorder( cornerRadius, borderWidth ),
			cornerHeight,
			borderMask,
			cornerMask
		);
		base.appendRenderable( borderPlane, false );

		const outline = base.outline;
		const outlineWidth = outline.getWidth( state );
		const outlineMask = outline.getMask( state );
		const outlinePlane = this._outlinePlane = new DBaseOutlineMesh(
			UtilTexturePlane.newBorder( cornerRadius, outlineWidth ),
			cornerHeight,
			outlineMask,
			cornerMask
		);
		base.appendRenderable( outlinePlane, false );

		this._lastBackgroundCornerRadius = cornerRadius;
		this._lastBorderCornerRadius = cornerRadius;
		this._lastBorderWidth = borderWidth;
		this._lastOutlineCornerRadius = cornerRadius;
		this._lastOutlineWidth = outlineWidth;

		base.addReflowable( this );
	}

	onReflow( base: DBase, width: number, height: number ): void {
		const state = base.state;
		const corner = base.corner;
		const cornerRadius = corner.getRadius();
		const cornerHeight = cornerRadius + 1;
		const cornerMask = corner.getMask();

		// Background
		const background = base.background;
		const backgroundPlane = this._backgroundPlane;
		const backgroundColor = background.getColor( state );
		if( backgroundColor != null ) {
			const backgroundAlpha = background.getAlpha( state );
			if( 0 < backgroundAlpha ) {
				if( this._lastBackgroundCornerRadius !== cornerRadius ) {
					this._lastBackgroundCornerRadius = cornerRadius;
					backgroundPlane.texture = UtilTexturePlane.newBackground( cornerRadius);
					backgroundPlane.borderSize = cornerHeight;
				}
				backgroundPlane.tint = backgroundColor;
				backgroundPlane.alpha = backgroundAlpha;
				backgroundPlane.width = width;
				backgroundPlane.height = height;
				backgroundPlane.cornerMask = cornerMask;
				backgroundPlane.visible = true;
			} else {
				backgroundPlane.visible = false;
			}
		} else {
			backgroundPlane.visible = false;
		}

		// Border
		const border = base.border;
		const borderPlane = this._borderPlane;
		const borderColor = border.getColor( state );
		if( borderColor != null ) {
			const borderAlpha = border.getAlpha( state );
			if( 0 < borderAlpha ) {
				const borderWidth = border.getWidth( state );
				if( this._lastBorderCornerRadius !== cornerRadius || this._lastBorderWidth !== borderWidth ) {
					this._lastBorderCornerRadius = cornerRadius;
					this._lastBorderWidth = borderWidth;
					borderPlane.texture = UtilTexturePlane.newBorder( cornerRadius, borderWidth );
					borderPlane.borderSize = cornerHeight;
				}
				const borderAlign = border.getAlign( state );
				const borderMask = border.getMask( state );
				borderPlane.tint = borderColor;
				borderPlane.alpha = borderAlpha;
				const borderOffset = borderAlign * borderWidth;
				borderPlane.x = -borderOffset;
				borderPlane.y = -borderOffset;
				borderPlane.width = width + borderOffset * 2;
				borderPlane.height = height + borderOffset * 2;
				borderPlane.borderMask = borderMask;
				borderPlane.cornerMask = cornerMask;
				borderPlane.visible = true;
			} else {
				borderPlane.visible = false;
			}
		} else {
			borderPlane.visible = false;
		}

		// Outline
		const outline = base.outline;
		const outlinePlane = this._outlinePlane;
		const outlineColor = outline.getColor( state );
		if( outlineColor != null ) {
			const outlineAlpha = outline.getAlpha( state );
			if( 0 < outlineAlpha ) {
				const outlineWidth = outline.getWidth( state );
				if( this._lastOutlineCornerRadius !== cornerRadius || this._lastOutlineWidth !== outlineWidth ) {
					this._lastOutlineCornerRadius = cornerRadius;
					this._lastOutlineWidth = outlineWidth;
					outlinePlane.texture = UtilTexturePlane.newBorder( cornerRadius, outlineWidth );
					outlinePlane.borderSize = cornerHeight;
				}
				const outlineMask = outline.getMask( state );
				const outlineOffset = outline.getOffset( state );
				const outlineAlign = outline.getAlign( state );
				outlinePlane.tint = outlineColor;
				outlinePlane.alpha = outlineAlpha;
				const outlineOffsetAccumulative = outlineOffset + outlineAlign * outlineWidth;
				outlinePlane.x = -outlineOffsetAccumulative;
				outlinePlane.y = -outlineOffsetAccumulative;
				outlinePlane.width = width + outlineOffsetAccumulative * 2;
				outlinePlane.height = height + outlineOffsetAccumulative * 2;
				outlinePlane.borderMask = outlineMask;
				outlinePlane.cornerMask = cornerMask;
				outlinePlane.visible = true;
			} else {
				outlinePlane.visible = false;
			}
		} else {
			outlinePlane.visible = false;
		}
	}
}
