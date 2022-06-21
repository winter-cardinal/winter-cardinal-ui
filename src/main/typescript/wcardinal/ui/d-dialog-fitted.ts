/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogFittedContent } from "./d-dialog-fitted-content";
import { DDialogLayered, DDialogLayeredOptions, DThemeDialogLayered } from "./d-dialog-layered";
import { DLayoutVerticalOptions } from "./d-layout-vertical";

/**
 * {@link DDialogFitted} options.
 */
export interface DDialogFittedOptions<
	VALUE = unknown,
	THEME extends DThemeDialogFitted = DThemeDialogFitted,
	EMITTER = any
> extends DDialogLayeredOptions<VALUE, THEME, EMITTER> {}

/**
 * {@link DDialogFitted} theme.
 */
export interface DThemeDialogFitted extends DThemeDialogLayered {}

/**
 * A dialog with a header, a content and a footer.
 * Unlike {@link DDialogLayered}, the width is determined by the content width.
 */
export abstract class DDialogFitted<
	VALUE = void,
	THEME extends DThemeDialogFitted = DThemeDialogFitted,
	OPTIONS extends DDialogFittedOptions<VALUE, THEME> = DDialogFittedOptions<VALUE, THEME>
> extends DDialogLayered<VALUE, THEME, OPTIONS> {
	protected newLayoutOptions(theme: THEME, options?: OPTIONS): DLayoutVerticalOptions {
		return {
			width: "auto",
			height: "auto",
			margin: 0
		};
	}

	protected newContent(): DDialogFittedContent {
		return new DDialogFittedContent(this.toContentOptions(this.theme, this._options));
	}

	protected getType(): string {
		return "DDialogFitted";
	}
}
