/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCornerMask } from "../../d-corner-mask";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkListItems {
	protected readonly _backgroundColorEven: number;
	protected readonly _backgroundAlphaEven: number;

	protected readonly _backgroundColorOdd: number;
	protected readonly _backgroundAlphaOdd: number;

	protected readonly _isStripeEnabled: boolean;

	protected readonly _invalidColor: number;
	protected readonly _invalidAlpha: number;

	protected readonly _highlightColor: number;
	protected readonly _highlightAlpha: number;

	protected readonly _weakHighlightColor: number;
	protected readonly _weakHighlightAlpha: number;

	protected readonly _imageTintColorWeak: number;
	protected readonly _imageTintColorHighlight: number;

	protected readonly _colorActive: number;
	protected readonly _color: number;

	constructor(baseColor: number | null, isStripeEnabled: boolean, isVivid: boolean) {
		this._isStripeEnabled = isStripeEnabled;
		if (baseColor != null) {
			this._backgroundColorEven = baseColor;
			this._backgroundAlphaEven = 1;

			this._backgroundColorOdd = UtilRgb.brighten(baseColor, 0.0075);
			this._backgroundAlphaOdd = 1;

			this._invalidColor = UtilRgb.blend(
				baseColor,
				DThemeDarkConstants.INVALID_COLOR,
				DThemeDarkConstants.INVALID_ALPHA
			);
			this._invalidAlpha = 1;

			if (isVivid) {
				this._highlightColor = DThemeDarkConstants.HIGHLIGHT_COLOR;
			} else {
				this._highlightColor = UtilRgb.blend(
					baseColor,
					DThemeDarkConstants.HIGHLIGHT_COLOR,
					DThemeDarkConstants.HIGHLIGHT_ALPHA
				);
			}
			this._highlightAlpha = 1;

			this._weakHighlightColor = UtilRgb.blend(
				baseColor,
				DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR,
				DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA
			);
			this._weakHighlightAlpha = 1;
		} else {
			this._backgroundColorEven = 0xffffff;
			this._backgroundAlphaEven = 0;

			this._backgroundColorOdd = 0xffffff;
			this._backgroundAlphaOdd = 0.0075;

			this._invalidColor = DThemeDarkConstants.INVALID_COLOR;
			this._invalidAlpha = DThemeDarkConstants.INVALID_ALPHA;

			this._highlightColor = DThemeDarkConstants.HIGHLIGHT_COLOR;
			if (isVivid) {
				this._highlightAlpha = 1;
			} else {
				this._highlightAlpha = DThemeDarkConstants.HIGHLIGHT_ALPHA;
			}

			this._weakHighlightColor = DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
			this._weakHighlightAlpha = DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
		}

		this._imageTintColorWeak = DThemeDarkConstants.COLOR;
		if (isVivid) {
			this._imageTintColorHighlight = DThemeDarkConstants.ACTIVE_COLOR;
		} else {
			this._imageTintColorHighlight = DThemeDarkConstants.COLOR;
		}

		if (isVivid) {
			this._color = DThemeDarkConstants.COLOR;
			this._colorActive = DThemeDarkConstants.ACTIVE_COLOR;
		} else {
			this._color = DThemeDarkConstants.COLOR;
			this._colorActive = DThemeDarkConstants.COLOR;
		}
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			if (this._isStripeEnabled) {
				if (state.isAlternated) {
					return this._backgroundColorOdd;
				} else {
					return this._backgroundColorEven;
				}
			} else {
				return null;
			}
		} else if (state.isInvalid) {
			return this._invalidColor;
		} else if (state.isActive) {
			return this._highlightColor;
		} else if (state.isHovered) {
			return this._weakHighlightColor;
		} else {
			if (this._isStripeEnabled) {
				if (state.isAlternated) {
					return this._backgroundColorOdd;
				} else {
					return this._backgroundColorEven;
				}
			} else {
				return null;
			}
		}
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		if (state.inDisabled) {
			if (this._isStripeEnabled) {
				if (state.isAlternated) {
					return this._backgroundAlphaOdd;
				} else {
					return this._backgroundAlphaEven;
				}
			} else {
				return 0;
			}
		} else if (state.isInvalid) {
			return this._invalidAlpha;
		} else if (state.isActive) {
			return this._highlightAlpha;
		} else if (state.isHovered) {
			return this._weakHighlightAlpha;
		} else {
			if (this._isStripeEnabled) {
				if (state.isAlternated) {
					return this._backgroundAlphaOdd;
				} else {
					return this._backgroundAlphaEven;
				}
			} else {
				return 0;
			}
		}
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DBorderMask.NONE;
	}

	getColor(state: DBaseStateSet): number {
		if (state.isActive) {
			return this._colorActive;
		}
		return this._color;
	}

	getAlpha(state: DBaseStateSet): number {
		if (state.inEnabled) {
			return 1.0;
		}
		return 0;
	}

	getImageTintColor(state: DBaseStateSet, isActive?: boolean): number | null {
		if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
			return this._imageTintColorWeak;
		} else {
			return this._imageTintColorHighlight;
		}
	}

	getHeight(): number {
		return 30;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}

	getCursor(state: DBaseStateSet): string {
		if (!state.isActionable) {
			return "";
		}
		return "pointer";
	}
}
