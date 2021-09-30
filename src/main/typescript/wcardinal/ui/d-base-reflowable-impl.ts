/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DBaseBackgroundSnippet } from "./d-base-background-snippet";
import { DBaseBorderSnippet } from "./d-base-border-snippet";
import { DBaseOutlineSnippet } from "./d-base-outline-snippet";
import { DBaseReflowable } from "./d-base-reflowable";

export class DBaseReflowableImpl implements DBaseReflowable {
	protected _background: DBaseBackgroundSnippet;
	protected _border: DBaseBorderSnippet;
	protected _outline: DBaseOutlineSnippet;

	constructor(base: DBase) {
		const background = new DBaseBackgroundSnippet();
		this._background = background;
		base.snippet.add(background, true);

		const border = new DBaseBorderSnippet();
		this._border = border;
		base.snippet.add(border, false);

		const outline = new DBaseOutlineSnippet();
		this._outline = outline;
		base.snippet.add(outline, false);

		base.reflowable.add(this);
	}

	onReflow(base: DBase, width: number, height: number): void {
		const theme = base.theme;
		const state = base.state;
		const corner = base.corner;
		const cornerRadius = corner.getRadius();
		const cornerMask = corner.getMask();
		this._background.onReflow(base, width, height, theme, state, cornerRadius, cornerMask);
		this._border.onReflow(base, width, height, theme, state, cornerRadius, cornerMask);
		this._outline.onReflow(base, width, height, theme, state, cornerRadius, cornerMask);
	}
}
