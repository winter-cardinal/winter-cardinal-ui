/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputBoolean } from "../../d-dialog-input-boolean";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export class EShapeActionRuntimeOpenDialogBoolean extends EShapeActionRuntimeOpenDialog<boolean> {
	protected static DIALOG?: DDialogInputBoolean;
	protected initial: EShapeActionExpression<boolean>;

	constructor( value: EShapeActionValueOpen ) {
		super( value );
		this.initial = EShapeActionExpressions.ofBoolean( value.initial, false );
	}

	protected open( target: string, initial: boolean ): Promise<boolean> {
		let dialog = EShapeActionRuntimeOpenDialogBoolean.DIALOG;
		if( dialog == null ) {
			dialog = new DDialogInputBoolean({
				label: target
			});
			EShapeActionRuntimeOpenDialogBoolean.DIALOG = dialog;
		} else {
			const label = dialog.label;
			if( label ) {
				label.text = target;
			}
		}
		dialog.value = initial;
		return dialog.open();
	}
}
