/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogDate } from "../../d-dialog-date";
import { isNumber } from "../../util/is-number";
import { isString } from "../../util/is-string";
import { NumberFormatter } from "../../util/number-formatter";
import { NumberFormatters } from "../../util/number-formatters";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export class EShapeActionRuntimeOpenDialogDate extends EShapeActionRuntimeOpenDialog<
	string,
	unknown
> {
	protected static DIALOG?: DDialogDate;
	protected static FORMATTER?: NumberFormatter;

	protected initial: EShapeActionExpression<unknown>;

	constructor(value: EShapeActionValueOpen) {
		super(value);
		this.initial = EShapeActionExpressions.ofUnknown(value.initial);
	}

	protected open(target: string, initial: unknown): Promise<string> {
		let dialog = EShapeActionRuntimeOpenDialogDate.DIALOG;
		if (dialog == null) {
			dialog = new DDialogDate();
			EShapeActionRuntimeOpenDialogDate.DIALOG = dialog;
		}
		dialog.new = dialog.current = this.toDate(initial);
		return dialog.open().then((value) => {
			return this.getFormatter().format(value.getTime(), 0);
		});
	}

	protected toDate(value: unknown): Date {
		if (isString(value) || isNumber(value)) {
			return new Date(value);
		} else if (value instanceof Date) {
			return value;
		} else {
			return new Date();
		}
	}

	protected getFormatter(): NumberFormatter {
		let result = EShapeActionRuntimeOpenDialogDate.FORMATTER;
		if (result == null) {
			result = this.newFormatter();
			EShapeActionRuntimeOpenDialogDate.FORMATTER = result;
		}
		return result;
	}

	protected newFormatter(): NumberFormatter {
		return NumberFormatters.create("%Y-%M-%D");
	}
}
