/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputText } from "../../d-dialog-input-text";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";

export class EShapeActionRuntimeOpenDialogText extends EShapeActionRuntimeOpenDialog<string> {
	protected static DIALOG?: DDialogInputText;

	protected open( target: string ): Promise<string> {
		let dialog = EShapeActionRuntimeOpenDialogText.DIALOG;
		if( dialog == null ) {
			dialog = new DDialogInputText({
				label: target
			});
			EShapeActionRuntimeOpenDialogText.DIALOG = dialog;
		} else {
			const label = dialog.label;
			if( label ) {
				label.text = target;
			}
		}
		return dialog.open();
	}
}
