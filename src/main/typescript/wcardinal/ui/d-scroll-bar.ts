/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DScrollBarThumb, DScrollBarThumbOptions } from "./d-scroll-bar-thumb";

export interface DScrollBarFadeOutOpiotns {
	delay?: number;
}

export interface DScrollBarOptions<THEME extends DThemeScrollBar = DThemeScrollBar>
	extends DBaseOptions<THEME> {
	thumb?: DScrollBarThumbOptions;
	fadeOut?: DScrollBarFadeOutOpiotns;
}

export interface DThemeScrollBar extends DThemeBase {
	getFadeOutDelay(): number;
}

export abstract class DScrollBar<
	THEME extends DThemeScrollBar = DThemeScrollBar,
	OPTIONS extends DScrollBarOptions<THEME> = DScrollBarOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _start: number;
	protected _end: number;
	protected _thumb: DScrollBarThumb;
	protected _touchedAt: number;
	protected _fadeOutTimeoutId: number | null;
	protected _fadeOutDelay: number;
	protected _onFadeOutTimeoutBound: () => void;
	protected _isSilent: boolean;

	constructor(options?: OPTIONS) {
		super(options);

		this._start = 0;
		this._end = 1;
		this.visible = false;
		this._touchedAt = -1;
		this._fadeOutTimeoutId = null;
		this._fadeOutDelay = options?.fadeOut?.delay ?? this.theme.getFadeOutDelay();
		this._isSilent = true;
		this._onFadeOutTimeoutBound = (): void => {
			this.onFadeOutTimeout();
		};
		const thumb = this.newThumb(options?.thumb);
		thumb.on("statechange", (newState: DBaseStateSet, oldState: DBaseStateSet): void => {
			this.onThumbStateChange(newState, oldState);
		});
		this._thumb = thumb;
		this.addChild(thumb);
		this.state.isFocusable = false;
	}

	get thumb(): DScrollBarThumb {
		return this._thumb;
	}

	get start(): number {
		return this._start;
	}

	get end(): number {
		return this._end;
	}

	set(start: number, end: number, size: number, silently?: boolean): void {
		if (size < 1) {
			start = 0;
			end = 1;
		} else {
			start = Math.max(0, Math.min(1, start / size));
			end = Math.max(start, Math.min(1, end / size));
		}
		if (this._start !== start || this._end !== end) {
			this._start = start;
			this._end = end;
			this.onChange(silently);
		}
	}

	protected onChange(silently: boolean = this._isSilent): void {
		this.updateThumb(this.width, this.height);

		if (!silently && this.isRegionVisible()) {
			const fadeOutDelay = this._fadeOutDelay;
			if (0 <= fadeOutDelay) {
				this._touchedAt = Date.now();
				if (this._fadeOutTimeoutId == null) {
					this._fadeOutTimeoutId = window.setTimeout(
						this._onFadeOutTimeoutBound,
						fadeOutDelay
					);
				}
			}
			if (!this.visible) {
				this.visible = true;
				DApplications.update(this);
			}
		} else {
			if (this._fadeOutDelay < 0 && this.visible) {
				this.visible = false;
				DApplications.update(this);
			}
		}
	}

	isRegionVisible(): boolean {
		return 0 < this._start || this._end < 1;
	}

	render(renderer: PIXI.Renderer): void {
		if (this._isSilent) {
			this._isSilent = false;
		}
		super.render(renderer);
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		super.onResize(newWidth, newHeight, oldWidth, oldHeight);
		this.updateThumb(newWidth, newHeight);
	}

	protected abstract updateThumb(width: number, height: number): void;

	protected onFadeOutTimeout(): void {
		this._fadeOutTimeoutId = null;

		const fadeOutInterval = this._fadeOutDelay;
		const onTouchTimeoutBound = this._onFadeOutTimeoutBound;

		const state = this.state;
		if (state.isGesturing || state.isHovered || state.isPressed) {
			this._fadeOutTimeoutId = window.setTimeout(onTouchTimeoutBound, fadeOutInterval);
			return;
		}

		const thumbState = this._thumb.state;
		if (thumbState.isGesturing || thumbState.isHovered || thumbState.isPressed) {
			this._fadeOutTimeoutId = window.setTimeout(onTouchTimeoutBound, fadeOutInterval);
			return;
		}

		const now = Date.now();
		const remainingTime = fadeOutInterval - (now - this._touchedAt);
		if (0 < remainingTime) {
			this._fadeOutTimeoutId = window.setTimeout(onTouchTimeoutBound, remainingTime);
			return;
		}

		if (this.visible) {
			this.visible = false;
			DApplications.update(this);
		}
	}

	protected onThumbStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		if (!newState.isGesturing && !newState.isHovered && !newState.isPressed) {
			if (oldState.isGesturing || oldState.isHovered || oldState.isPressed) {
				this._touchedAt = Date.now();
			}
		}
	}

	protected onStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		super.onStateChange(newState, oldState);

		if (!newState.isGesturing && !newState.isHovered && !newState.isPressed) {
			if (oldState.isGesturing || oldState.isHovered || oldState.isPressed) {
				this._touchedAt = Date.now();
			}
		}
	}

	protected abstract newThumb(options?: DScrollBarThumbOptions): DScrollBarThumb;

	protected getType(): string {
		return "DScrollBar";
	}
}
