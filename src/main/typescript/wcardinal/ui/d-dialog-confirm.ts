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
> extends DDialogCommand<void, THEME, OPTIONS> {
	protected _message?: DDialogConfirmMessage;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		super.onInit( layout, options );
		layout.addChild( this.message );
	}

	protected toMessage( theme: THEME, options?: OPTIONS ): DDialogConfirmMessage {
		const message = options?.message;
		if( message != null ) {
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
		let text = options.text;
		if( text == null ) {
			text = {};
			options.text =　text;
		}
		if( text.value === undefined ) {
			text.value = message;
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
		let result = this._message;
		if( result == null ) {
			result = this.toMessage( this.theme, this._options );
			this._message = result;
		}
		return result;
	}

	protected doResolve( resolve: ( value: void | PromiseLike<void> ) => void ): void {
		resolve();
	}

	protected getType(): string {
		return "DDialogConfirm";
	}
}
