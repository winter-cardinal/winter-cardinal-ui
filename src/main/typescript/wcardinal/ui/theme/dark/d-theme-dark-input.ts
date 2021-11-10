/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInput } from "../../d-input";
import { UtilHtmlElementCreator } from "../../util/util-html-element";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkHtmlElement } from "./d-theme-dark-html-element";

const editingValidator = (): string | null => {
	return null;
};

const editingUnformatter = <VALUE>(text: string): VALUE => {
	return text as any;
};

export abstract class DThemeDarkInput<
		VALUE = unknown,
		ELEMENT extends HTMLInputElement | HTMLTextAreaElement =
			| HTMLInputElement
			| HTMLTextAreaElement
	>
	extends DThemeDarkHtmlElement<VALUE, ELEMENT>
	implements DThemeInput<VALUE, ELEMENT>
{
	protected readonly BACKGROUND_COLOR = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	protected readonly BACKGROUND_COLOR_HOVERED = UtilRgb.brighten(this.BACKGROUND_COLOR, 0.017);

	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled || state.inReadOnly) {
			return null;
		} else if (state.isHovered) {
			return this.BACKGROUND_COLOR_HOVERED;
		} else {
			return this.BACKGROUND_COLOR;
		}
	}

	getBorderColor(state: DBaseStateSet): number | null {
		if (state.isInvalid) {
			return DThemeDarkConstants.INVALID_COLOR;
		}
		return null;
	}

	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}

	getWidth(): DCoordinateSize {
		return 100;
	}

	getPlaceholder(): string {
		return "";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getCursor(state: DBaseStateSet): string {
		if (!state.isActionable) {
			return "";
		}
		return "text";
	}

	getEditingFormatter(): (value: VALUE, caller: any) => string {
		return this.getTextFormatter();
	}

	getEditingUnformatter(): (text: string, caller: any) => VALUE {
		return editingUnformatter;
	}

	getEditingValidator(): (value: VALUE, caller: any) => string | null {
		return editingValidator;
	}

	abstract getElementCreator(): UtilHtmlElementCreator<ELEMENT>;

	abstract getClipperCreator(): UtilHtmlElementCreator<HTMLDivElement>;

	abstract getBeforeCreator(): UtilHtmlElementCreator<HTMLDivElement>;

	abstract getAfterCreator(): UtilHtmlElementCreator<HTMLDivElement>;

	getSelect(): boolean {
		return true;
	}

	protected getElementStyleMargin(state: DBaseStateSet): string {
		return "margin: 0.1em 0 0 0;";
	}
}
