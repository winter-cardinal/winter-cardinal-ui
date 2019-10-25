/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DControllers } from "./d-controllers";

export class DButtonUndo<
	VALUE = unknown,
	THEME extends DThemeButton = DThemeButton,
	OPTIONS extends DButtonOptions<VALUE, THEME> = DButtonOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );

		const commandController = DControllers.getCommandController();
		this.setState( DBaseState.DISABLED, ! commandController.isUndoable() );
		commandController.on( "change", () => {
			this.setState( DBaseState.DISABLED, ! commandController.isUndoable() );
		});

		this.on( "active", () => {
			commandController.undo();
		});
	}
}
