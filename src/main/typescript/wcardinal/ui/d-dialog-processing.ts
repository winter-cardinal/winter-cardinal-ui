/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DDialogConfirm, DDialogConfirmOptions, DThemeDialogConfirm } from "./d-dialog-confirm";
import { DDialogConfirmMessage, DDialogConfirmMessageOptions } from "./d-dialog-confirm-message";
import { DDialogProcessingMessage } from "./d-dialog-processing-message";

export interface DDialogProcessingOptions<THEME extends DThemeDialogProcessing> extends DDialogConfirmOptions<THEME> {
	interval?: number;
}

export interface DThemeDialogProcessing extends DThemeDialogConfirm {
	getInterval(): number;
}

export class DDialogProcessing<
	THEME extends DThemeDialogProcessing = DThemeDialogProcessing,
	OPTIONS extends DDialogProcessingOptions<THEME> = DDialogProcessingOptions<THEME>
> extends DDialogConfirm<THEME, OPTIONS> {
	protected _isDone: boolean;
	protected _startTime: number;
	protected _interval: number;
	protected _timeoutId?: number;

	constructor( options?: OPTIONS ) {
		super( options );
		this._isDone = true;
		this._startTime =  0;
		this._interval = ( options && options.interval != null ? options.interval : this.theme.getInterval() );
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
		this._message.setStates( DBaseState.NONE, DBaseState.SUCCEEDED | DBaseState.FAILED );
		const buttonLayout = this._buttonLayout;
		if( buttonLayout != null ) {
			buttonLayout.setDisabled( true );
		}
		super.onOpen();
	}

	protected onDone(): void {
		const buttonLayout = this._buttonLayout;
		if( buttonLayout != null ) {
			buttonLayout.setDisabled( false );
		} else {
			this.close();
		}
	}

	protected onResolved( message?: string ): void {
		if( message != null ) {
			this._message.text = message;
		}
		this._message.setStates( DBaseState.SUCCEEDED, DBaseState.FAILED );
		this.onDone();
	}

	protected onRejected( message?: string ): void {
		if( message != null ) {
			this._message.text = message;
		}
		this._message.setStates( DBaseState.FAILED, DBaseState.SUCCEEDED );
		this.onDone();
	}

	resolve( message?: string ): void {
		if( ! this._isDone ) {
			this._isDone = true;
			const elapsedTime = Date.now() - this._startTime;
			const delay = this._interval - elapsedTime;
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
			const delay = this._interval - elapsedTime;
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
