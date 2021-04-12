/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputInteger } from "../../d-dialog-input-integer";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export class EShapeActionRuntimeOpenDialogInteger extends EShapeActionRuntimeOpenDialog<number> {
	protected static DIALOG?: DDialogInputInteger;
	protected initial: EShapeActionExpression<number>;

	constructor(value: EShapeActionValueOpen) {
		super(value);
		this.initial = EShapeActionExpressions.ofNumber(value.initial);
	}

	protected open(target: string, initial: number): Promise<number> {
		let dialog = EShapeActionRuntimeOpenDialogInteger.DIALOG;
		if (dialog == null) {
			dialog = new DDialogInputInteger({
				label: target
			});
			EShapeActionRuntimeOpenDialogInteger.DIALOG = dialog;
		} else {
			const label = dialog.label;
			if (label) {
				label.text = target;
			}
		}
		dialog.value = initial;
		return dialog.open();
	}
}
