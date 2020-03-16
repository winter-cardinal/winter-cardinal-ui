/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DPaginationDotsButton } from "./d-pagination-dots-button";

export interface DPaginationDynamicButtonsOptions<
	THEME extends DThemePaginationDynamicButtons> extends DLayoutHorizontalOptions<THEME> {
		start?: number;
		end?: number;
		selected?: number;
		button: {
			width: number,
			dotsLeft?: boolean,
			dotsRight?: boolean
		};
}

export interface DThemePaginationDynamicButtons extends DThemeLayoutHorizontal {
}

export class DPaginationDynamicButtons<
	THEME extends DThemePaginationDynamicButtons = DThemePaginationDynamicButtons,
	OPTIONS extends DPaginationDynamicButtonsOptions<THEME> = DPaginationDynamicButtonsOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _dotsBtnLeft!: DPaginationDotsButton;
	protected _dotsBtnRight!: DPaginationDotsButton;

	protected init( options: OPTIONS ) {
		super.init( options );
		this._dotsBtnLeft = new DPaginationDotsButton({
			width: options.button.width,
			visible: !!options.button.dotsLeft
		});
		this._dotsBtnRight = new DPaginationDotsButton({
			width: options.button.width,
			visible: !!options.button.dotsRight
		});
		this.addChild( this._dotsBtnLeft );
		this.addChild( this._dotsBtnRight );
	}

	protected getType(): string {
		return "DPaginationDynamicButtons";
	}
}
