/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputInteger } from "../../d-dialog-input-integer";
import { EShape } from "../e-shape";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpenDialog } from "./e-shape-action-value-open-dialog";

export class EShapeActionRuntimeOpenDialogInteger extends EShapeActionRuntimeOpenDialog<number> {
	protected static DIALOG?: DDialogInputInteger;
	protected initial: EShapeActionExpression<number>;

	constructor(value: EShapeActionValueOpenDialog) {
		super(value);
		this.initial = EShapeActionExpressions.ofNumber(value.initial);
	}

	protected override open(
		shape: EShape,
		target: string,
		initial: number,
		step: number | null,
		min: number | null,
		max: number | null
	): Promise<number> {
		let dialog = EShapeActionRuntimeOpenDialogInteger.DIALOG;
		if (dialog == null) {
			dialog = new DDialogInputInteger({
				header: {
					text: {
						value: target
					},
					button: {
						close: false
					}
				},
				input: {
					step,
					min,
					max,
					text: {
						value: initial
					}
				}
			});
			EShapeActionRuntimeOpenDialogInteger.DIALOG = dialog;
		} else {
			const header = dialog.header;
			if (header) {
				header.text = target;
			}
			const input = dialog.input;
			input.step = step;
			input.min = min;
			input.max = max;
			dialog.value = initial;
		}
		return dialog.open(shape);
	}
}
