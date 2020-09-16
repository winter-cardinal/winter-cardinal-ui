/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputBoolean } from "../../d-dialog-input-boolean";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";

export class EShapeActionRuntimeOpenDialogBoolean extends EShapeActionRuntimeOpenDialog<boolean> {
	protected static DIALOG?: DDialogInputBoolean;

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

	protected newInitial( this: unknown ): boolean {
		return false;
	}

	protected getInitialLiteral(): string {
		return "false";
	}
}
