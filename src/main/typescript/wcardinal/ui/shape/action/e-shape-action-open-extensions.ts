/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionOpenExtension } from "./e-shape-action-open-extension";

export class EShapeActionOpenExtensions {
	protected static _data?: EShapeActionOpenExtension[];
	protected static _typeToDatum?: Map<number, EShapeActionOpenExtension>;

	static add(extension: EShapeActionOpenExtension): void {
		(this._typeToDatum ??= new Map<number, EShapeActionOpenExtension>()).set(
			extension.type,
			extension
		);
		(this._data ??= []).push(extension);
	}

	static get(type: number): EShapeActionOpenExtension | undefined {
		const typeToDatum = this._typeToDatum;
		if (typeToDatum != null) {
			return typeToDatum.get(type);
		}
	}

	static each(iteratee: (extension: EShapeActionOpenExtension) => void): void {
		const data = this._data;
		if (data != null) {
			for (let i = 0, imax = data.length; i < imax; ++i) {
				iteratee(data[i]);
			}
		}
	}
}
