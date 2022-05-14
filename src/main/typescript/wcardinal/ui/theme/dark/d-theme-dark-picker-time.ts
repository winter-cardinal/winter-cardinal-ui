/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DInputIntegerOptions } from "../../d-input-integer";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemePickerTime } from "../../d-picker-time";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkPickerTime extends DThemeDarkBase implements DThemePickerTime {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}

	getMargin(): number {
		return 8;
	}

	getHoursOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "Hours"
		};
	}

	getMinutesOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "Minutes"
		};
	}

	getSecondsOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "Seconds"
		};
	}

	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.HOURS | DPickerDatetimeMask.MINUTES;
	}

	getWidth(): DCoordinateSize {
		return "auto";
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}

	getLowerBound(): Date | null {
		return null;
	}

	isLowerBoundInclusive(): boolean {
		return false;
	}

	getUpperBound(): Date | null {
		return null;
	}

	isUpperBoundInclusive(): boolean {
		return false;
	}
}
