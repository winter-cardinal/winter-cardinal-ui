/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuCloseable } from "./d-menu-closeable";

export interface DMenuContextOwner {
	// focus(): void;
}

export interface DMenuContextParent {
	parent: unknown;
}

export class DMenuContext {
	protected _owner: DMenuContextOwner;
	protected _closeables: DMenuCloseable[];

	constructor(owner: DMenuContextOwner) {
		this._owner = owner;
		this._closeables = [];
	}

	protected indexOf(target: unknown): number {
		return this._closeables.indexOf(target as any);
	}

	protected close(index: number): void {
		const closeables = this._closeables;
		const imin = Math.max(0, index);
		for (let i = closeables.length - 1; imin <= i; --i) {
			closeables[i].close();
		}
	}

	add(closeable: DMenuCloseable): void {
		this._closeables.push(closeable);
	}

	trim(closeable: DMenuCloseable | null): void {
		this.close(this.indexOf(closeable) + 1);
	}

	remove(closeable: DMenuCloseable): void {
		const index = this.indexOf(closeable);
		if (0 <= index) {
			this.close(index + 1);
			this._closeables.splice(index, 1);
		}
	}
}
