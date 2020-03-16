/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";
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

	public update( options: DPaginationDynamicButtonsOptions<THEME> ) {
		if( options.start == null || options.end == null ) {
			return;
		}
		this._dotsBtnLeft.visible = !!options.button.dotsLeft;
		this._dotsBtnRight.visible = !!options.button.dotsRight;
		let pageButtons = ( this.children as DButton[] ).slice( 1, this.children.length - 1 );
		if( pageButtons.length < options.end - options.start + 1 ) {
			for ( let i = pageButtons.length; i < options.end - options.start + 1; i++ ) {
				const btn = new DButton({
					width: options.button.width
				});
				this.addChildAt( btn, this.children.length - 1 );
			}
			// re-new "pageButtons" after add new buttons
			pageButtons = ( this.children as DButton[]).slice( 1, this.children.length - 1 );

		} else if( pageButtons.length > options.end - options.start + 1 ) {
			for ( let i = options.end - options.start + 1; i < pageButtons.length; i++ ) {
				pageButtons[ i ].hide();
			}
		}
		for ( let i = 0; i < options.end - options.start + 1; i++ ) {
			const btn = pageButtons[ i ];
			btn.text = options.start + i + 1;
			btn.setActive( options.start + i  === options.selected );
			if( btn.isHidden() ) {
				btn.show();
			}
		}
	}
	protected getType(): string {
		return "DPaginationDynamicButtons";
	}
}
