/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DDialogConfirm, DDialogConfirmOptions, DThemeDialogConfirm } from "./d-dialog-confirm";
import { DDialogConfirmMessage, DDialogConfirmMessageOptions } from "./d-dialog-confirm-message";
import { DDialogProcessingMessage } from "./d-dialog-processing-message";

export interface DDialogProcessingOptions<THEME extends DThemeDialogProcessing> extends DDialogConfirmOptions<THEME> {
	delay?: {
		done?: number;
		close?: number | null;
	};
}

export interface DThemeDialogProcessing extends DThemeDialogConfirm {
	getDoneDelay(): number;
	getCloseDelay(): number | null;
}

export class DDialogProcessing<
	THEME extends DThemeDialogProcessing = DThemeDialogProcessing,
	OPTIONS extends DDialogProcessingOptions<THEME> = DDialogProcessingOptions<THEME>
> extends DDialogConfirm<THEME, OPTIONS> {
	protected _isDone: boolean;
	protected _startTime: number;
	protected _delayDone: number;
	protected _delayClose: number | null;
	protected _timeoutId?: number;
	protected _messageText: unknown;
	protected _closeTimeoutId?: number;

	constructor( options?: OPTIONS ) {
		super( options );
		this._isDone = true;
		this._startTime =  0;
		const delay = options && options.delay;
		this._delayDone = ( delay && delay.done != null ? delay.done : this.theme.getDoneDelay() );
		this._delayClose = ( delay && delay.close !== undefined ? delay.close : this.theme.getCloseDelay() );
		this._messageText = this._message.text;
	}

	protected newMessage( options: DDialogConfirmMessageOptions ): DDialogConfirmMessage {
		return new DDialogProcessingMessage( options );
	}

	protected onOpen() {
		this._isDone = false;
		this._startTime = Date.now();
		const timeoutId = this._timeoutId;
		if( timeoutId != null ) {
			clearTimeout( timeoutId );
		}
		const closeTimeoutId = this._closeTimeoutId;
		if( closeTimeoutId != null ) {
			clearTimeout( closeTimeoutId );
		}
		const message = this._message;
		message.text = this._messageText;
		message.state.remove( DBaseState.SUCCEEDED | DBaseState.FAILED );
		const buttonLayout = this._buttonLayout;
		if( buttonLayout != null ) {
			buttonLayout.hide();
		}
		super.onOpen();
	}

	protected onDone( delay: number | null ) {
		if( delay != null ) {
			this._closeTimeoutId = window.setTimeout(() => {
				this.close();
			}, delay );
		} else {
			this.close();
		}
	}

	protected onResolved( message?: string ): void {
		if( message != null ) {
			this._message.text = message;
		}
		this._message.state.set( DBaseState.SUCCEEDED, DBaseState.FAILED );
		const delayClose = this._delayClose;
		if( delayClose != null ) {
			this.onDone( delayClose );
		} else {
			const buttonLayout = this._buttonLayout;
			if( buttonLayout != null ) {
				buttonLayout.show();
			} else {
				this.close();
			}
		}
	}

	protected onRejected( message?: string ): void {
		if( message != null ) {
			this._message.text = message;
		}
		this._message.state.set( DBaseState.FAILED, DBaseState.SUCCEEDED );
		const buttonLayout = this._buttonLayout;
		if( buttonLayout != null ) {
			buttonLayout.show();
		} else {
			this.onDone( this._delayClose );
		}
	}

	resolve( message?: string ): void {
		if( ! this._isDone ) {
			this._isDone = true;
			const elapsedTime = Date.now() - this._startTime;
			const delay = this._delayDone - elapsedTime;
			if( 0 < delay ) {
				this._timeoutId = window.setTimeout((): void => {
					this._timeoutId = undefined;
					this.onResolved( message );
				}, delay );
			} else {
				this.onResolved( message );
			}
		}
	}

	reject( message?: string ): void {
		if( ! this._isDone ) {
			this._isDone = true;
			const elapsedTime = Date.now() - this._startTime;
			const delay = this._delayDone - elapsedTime;
			if( 0 < delay ) {
				this._timeoutId = window.setTimeout((): void => {
					this._timeoutId = undefined;
					this.onRejected( message );
				}, delay );
			} else {
				this.onRejected( message );
			}
		}
	}

	protected onCloseOn(): void {
		if( this._isDone ) {
			super.onCloseOn();
		}
	}

	protected getType(): string {
		return "DDialogProcessing";
	}
}
