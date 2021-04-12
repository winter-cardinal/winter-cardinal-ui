/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSetData } from "./d-base-state-set-data";
import { DBaseStateSetDataLike } from "./d-base-state-set-data-like";

export class DBaseStateSetDataImpl implements DBaseStateSetData {
	protected _data: Map<string, unknown>;

	constructor() {
		this._data = new Map<string, unknown>();
	}

	set(key: string, data: unknown): this {
		this._data.set(key, data);
		return this;
	}

	get(key: string): undefined | unknown {
		return this._data.get(key);
	}

	delete(key: string): boolean {
		return this._data.delete(key);
	}

	clear(): this {
		this._data.clear();
		return this;
	}

	each(iteratee: (data: unknown, key: string) => void): this {
		this._data.forEach((data: unknown, key: string): void => {
			iteratee(data, key);
		});
		return this;
	}

	size(): number {
		return this._data.size;
	}

	copy(other: DBaseStateSetData): this {
		if (other instanceof DBaseStateSetDataImpl) {
			const otherData = other._data;
			const thisData = this._data;
			thisData.clear();
			otherData.forEach((data, key): void => {
				thisData.set(key, data);
			});
		}
		return this;
	}

	toArray(): DBaseStateSetDataLike {
		const result: DBaseStateSetDataLike = [];
		this._data.forEach((data, key): void => {
			result.push([data, key]);
		});
		return result;
	}

	toString(): string {
		return JSON.stringify(this.toArray());
	}
}
