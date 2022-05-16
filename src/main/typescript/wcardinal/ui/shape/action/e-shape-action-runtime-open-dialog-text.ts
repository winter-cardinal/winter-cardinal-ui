/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputText } from "../../d-dialog-input-text";
import { EShape } from "../e-shape";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export class EShapeActionRuntimeOpenDialogText extends EShapeActionRuntimeOpenDialog<string> {
	protected static DIALOG?: DDialogInputText;
	protected initial: EShapeActionExpression<string>;

	constructor(value: EShapeActionValueOpen) {
		super(value);
		this.initial = EShapeActionExpressions.ofString(value.initial);
	}

	protected open(shape: EShape, target: string, initial: string): Promise<string> {
		let dialog = EShapeActionRuntimeOpenDialogText.DIALOG;
		if (dialog == null) {
			dialog = new DDialogInputText({
				label: target
			});
			EShapeActionRuntimeOpenDialogText.DIALOG = dialog;
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
