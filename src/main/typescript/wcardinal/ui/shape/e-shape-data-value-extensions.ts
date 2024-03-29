/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDataValueExtension } from "./e-shape-data-value-extension";

export class EShapeDataValueExtensions {
	protected static _data?: EShapeDataValueExtension[];
	protected static _typeToDatum?: Map<number, EShapeDataValueExtension>;
	protected static _idToDatum?: Map<string, EShapeDataValueExtension>;

	static add(extension: EShapeDataValueExtension): void {
		(this._typeToDatum ??= new Map<number, EShapeDataValueExtension>()).set(
			extension.type,
			extension
		);
		(this._idToDatum ??= new Map<string, EShapeDataValueExtension>()).set(
			extension.id,
			extension
		);
		(this._data ??= []).push(extension);
	}

	static get(type: number): EShapeDataValueExtension | undefined {
		const typeToDatum = this._typeToDatum;
		if (typeToDatum != null) {
			return typeToDatum.get(type);
		}
	}

	static getById(id: string): EShapeDataValueExtension | undefined {
		const idToDatum = this._idToDatum;
		if (idToDatum != null) {
			return idToDatum.get(id);
		}
	}

	static each(iteratee: (extension: EShapeDataValueExtension) => void): void {
		const data = this._data;
		if (data != null) {
			for (let i = 0, imax = data.length; i < imax; ++i) {
				iteratee(data[i]);
			}
		}
	}
}
