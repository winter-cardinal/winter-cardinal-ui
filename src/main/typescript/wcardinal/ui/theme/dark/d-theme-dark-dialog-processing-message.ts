/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkDialogConfirmMessage } from "./d-theme-dark-dialog-confirm-message";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeDarkAtlas.add( "success_mark", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff" />` +
	`</g>`
);

DThemeDarkAtlas.add( "fail_mark", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52` +
		` 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8` +
		`-3.58 8-8 8z" fill="#fff" />` +
	`</g>`
);

export class DThemeDarkDialogProcessingMessage<VALUE> extends DThemeDarkDialogConfirmMessage<VALUE> {
	getHeight(): number {
		return 90;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.isSucceeded ) {
			return DThemeDarkAtlas.mappings.success_mark;
		} else if( state.isFailed ) {
			return DThemeDarkAtlas.mappings.fail_mark;
		}
		return null;
	}

	getImageTintAlpha( state: DBaseStateSet ): number {
		return 0.75;
	}
}
