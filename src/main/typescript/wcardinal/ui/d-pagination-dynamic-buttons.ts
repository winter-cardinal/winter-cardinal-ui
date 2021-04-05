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

	protected init( options: OPTIONS ): void {
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

	public update( options: DPaginationDynamicButtonsOptions<THEME> ): void {
		if( options.start == null || options.end == null ) {
			return;
		}
		const btnsCount = options.end - options.start + 1 > 0 ? options.end - options.start + 1 : 0;
		let pageButtons = ( this.children as DButton[] ).slice( 1, this.children.length - 1 );
		if( pageButtons.length < btnsCount ) {
			for ( let i = pageButtons.length; i < btnsCount; i++ ) {
				const btn = new DButton({
					width: options.button.width
				});
				this.addChildAt( btn, this.children.length - 1 );
				btn.on( "active", ( clickedBtn: DButton ) => {
					this.emit( "active", clickedBtn );
				});
			}
			// re-new "pageButtons" after add new buttons
			pageButtons = ( this.children as DButton[]).slice( 1, this.children.length - 1 );

		} else if( pageButtons.length > btnsCount ) {
			for ( let i = btnsCount; i < pageButtons.length; i++ ) {
				pageButtons[ i ].hide();
			}
		}
		// update button text and active state
		for ( let i = 0; i < btnsCount; i++ ) {
			const btn = pageButtons[ i ];
			btn.text = options.start + i + 1;
			btn.state.isActive = ( options.start + i === options.selected );
			if( btn.isHidden() ) {
				btn.show();
			}
		}

		// update visible state of dots buttons
		if( options.button.dotsLeft ) {
			this._dotsBtnLeft.show();
		} else {
			this._dotsBtnLeft.hide();
		}
		if( options.button.dotsRight ) {
			this._dotsBtnRight.show();
		} else {
			this._dotsBtnRight.hide();
		}
	}
	protected getType(): string {
		return "DPaginationDynamicButtons";
	}
}
