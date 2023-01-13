/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputReal } from "../../d-dialog-input-real";
import { EShape } from "../e-shape";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpenDialog } from "./e-shape-action-value-open-dialog";

export class EShapeActionRuntimeOpenDialogReal extends EShapeActionRuntimeOpenDialog<number> {
	protected static DIALOG?: DDialogInputReal;
	protected initial: EShapeActionExpression<number>;
	protected min: EShapeActionExpression<number | null>;
	protected max: EShapeActionExpression<number | null>;

	constructor(value: EShapeActionValueOpenDialog) {
		super(value);
		this.initial = EShapeActionExpressions.ofNumber(value.initial);
		this.min = EShapeActionExpressions.ofNumberOrNull(value.min);
		this.max = EShapeActionExpressions.ofNumberOrNull(value.max);
	}

	protected override open(
		shape: EShape,
		target: string,
		initial: number,
		min: number,
		max: number
	): Promise<number> {
		let dialog = EShapeActionRuntimeOpenDialogReal.DIALOG;
		if (dialog == null) {
			dialog = new DDialogInputReal({
				header: {
					text: {
						value: target
					},
					button: {
						close: false
					},
				},
				min: min,
				max: max
			});
			EShapeActionRuntimeOpenDialogReal.DIALOG = dialog;
		} else {
			const header = dialog.header;
			if (header) {
				header.text = target;
			}
		}
		dialog.value = initial;
		return dialog.open(shape);
	}
}
