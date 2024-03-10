import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DThemes } from "./theme/d-themes";
import { DImageBase } from "./d-image-base";

export interface DIndicatorProcessingDelayOptions {
	done?: number;
	close?: number | null;
}

export interface DIndicatorProcessingTextOptions<VALUE> {
	enabled?: boolean;
	value?: DStateAwareOrValueMightBe<VALUE>;
}

export interface DIndicatorProcessingImageOptions {
	enabled?: boolean;
	index?: number;
	source?: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	rotation?: DStateAwareOrValueMightBe<number>;
}

export interface DIndicatorProcessingOptions<VALUE> {
	delay?: DIndicatorProcessingDelayOptions;
	text?: DIndicatorProcessingTextOptions<VALUE>;
	image?: DIndicatorProcessingImageOptions;
}

export interface DThemeIndicatorProcessing<VALUE = unknown> {
	getProcessDoneDelay(): number;
	getProcessCloseDelay(): number | null;

	isProcessTextEnabled(): boolean;
	newProcessTextValue(): DStateAwareOrValueMightBe<VALUE>;

	isProcessImageEnabled(): boolean;
	getProcessImageIndex(): number;
	newProcessImageSource(): DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	newProcessImageRotation(): DStateAwareOrValueMightBe<number>;
}

export const DIndicatorProcessingState = {
	INITIAL: 0,
	STARTED: 1,
	RESOLVED: 2,
	REJECTED: 3
} as const;

export type DIndicatorProcessingState =
	(typeof DIndicatorProcessingState)[keyof typeof DIndicatorProcessingState];

export class DIndicatorProcessing<VALUE> {
	protected _parent: DImageBase<VALUE>;
	protected _state: DIndicatorProcessingState;
	protected _startTime: number;
	protected _delayDone: number;
	protected _delayClose: number | null;
	protected _timeoutId?: number;
	protected _closeTimeoutId?: number;
	protected _isTextEnabled: boolean;
	protected _textValue: DStateAwareOrValueMightBe<VALUE>;
	protected _textValueBackup?: DStateAwareOrValueMightBe<VALUE>;
	protected _isImageEnabled: boolean;
	protected _imageIndex: number;
	protected _imageSource: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	protected _imageRotation: DStateAwareOrValueMightBe<number>;
	protected _imageSourceBackup?: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	protected _imageRotationBackup?: DStateAwareOrValueMightBe<number>;
	protected _wasReadOnly: boolean;

	constructor(parent: DImageBase<VALUE>, options?: DIndicatorProcessingOptions<VALUE>) {
		this._parent = parent;
		this._state = DIndicatorProcessingState.INITIAL;
		this._startTime = 0;

		// Delay
		const theme = this.theme;
		const delay = options?.delay;
		this._delayDone = delay?.done ?? theme.getProcessDoneDelay();
		const delayClose = delay?.close;
		this._delayClose = delayClose !== undefined ? delayClose : theme.getProcessCloseDelay();

		// Text
		const text = options?.text;
		this._isTextEnabled = text?.enabled ?? theme.isProcessTextEnabled();
		this._textValue = text?.value ?? theme.newProcessTextValue();

		// Image
		const image = options?.image;
		this._isImageEnabled = image?.enabled ?? theme.isProcessImageEnabled();
		this._imageIndex = image?.index ?? theme.getProcessImageIndex();
		this._imageSource = image?.source ?? theme.newProcessImageSource();
		this._imageRotation = image?.rotation ?? theme.newProcessImageRotation();

		// State
		this._wasReadOnly = false;
	}

	start(): this {
		const state = this._state;
		if (state === DIndicatorProcessingState.INITIAL) {
			this._state = DIndicatorProcessingState.STARTED;
			this.onBegin();
		} else if (
			state === DIndicatorProcessingState.RESOLVED ||
			state === DIndicatorProcessingState.REJECTED
		) {
			this._state = DIndicatorProcessingState.STARTED;
			this.onEnd();
			this.onBegin();
		}
		return this;
	}

