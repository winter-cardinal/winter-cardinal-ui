/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Renderer } from "pixi.js";
import { DBase, DThemeBase } from "./d-base";
import { DBaseBorderMesh } from "./d-base-border-mesh";
import { DBaseSnippet } from "./d-base-snippet";
import { DBaseStateSet } from "./d-base-state-set";
import { DCornerMask } from "./d-corner-mask";

export class DBaseOutlineSnippet implements DBaseSnippet {
	protected _mesh?: DBaseBorderMesh;

	protected get(base: DBase, theme: DThemeBase): DBaseBorderMesh {
		let result = this._mesh;
		if (result == null) {
			result = new DBaseBorderMesh(theme.getBorderTexture());
			(result as any).parent = base;
			this._mesh = result;
		}
		return result;
	}

	protected hide(): void {
		const mesh = this._mesh;
		if (mesh != null) {
			mesh.visible = false;
		}
	}

	onReflow(
		base: DBase,
		width: number,
		height: number,
		theme: DThemeBase,
		state: DBaseStateSet,
		cornerRadius: number,
		cornerMask: DCornerMask
	): void {
		const outline = base.outline;
		const outlineColor = outline.getColor(state);
		if (outlineColor != null) {
			const outlineAlpha = outline.getAlpha(state);
			if (0 < outlineAlpha) {
				const outlineWidth = outline.getWidth(state);
				const outlineMask = outline.getMask(state);
				const outlineMesh = this.get(base, theme);
				const outlineOffset =
					outline.getOffset(state) + (outline.getAlign(state) - 0.5) * outlineWidth;
				outlineMesh.tint = outlineColor;
				outlineMesh.alpha = outlineAlpha;
				outlineMesh.x = -outlineOffset;
				outlineMesh.y = -outlineOffset;
				outlineMesh.width = width + outlineOffset * 2;
				outlineMesh.height = height + outlineOffset * 2;
				outlineMesh.cornerRadius = Math.max(0, cornerRadius + outlineOffset);
				outlineMesh.cornerMask = cornerMask;
				outlineMesh.borderWidth = outlineWidth;
				outlineMesh.borderMask = outlineMask;
				outlineMesh.visible = true;
			} else {
				this.hide();
			}
		} else {
			this.hide();
		}
	}

	render(renderer: Renderer): void {
		this._mesh?.render(renderer);
	}

	updateTransform(): void {
		this._mesh?.updateTransform();
	}
}
