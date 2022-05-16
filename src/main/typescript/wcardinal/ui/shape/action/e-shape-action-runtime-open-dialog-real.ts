/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputReal } from "../../d-dialog-input-real";
import { EShape } from "../e-shape";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export class EShapeActionRuntimeOpenDialogReal extends EShapeActionRuntimeOpenDialog<number> {
	protected static DIALOG?: DDialogInputReal;
	protected initial: EShapeActionExpression<number>;

	constructor(value: EShapeActionValueOpen) {
		super(value);
		this.initial = EShapeActionExpressions.ofNumber(value.initial);
	}

	protected override open(shape: EShape, target: string, initial: number): Promise<number> {
		let dialog = EShapeActionRuntimeOpenDialogReal.DIALOG;
		if (dialog == null) {
			dialog = new DDialogInputReal({
				label: target
			});
			EShapeActionRuntimeOpenDialogReal.DIALOG = dialog;
		} else {
			const label = dialog.label;
			if (label) {
				label.text = target;
			}
		}
		dialog.value = initial;
		return dialog.open(shape);
	}
}
