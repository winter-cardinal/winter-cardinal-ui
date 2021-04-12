/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogDatetime } from "../../d-dialog-datetime";
import { isNumber } from "../../util/is-number";
import { isString } from "../../util/is-string";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export class EShapeActionRuntimeOpenDialogDatetime extends EShapeActionRuntimeOpenDialog<
	string,
	unknown
> {
	protected static DIALOG?: DDialogDatetime;

	protected initial: EShapeActionExpression<unknown>;

	constructor(value: EShapeActionValueOpen) {
		super(value);
		this.initial = EShapeActionExpressions.ofUnknown(value.initial);
	}

	protected open(target: string, initial: unknown): Promise<string> {
		let dialog = EShapeActionRuntimeOpenDialogDatetime.DIALOG;
		if (dialog == null) {
			dialog = new DDialogDatetime();
			EShapeActionRuntimeOpenDialogDatetime.DIALOG = dialog;
		}
		dialog.new = dialog.current = this.toDate(initial);
		return dialog.open().then((value) => {
			return value.toISOString();
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
}
