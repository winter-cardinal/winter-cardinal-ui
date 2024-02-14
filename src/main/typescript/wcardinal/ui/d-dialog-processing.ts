/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DDialogConfirm, DDialogConfirmOptions, DThemeDialogConfirm } from "./d-dialog-confirm";
import { DDialogConfirmMessage, DDialogConfirmMessageOptions } from "./d-dialog-confirm-message";
import { DDialogProcessingMessage } from "./d-dialog-processing-message";
import { DStateAwareOrValueMightBe } from "./d-state-aware";

export interface DDialogProcessingDelayOptions {
	done?: number;
	close?: number | null;
}

export interface DDialogProcessingOptions<THEME extends DThemeDialogProcessing>
	extends DDialogConfirmOptions<THEME> {
	delay?: DDialogProcessingDelayOptions;
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
	protected _messageText: DStateAwareOrValueMightBe<string>;
	protected _closeTimeoutId?: number;

	constructor(options?: OPTIONS) {
		super(options);
		this._isDone = true;
		this._startTime = 0;
		const theme = this.theme;
		const delay = options?.delay;
		this._delayDone = delay?.done ?? theme.getDoneDelay();
		const delayClose = delay?.close;
		this._delayClose = delayClose !== undefined ? delayClose : theme.getCloseDelay();
		this._messageText = this.message.text.value;
	}

	protected newMessage(options: DDialogConfirmMessageOptions): DDialogConfirmMessage {
		return new DDialogProcessingMessage(options);
	}

	protected onOpen(): void {
		this._isDone = false;
		this._startTime = Date.now();
		const timeoutId = this._timeoutId;
		if (timeoutId != null) {
			clearTimeout(timeoutId);
		}
		const closeTimeoutId = this._closeTimeoutId;
		if (closeTimeoutId != null) {
			clearTimeout(closeTimeoutId);
		}
		const message = this.message;
		message.text = this._messageText;
		message.state.removeAll(DBaseState.SUCCEEDED, DBaseState.FAILED);
		const footer = this._footer;
		if (footer != null) {
			footer.hide();
		}
		super.onOpen();
	}

	protected onDone(delay: number | null): void {
		if (delay != null) {
			this._closeTimeoutId = window.setTimeout(() => {
				this.close();
			}, delay);
		} else {
			this.close();
		}
	}

	protected onResolved(message?: string): void {
		if (message != null) {
			this.message.text = message;
		}
		this.message.state.set(DBaseState.SUCCEEDED, DBaseState.FAILED);
		const delayClose = this._delayClose;
		if (delayClose != null) {
			this.onDone(delayClose);
		} else {
			const footer = this._footer;
			if (footer != null) {
				footer.show();
			} else {
				this.close();
			}
		}
	}

	protected onRejected(message?: string): void {
		if (message != null) {
			this.message.text = message;
		}
		this.message.state.set(DBaseState.FAILED, DBaseState.SUCCEEDED);
		const footer = this._footer;
		if (footer != null) {
			footer.show();
		} else {
			this.onDone(this._delayClose);
		}
	}

	resolve(message?: string): void {
		if (!this._isDone) {
			this._isDone = true;
			const elapsedTime = Date.now() - this._startTime;
			const delay = this._delayDone - elapsedTime;
			if (0 < delay) {
				this._timeoutId = window.setTimeout((): void => {
					this._timeoutId = undefined;
					this.onResolved(message);
				}, delay);
			} else {
				this.onResolved(message);
			}
		}
	}

	reject(message?: string): void {
		if (!this._isDone) {
			this._isDone = true;
			const elapsedTime = Date.now() - this._startTime;
			const delay = this._delayDone - elapsedTime;
			if (0 < delay) {
				this._timeoutId = window.setTimeout((): void => {
					this._timeoutId = undefined;
					this.onRejected(message);
				}, delay);
			} else {
				this.onRejected(message);
			}
		}
	}

	protected onCloseOn(): void {
		if (this._isDone) {
			super.onCloseOn();
		}
	}

	protected getType(): string {
		return "DDialogProcessing";
	}
}