	protected onBegin(): void {
		this._startTime = Date.now();
		const timeoutId = this._timeoutId;
		if (timeoutId != null) {
			clearTimeout(timeoutId);
		}
		const closeTimeoutId = this._closeTimeoutId;
		if (closeTimeoutId != null) {
			clearTimeout(closeTimeoutId);
		}

		const parent = this._parent;
		const state = parent.state;
		state.lock();
		state.ticker.remove(DBaseState.PROCESSING).add(DBaseState.PROCESSING, 32);
		state.removeAll(DBaseState.SUCCEEDED, DBaseState.FAILED);
		this._wasReadOnly = state.isReadOnly;
		if (!this._wasReadOnly) {
			state.add(DBaseState.READ_ONLY);
		}
		state.unlock();

		if (this._isTextEnabled) {
			this._textValueBackup = parent.text.value;
			const textValue = this._textValue;
			if (textValue !== undefined) {
				parent.text = textValue;
			}
		}

		if (this._isImageEnabled) {
			const image = parent.image.get(this._imageIndex);
			if (image != null) {
				this._imageSourceBackup = image.source;
				this._imageRotationBackup = image.rotation;
				const imageSource = this._imageSource;
				if (imageSource !== undefined) {
					image.source = imageSource;
				}
				const imageRotation = this._imageRotation;
				if (imageRotation !== undefined) {
					image.rotation = imageRotation;
				}
			}
		}
	}

	end(): this {
		const state = this._state;
		if (
			state === DIndicatorProcessingState.STARTED ||
			state === DIndicatorProcessingState.RESOLVED ||
			state === DIndicatorProcessingState.REJECTED
		) {
			this._state = DIndicatorProcessingState.INITIAL;
			this.onEnd();
		}
		return this;
	}

	protected onEnd(): void {
		const timeoutId = this._timeoutId;
		if (timeoutId != null) {
			clearTimeout(timeoutId);
		}
		const closeTimeoutId = this._closeTimeoutId;
		if (closeTimeoutId != null) {
			clearTimeout(closeTimeoutId);
		}

		const parent = this._parent;
		const state = parent.state;
		state.lock();
		state.ticker.remove(DBaseState.PROCESSING);
		state.removeAll(DBaseState.SUCCEEDED, DBaseState.FAILED);
		if (!this._wasReadOnly) {
			state.remove(DBaseState.READ_ONLY);
		}
		state.unlock();

		if (this._isTextEnabled) {
			parent.text = this._textValueBackup;
		}

		if (this._isImageEnabled) {
			const image = parent.image.get(this._imageIndex);
			if (image != null) {
				image.source = this._imageSourceBackup;
				image.rotation = this._imageRotationBackup;
			}
		}
	}

	resolve(message?: DStateAwareOrValueMightBe<VALUE>): void {
		if (this._state === DIndicatorProcessingState.STARTED) {
			this._state = DIndicatorProcessingState.RESOLVED;
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

	protected onResolved(message?: DStateAwareOrValueMightBe<VALUE>): void {
		const parent = this._parent;
		if (this._isTextEnabled && message != null) {
			parent.text = message;
		}
		const state = parent.state;
		state.lock();
		state.ticker.remove(DBaseState.PROCESSING);
		state.add(DBaseState.SUCCEEDED);
		state.remove(DBaseState.FAILED);
		if (!this._wasReadOnly) {
			state.remove(DBaseState.READ_ONLY);
		}
		state.unlock();

		this.onDone(this._delayClose);
	}

	reject(message?: DStateAwareOrValueMightBe<VALUE>): void {
		if (this._state === DIndicatorProcessingState.STARTED) {
			this._state = DIndicatorProcessingState.REJECTED;
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

	protected onRejected(message?: DStateAwareOrValueMightBe<VALUE>): void {
		const parent = this._parent;
		if (this._isTextEnabled && message != null) {
			parent.text = message;
		}
		const state = parent.state;
		state.lock();
		state.ticker.remove(DBaseState.PROCESSING);
		state.add(DBaseState.FAILED);
		state.remove(DBaseState.SUCCEEDED);
		if (!this._wasReadOnly) {
			state.remove(DBaseState.READ_ONLY);
		}
		state.unlock();

		this.onDone(this._delayClose);
	}

	protected onDone(delay: number | null): void {
		if (delay != null) {
			this._closeTimeoutId = window.setTimeout(() => {
				this._closeTimeoutId = undefined;
				this.end();
			}, delay);
		} else {
			this.end();
		}
	}

	protected getType(): string {
		return "DIndicatorProcessing";
	}

	get theme(): DThemeIndicatorProcessing<VALUE> {
		return DThemes.get(this.getType());
	}
}
