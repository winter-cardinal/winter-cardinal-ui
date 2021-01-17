/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DControllers } from "./d-controllers";

export class DButtonUndo<
	VALUE = unknown,
	THEME extends DThemeButton<VALUE> = DThemeButton<VALUE>,
	OPTIONS extends DButtonOptions<VALUE, THEME> = DButtonOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );

		const commandController = DControllers.getCommandController();
		this.state.isDisabled = ! commandController.isUndoable();
		commandController.on( "change", (): void => {
			this.state.isDisabled = ! commandController.isUndoable();
		});

		this.on( "active", (): void => {
			commandController.undo();
		});
	}
}
