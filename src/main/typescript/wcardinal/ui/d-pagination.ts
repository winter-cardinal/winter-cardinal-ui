/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DPaginationNavigationButton } from "./d-pagination-navigation-button";
import { DThemes } from "./theme";

export interface DPaginationOptions<THEME extends DThemePagination> extends DLayoutHorizontalOptions<THEME> {

}

export interface DThemePagination extends DThemeLayoutHorizontal {

}

export class DPagination<
	THEME extends DThemePagination = DThemePagination,
	OPTIONS extends DPaginationOptions<THEME> = DPaginationOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected init( options ?: OPTIONS ) {
		super.init( options );

		const goFirstBtn = new DPaginationNavigationButton({
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_go_first

			}
		});

		const previousBtn = new DPaginationNavigationButton({
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_previous

			}
		});

		const nextBtn = new DPaginationNavigationButton({
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_next

			}
		});

		const goLastBtn = new DPaginationNavigationButton({
			image: {
				source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_go_last

			}
		});

		this.addChild( goFirstBtn );
		this.addChild( previousBtn );
		this.addChild( nextBtn );
		this.addChild( goLastBtn );
	}
}
