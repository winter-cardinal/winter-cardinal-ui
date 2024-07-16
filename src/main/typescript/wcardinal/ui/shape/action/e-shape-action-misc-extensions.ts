/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionMiscExtension } from "./e-shape-action-misc-extension";

export class EShapeActionMiscExtensions {
	protected static _data?: EShapeActionMiscExtension[];
	protected static _typeToDatum?: Map<number, EShapeActionMiscExtension>;

	static add(extension: EShapeActionMiscExtension): void {
		(this._typeToDatum ??= new Map<number, EShapeActionMiscExtension>()).set(
			extension.type,
			extension
		);
		(this._data ??= []).push(extension);
	}

	static get(type: number): EShapeActionMiscExtension | undefined {
		const typeToDatum = this._typeToDatum;
		if (typeToDatum != null) {
			return typeToDatum.get(type);
		}
	}

	static each(iteratee: (extension: EShapeActionMiscExtension) => void): void {
		const data = this._data;
		if (data != null) {
			for (let i = 0, imax = data.length; i < imax; ++i) {
				iteratee(data[i]);
			}
		}
	}
}
