/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Renderer } from "pixi.js";
import { DBase, DThemeBase } from "./d-base";
import { DBaseBackgroundMesh } from "./d-base-background-mesh";
import { DBaseSnippet } from "./d-base-snippet";
import { DBaseStateSet } from "./d-base-state-set";
import { DCornerMask } from "./d-corner-mask";

export class DBaseBackgroundSnippet implements DBaseSnippet {
	protected _mesh?: DBaseBackgroundMesh;

	protected get(base: DBase, theme: DThemeBase): DBaseBackgroundMesh {
		let result = this._mesh;
		if (result == null) {
			result = new DBaseBackgroundMesh(theme.getBackgroundTexture());
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
		const background = base.background;
		const backgroundColor = background.getColor(state);
		if (backgroundColor != null) {
			const backgroundAlpha = background.getAlpha(state);
			if (0 < backgroundAlpha) {
				const backgroundMesh = this.get(base, theme);
				backgroundMesh.tint = backgroundColor;
				backgroundMesh.alpha = backgroundAlpha;
				backgroundMesh.width = width;
				backgroundMesh.height = height;
				backgroundMesh.cornerRadius = cornerRadius;
				backgroundMesh.cornerMask = cornerMask;
				backgroundMesh.visible = true;
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
