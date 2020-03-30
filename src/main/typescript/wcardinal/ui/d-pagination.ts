/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DPaginationDynamicButtons } from "./d-pagination-dynamic-buttons";
import { DPaginationNavigationButton } from "./d-pagination-navigation-button";
import { DThemes } from "./theme/d-themes";

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

	protected _previousBtn!: DPaginationNavigationButton;
	protected _nextBtn!: DPaginationNavigationButton;
	protected _goFirstBtn!: DPaginationNavigationButton;
	protected _goLastBtn!: DPaginationNavigationButton;

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
		this.listenButtonClicked();

		this.on( "resize",  (): void => {
			this._numberPageButtonVisible = this.toNumberVisible();
			this.update();
		});

	}

	/**
	 * Set selected page.
	 *
	 * @param selected page's index want to select.
	 */
	set selected( selected: number ) {
		if( selected < 0 || selected >= this._total || !Number.isInteger( selected ) ) {
			selected = this.DEFAULT_SELECTED;
		}
		this._selected = selected;
		this.update();

	}

	/**
	 * Get selected page.
	 *
	 * @returns index of selected page.
	 */
	get selected() {
		return this._selected;
	}

	/**
	 * Set total page.
	 *
	 * @param total number of page want to present in pagination.
	 */
	set total( total: number ) {
		if( total >= 0 && Number.isInteger( total ) ) {
			this._total = total;
			this._numberPageButtonVisible = this.toNumberVisible();
			this.selected = this._selected;
			this._lastPageBtn.text = this._total;
			this.update();
		}
	}

	/**
	 * Get total pages.
	 *
	 * @returns number of total pages.
	 */
	get total() {
		return this._total;
	}

	protected initButtons( width: number ) {
		this._previousBtn = new DPaginationNavigationButton({
			width,
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_previous

			}
		});

		this._nextBtn = new DPaginationNavigationButton({
			width,
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_next

			}
		});

		this._goFirstBtn = new DPaginationNavigationButton({
			width,
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_go_first

			},
			visible: this._buttonOptions.first
		});

		this._goLastBtn = new DPaginationNavigationButton({
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

		this._firstPageBtn = new DButton({
			width,
			text: {
				value: 1
			}
		});

		this._lastPageBtn = new DButton({
			width,
			text: {
				value: this._total
			}
		});

		this.addChild( this._goFirstBtn );
		this.addChild( this._previousBtn );
		this.addChild( this._firstPageBtn );
		this.addChild( this._dynamicPageBtns );
		this.addChild( this._lastPageBtn );
		this.addChild( this._nextBtn );
		this.addChild( this._goLastBtn );
	}

	protected listenButtonClicked() {
		this._firstPageBtn.on( "active", ( btn: DButton ) => {
			this.onClickPageButton( btn );
		});
		this._lastPageBtn.on( "active", ( btn: DButton ) => {
			this.onClickPageButton( btn );
		});
		this._dynamicPageBtns.on( "active", ( btn: DButton ) => {
			this.onClickPageButton( btn );
		});
		this._goFirstBtn.on( "active", (btn: DButton) => {
			this.selected = this.DEFAULT_SELECTED;
		});
		this._goLastBtn.on( "active", (btn: DButton) => {
			this.selected = this._total - 1;
		});
		this._nextBtn.on( "active", (btn: DButton) => {
			if( this.selected !== this._total + 1 ) {
				this.selected = this._selected + 1;
			}
		});
		this._previousBtn.on( "active", (btn: DButton) => {
			if( this._selected !== 0 ) {
				this.selected = this._selected - 1;
			}
		});
	}

	protected update() {
		let startDynamic: number;
		let endDynamic: number;
		let dotsLeft: boolean;
		let dotsRight: boolean;
		let numberButtonsInLeft = 0;
		let numberButtonsInRight = 0;

		this.updateStaticButtons();
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
	}

	protected updateStaticButtons() {
		if( this._total > 0 ) {
			this._firstPageBtn.show();
		} else {
			this._firstPageBtn.hide();
		}
		if( this._total > 1 ) {
			this._lastPageBtn.show();
		} else {
			this._lastPageBtn.hide();
		}
		const isFirst = this._selected === this.DEFAULT_SELECTED;
		const isLast = this._selected === this._total - 1 || this._total === 0;
		this._firstPageBtn.setActive( isFirst );
		this._lastPageBtn.setActive( isLast );
		this._goFirstBtn.setDisabled( isFirst );
		this._previousBtn.setDisabled( isFirst );
		this._nextBtn.setDisabled( isLast );
		this._goLastBtn.setDisabled( isLast );
	}

	protected getButtonWidth() {
		return this._buttonOptions.width ? this._buttonOptions.width : this.theme.getButtonWidth();
	}

	protected toNumberVisible() {
		let numberNavigationBtn = 2; // 2 buttons always displayed are "next" and "previous" button
		if( this._buttonOptions.first ) {
			numberNavigationBtn++;
		}
		if( this._buttonOptions.last ) {
			numberNavigationBtn++;
		}
		const widthOfNavigationBtns = numberNavigationBtn * ( this.getButtonWidth() + this._margin.horizontal * 2 );
		const widthOfPageBtns = this.width -  widthOfNavigationBtns;
		const numberVisible = Math.floor( widthOfPageBtns / ( this.getButtonWidth() + this._margin.horizontal * 2 ) );
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
