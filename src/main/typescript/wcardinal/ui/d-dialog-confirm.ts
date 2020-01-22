/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DDialogConfirmMessage, DDialogConfirmMessageOptions } from "./d-dialog-confirm-message";
import { DLayoutVertical } from "./d-layout-vertical";
import { DStateAwareOrValue } from "./d-state-aware";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";

export interface DDialogConfirmOptions<
	THEME extends DThemeDialogConfirm = DThemeDialogConfirm
> extends DDialogCommandOptions<THEME> {
	message?: DStateAwareOrValue<string> | DDialogConfirmMessageOptions | DDialogConfirmMessage;
}

export interface DThemeDialogConfirm extends DThemeDialogCommand {
	getMessage(): DStateAwareOrValue<string>;
}

export class DDialogConfirm<
	THEME extends DThemeDialogConfirm = DThemeDialogConfirm,
	OPTIONS extends DDialogConfirmOptions<THEME> = DDialogConfirmOptions<THEME>
> extends DDialogCommand<THEME, OPTIONS> {
	protected _message!: DDialogConfirmMessage;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		super.onInit( layout, options );
		const message = this.toMessage( this.theme, options );
		this._message = message;
		layout.addChild( message );
	}

	protected toMessage( theme: DThemeDialogConfirm, options?: DDialogConfirmOptions ): DDialogConfirmMessage {
		if( options && options.message != null ) {
			const message = options.message;
			if( isString( message ) || isFunction( message ) ) {
				return this.newMessage(
					this.toMessageOptions( message )
				);
			} else if( message instanceof DBase ) {
				return message;
			} else {
				return this.newMessage(
					this.toMessageOptionsMerged( message, theme.getMessage() )
				);
			}
		}
		return this.newMessage(
			this.toMessageOptions( theme.getMessage() )
		);
	}

	protected toMessageOptionsMerged(
		options: DDialogConfirmMessageOptions,
		message: DStateAwareOrValue<string>
	): DDialogConfirmMessageOptions {
		if( options.text == null ) {
			options.text =　{};
		}
		if( options.text.value === undefined ) {
			options.text.value = message;
		}
		return options;
	}

	protected toMessageOptions( message: DStateAwareOrValue<string> ): DDialogConfirmMessageOptions {
		return {
			text: {
				value: message
			}
		};
	}

	protected newMessage( options: DDialogConfirmMessageOptions ): DDialogConfirmMessage {
		return new DDialogConfirmMessage( options );
	}

	get message(): DDialogConfirmMessage {
		return this._message;
	}

	protected getType(): string {
		return "DDialogConfirm";
	}
}
