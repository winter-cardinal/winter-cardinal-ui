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
			const numberVisible =
				this.toNumberVisible( this.width -  widthOfNavigationBtns);
			this.update( numberVisible );
		});

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
	}

	protected update( numnerVisible: number ) {
		const numberDynamicBtn = numnerVisible - 2; // dynamic button not include first and last page button.
		if( numberDynamicBtn > 0 ) {
			let numberDynamicInLeft = 0; // number of dynamic button in the left of selected
			let numberDynamicInRight = 0; // // number of dynamic button in the right of selected
			let startDynamic: number;
			let endDynamic: number;
			let dotsLeft: boolean;
			let dotsRight: boolean;

			if ( this._selected <= Math.ceil( (numberDynamicBtn - 1) * 0.5 ) ) {
				numberDynamicInLeft = this._selected;
				numberDynamicInRight = numberDynamicBtn - numberDynamicInLeft - 1;
			} else if ( ( this._total - this._selected - 1 <= Math.floor( (numberDynamicBtn - 1) * 0.5 ) )) {
				numberDynamicInRight = this._total - this._selected - 1;
				numberDynamicInLeft = numberDynamicBtn - numberDynamicInLeft - 1;
			} else {
				numberDynamicInLeft = Math.ceil( (numberDynamicBtn - 1) * 0.5 );
				numberDynamicInRight = numberDynamicBtn - numberDynamicInLeft - 1;
			}
			if(this._selected - numberDynamicInLeft <= 1) {
				startDynamic = 1;
				dotsLeft = false;
			} else {
				startDynamic = this._selected - numberDynamicInLeft + 1;
				dotsLeft = true;
			}

			if(this._selected + numberDynamicInRight >= this._total - 1) {
				endDynamic = this._total - 2;
				dotsRight = false;
			} else {
				endDynamic = this._selected + numberDynamicInRight - 1;
				dotsRight = true;
			}
			this._dynamicPageBtns.update( {
				start: startDynamic,
				end: endDynamic,
				selected: this._selected,
				button: {
					width: this.getButtonWidth(),
					dotsLeft,
					dotsRight
				}
			} );
		}

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

	protected getType(): string {
		return "DPagination";
	}
}
