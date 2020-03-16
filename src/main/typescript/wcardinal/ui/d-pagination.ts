/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DPaginationDynamicButtons } from "./d-pagination-dynamic-buttons";
import { DPaginationNavigationButton } from "./d-pagination-navigation-button";
import { DThemes } from "./theme";

export interface DPaginationOptions<THEME extends DThemePagination> extends DLayoutHorizontalOptions<THEME> {
	total: number;
	selected?: number;
	button?: {
		first?: boolean;
		last?: boolean;
		width?: number;
	};
}

export interface DThemePagination extends DThemeLayoutHorizontal {
	getButtonWidth(): number;
}

interface DPaginationButtonOption {
	first: boolean;
	last: boolean;
	width?: number;
}

export class DPagination<
	THEME extends DThemePagination = DThemePagination,
	OPTIONS extends DPaginationOptions<THEME> = DPaginationOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _total!: number;
	protected _selected!: number;
	protected _buttonOptions!: DPaginationButtonOption;
	protected _numberPageButtonVisible!: number;
	protected DEFAULT_SELECTED!: number;

	protected _firstPageBtn!: DButton;
	protected _lastPageBtn!: DButton;
	protected _dynamicPageBtns!: DPaginationDynamicButtons;

	protected init( options: OPTIONS ) {
		super.init( options );
		this.DEFAULT_SELECTED = 0; // set default selected index page is page 0
		// get total pages
		this._total = options.total;
		// get selected page
		this._selected = options.selected ? options.selected : this.DEFAULT_SELECTED;
		// get button options
		this._buttonOptions = {
			first: !! ( options.button && options.button.first ),
			last: !! ( options.button && options.button.last ),
			width: options.button && options.button.width
		};

		this.initButtons( this.getButtonWidth() );

		let numberNavigationBtn = 2;
		if( this._buttonOptions.first ) {
			numberNavigationBtn++;
		}
		if( this._buttonOptions.last ) {
			numberNavigationBtn++;
		}

		this.on( "resize",  (): void => {
			// <width of page buttons> = <width of pagination> - <width of navigation buttons>
			const widthOfNavigationBtns = numberNavigationBtn * ( this.getButtonWidth() + this._margin.horizontal * 2 );
			this._numberPageButtonVisible = this.toNumberVisible( this.width -  widthOfNavigationBtns);
			this.update();
		});

	}

	set selected( selected: number ) {
		if( selected < 0 || selected >= this._total ) {
			selected = this.DEFAULT_SELECTED;
		}
		this._selected = selected;
		this.update();

	}

	get selected() {
		return this._selected;
	}

	protected initButtons( width: number ) {
		const previousBtn = new DPaginationNavigationButton({
			width,
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_previous

			}
		});

		const nextBtn = new DPaginationNavigationButton({
			width,
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_next

			}
		});

		const goFirstBtn = new DPaginationNavigationButton({
			width,
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_go_first

			},
			visible: this._buttonOptions.first
		});

		const goLastBtn = new DPaginationNavigationButton({
			width,
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_go_last

			},
			visible: this._buttonOptions.last
		});

		this._dynamicPageBtns = new DPaginationDynamicButtons({
			button: {
				width
			}
		});

		this.addChild( goFirstBtn );
		this.addChild( previousBtn );
		if(this._total > 0) {
			this._firstPageBtn = new DButton({
				width,
				text: {
					value: 1
				}
			});
			this.addChild( this._firstPageBtn );
		}
		this.addChild( this._dynamicPageBtns );
		if( this._total > 1 ) {
			this._lastPageBtn = new DButton({
				width,
				text: {
					value: this._total
				}
			});
			this.addChild( this._lastPageBtn );
		}
		this.addChild( nextBtn );
		this.addChild( goLastBtn );

		this._firstPageBtn.on( "active", ( btn: DButton ) => {
			this.onClickPageButton( btn );
		});
		this._lastPageBtn.on( "active", ( btn: DButton ) => {
			this.onClickPageButton( btn );
		});
		this._dynamicPageBtns.on( "active", ( btn: DButton ) => {
			this.onClickPageButton( btn );
		}) ;
	}

	protected update() {
		let startDynamic: number;
		let endDynamic: number;
		let dotsLeft: boolean;
		let dotsRight: boolean;
		let numberButtonsInLeft = 0;
		let numberButtonsInRight = 0;

		// Number displayed buttons from first button to selected button when select center button of all buttons.
		// Not including selected button.
		const numberButtonsFirstToCenter = Math.ceil( ( this._numberPageButtonVisible  - 1 ) * 0.5 );
		const numberButtonsCenterToEnd = Math.floor( ( this._numberPageButtonVisible  - 1 ) * 0.5 );

		if( this._selected < numberButtonsFirstToCenter ) {
			numberButtonsInLeft =  this._selected;
			numberButtonsInRight = this._numberPageButtonVisible - numberButtonsInLeft - 1;
		} else if ( this._selected + numberButtonsCenterToEnd > this._total - 1 ) {
			numberButtonsInRight = ( this._total - 1 ) - this.selected;
			numberButtonsInLeft = this._numberPageButtonVisible - numberButtonsInRight - 1;
		} else {
			numberButtonsInLeft = numberButtonsFirstToCenter;
			numberButtonsInRight = numberButtonsCenterToEnd;
		}

		if( this._selected <= numberButtonsInLeft ) {
			startDynamic  = 1;
			dotsLeft = false;
		} else {
			startDynamic = this._selected - numberButtonsInLeft + 2;
			dotsLeft = true;
		}

		if( this._selected + numberButtonsInRight >= this._total - 1 ) {
			endDynamic = this._total - 2;
			dotsRight = false;
		} else {
			endDynamic = this._selected + numberButtonsInRight - 2;
			dotsRight = true;
		}

		this._dynamicPageBtns.update({
			start: startDynamic,
			end: endDynamic,
			selected: this._selected,
			button: {
				width: this.getButtonWidth(),
				dotsLeft,
				dotsRight
			}
		});

		this._firstPageBtn.setActive( this._selected === 0 );
		this._lastPageBtn.setActive( this._selected === this._total - 1 );
	}

	protected getButtonWidth() {
		return this._buttonOptions.width ? this._buttonOptions.width : this.theme.getButtonWidth();
	}

	protected toNumberVisible( width: number ) {
		const numberVisible = Math.floor( width / ( this.getButtonWidth() + this._margin.horizontal * 2 ) );
		/* set numberVisible is 5, if it less than 5
			 If total pages less than numberVisible, set numberVisible equal total pages
		**/
		return Math.min( this._total, Math.max( numberVisible, 5 ) );
	}

	protected onClickPageButton( btn: DButton ) {
		const btnIndex = Number( btn.text ) - 1;
		if( this._selected !== btnIndex ) {
			this._selected = btnIndex;
			this.update();
		}
	}

	protected getType(): string {
		return "DPagination";
	}
}
