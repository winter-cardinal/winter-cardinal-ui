/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputInteger } from "../../d-dialog-input-integer";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";

export class EShapeActionRuntimeOpenDialogInteger extends EShapeActionRuntimeOpenDialog<number> {
	protected static DIALOG?: DDialogInputInteger;

	protected open( target: string, initial: number ): Promise<number> {
		let dialog = EShapeActionRuntimeOpenDialogInteger.DIALOG;
		if( dialog == null ) {
			dialog = new DDialogInputInteger({
				label: target
			});
			EShapeActionRuntimeOpenDialogInteger.DIALOG = dialog;
		} else {
			const label = dialog.label;
			if( label ) {
				label.text = target;
			}
		}
		dialog.value = initial;
		return dialog.open();
	}

	protected newInitial( this: unknown ): number {
		return 0;
	}

	protected getInitialLiteral(): string {
		return "0";
	}
}
