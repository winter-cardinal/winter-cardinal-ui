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

export class DBaseBorderSnippet implements DBaseSnippet {
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
		const border = base.border;
		const borderColor = border.getColor(state);
		if (borderColor != null) {
			const borderAlpha = border.getAlpha(state);
			if (0 < borderAlpha) {
				const borderWidth = border.getWidth(state);
				const borderMask = border.getMask(state);
				const borderMesh = this.get(base, theme);
				const borderOffset = (border.getAlign(state) - 0.5) * borderWidth;
				borderMesh.tint = borderColor;
				borderMesh.alpha = borderAlpha;
				borderMesh.x = -borderOffset;
				borderMesh.y = -borderOffset;
				borderMesh.width = width + borderOffset * 2;
				borderMesh.height = height + borderOffset * 2;
				borderMesh.cornerRadius = Math.max(0, cornerRadius + borderOffset);
				borderMesh.cornerMask = cornerMask;
				borderMesh.borderWidth = borderWidth;
				borderMesh.borderMask = borderMask;
				borderMesh.visible = true;
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
