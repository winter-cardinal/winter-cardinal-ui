/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogTime } from "../../d-dialog-time";
import { isNaN } from "../../util/is-nan";
import { isNumber } from "../../util/is-number";
import { isString } from "../../util/is-string";
import { NumberFormatter } from "../../util/number-formatter";
import { NumberFormatters } from "../../util/number-formatters";
import { EShape } from "../e-shape";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpenDialog } from "./e-shape-action-value-open-dialog";

export class EShapeActionRuntimeOpenDialogTime extends EShapeActionRuntimeOpenDialog<
	string,
	unknown
> {
	protected static DIALOG?: DDialogTime;
	protected static PATTERN?: RegExp;
	protected static FORMATTER?: NumberFormatter;

	protected initial: EShapeActionExpression<unknown>;

	constructor(value: EShapeActionValueOpenDialog) {
		super(value);
		this.initial = EShapeActionExpressions.ofUnknown(value.initial);
	}

	protected override open(
		shape: EShape,
		target: string,
		initial: unknown,
		step: number | null,
		min: number | null,
		max: number | null
	): Promise<string> {
		let dialog = EShapeActionRuntimeOpenDialogTime.DIALOG;
		if (dialog == null) {
			dialog = new DDialogTime();
			EShapeActionRuntimeOpenDialogTime.DIALOG = dialog;
		}
		dialog.new = dialog.current = this.toDate(initial);
		return dialog.open(shape).then((value) => {
			return this.getFormatter().format(value.getTime(), 0);
		});
	}

	protected toDate(value: unknown): Date {
		if (isNumber(value)) {
			return new Date(value);
		} else if (isString(value)) {
			const result = new Date();
			const pattern = this.getPattern();
			const matched = pattern.exec(value);
			if (matched != null) {
				const hours = this.toHours(matched[1]);
				if (hours != null) {
					result.setHours(hours);
				}
				const minutes = this.toMinutes(matched[2]);
				if (minutes != null) {
					result.setMinutes(minutes);
				}
				const seconds = this.toSeconds(matched[3]);
				if (seconds != null) {
					result.setSeconds(seconds);
				}
				const milliseconds = this.toMilliseconds(matched[4]);
				if (milliseconds != null) {
					result.setMilliseconds(milliseconds);
				}
			}
			return result;
		} else if (value instanceof Date) {
			return value;
		} else {
			return new Date();
		}
	}

	protected toHours(value: string): number | null {
		return this.toNumber(value, 0, 23);
	}

	protected toMinutes(value: string): number | null {
		return this.toNumber(value, 0, 59);
	}

	protected toSeconds(value: string): number | null {
		return this.toNumber(value, 0, 59);
	}

	protected toMilliseconds(value: string): number | null {
		const result = this.toNumber(value, 0, 999);
		if (result != null) {
			const length = value.length;
			if (length === 1) {
				return result * 100;
			} else if (length === 2) {
				return result * 10;
			} else {
				return result;
			}
		}
		return result;
	}

	protected toNumber(value: string, min: number, max: number): number | null {
		if (value != null) {
			const num = +value;
			if (!isNaN(num)) {
				return Math.min(max, Math.max(min, num));
			}
		}
		return null;
	}

	protected getPattern(): RegExp {
		let result = EShapeActionRuntimeOpenDialogTime.PATTERN;
		if (result == null) {
			result = this.newPattern();
			EShapeActionRuntimeOpenDialogTime.PATTERN = result;
		}
		return result;
	}

	protected newPattern(): RegExp {
		return /^\s*(?:(\d+)(?::(\d+)(?::(\d+))?)?)?(?:\.(\d+))?\s*$/;
	}

	protected getFormatter(): NumberFormatter {
		let result = EShapeActionRuntimeOpenDialogTime.FORMATTER;
		if (result == null) {
			result = this.newFormatter();
			EShapeActionRuntimeOpenDialogTime.FORMATTER = result;
		}
		return result;
	}

	protected newFormatter(): NumberFormatter {
		return NumberFormatters.create("%Hm");
	}
}
