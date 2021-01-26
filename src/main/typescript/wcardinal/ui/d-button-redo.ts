/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DControllers } from "./d-controllers";

export class DButtonRedo<
	VALUE = unknown,
	THEME extends DThemeButton<VALUE> = DThemeButton<VALUE>,
	OPTIONS extends DButtonOptions<VALUE, THEME> = DButtonOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );

		const state = this.state;
		const commandController = DControllers.getCommandController();
		state.isDisabled = ! commandController.isRedoable();
		commandController.on( "change", (): void => {
			state.isDisabled = ! commandController.isRedoable();
		});
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		super.onActivate( e );
		DControllers.getCommandController().redo();
	}
}
