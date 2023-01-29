/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DDiagramSerializedSnapGrid } from "../d-diagram-serialized";
import { ESnapperResult } from "./e-snapper-result";

export interface ESnapperGridOptions {
	visible?: boolean;
	enable?: boolean;
	size?: number;
}
export interface EThemeSnapperGrid {
	isSnapperGridVisible(): boolean;
	isSnapperGridEnabled(): boolean;
	getSnapperGridSize(): number;
}

export class ESnapperGrid extends utils.EventEmitter {
	protected _isEnabled: boolean;
	protected _isEnabledDefault: boolean;
	protected _size: number;
	protected _sizeDefault: number;
	protected _isVisible: boolean;
	protected _isVisibleDefault: boolean;

	constructor(theme: EThemeSnapperGrid, options?: ESnapperGridOptions) {
		super();
		this._isVisibleDefault = options?.visible ?? theme.isSnapperGridVisible();
		this._isVisible = this._isVisibleDefault;
		this._isEnabledDefault = options?.enable ?? theme.isSnapperGridEnabled();
		this._isEnabled = this._isEnabledDefault;
		this._sizeDefault = options?.size ?? theme.getSnapperGridSize();
		this._size = this._sizeDefault;
	}

	get visible(): boolean {
		return this._isVisible;
	}

	set visible(visible: boolean) {
		if (this._isVisible !== visible) {
			this._isVisible = visible;
			this.emit("change", this);
		}
	}

	get enable(): boolean {
		return this._isEnabled;
	}

	set enable(enable: boolean) {
		if (this._isEnabled !== enable) {
			this._isEnabled = enable;
			this.emit("change", this);
		}
	}

	get size(): number {
		return this._size;
	}

	set size(size: number) {
		if (this._size !== size) {
			this._size = size;
			this.emit("change", size, this);
		}
	}

	snap(value: number, result: ESnapperResult): void {
		if (this._isEnabled) {
			const size = this._size;
			result.set(value, Math.round(value / size) * size);
		}
	}

	reset(): void {
		this._isVisible = this._isVisibleDefault;
		this._isEnabled = this._isEnabledDefault;
		this._size = this._sizeDefault;
		this.emit("change", this);
	}

	serialize(): DDiagramSerializedSnapGrid {
		return [this._isEnabled ? 1 : 0, this._isVisible ? 1 : 0, this._size];
	}

	deserialize(serialized: DDiagramSerializedSnapGrid): void {
		this.enable = !!serialized[0];
		if (2 in serialized) {
			this.visible = !!serialized[1];
			this.size = (serialized as any)[2];
		} else {
			this.visible = false;
			this.size = serialized[1];
		}
	}
}
