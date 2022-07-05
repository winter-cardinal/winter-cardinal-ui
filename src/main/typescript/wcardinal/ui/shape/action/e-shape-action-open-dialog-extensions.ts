/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionOpenDialogExtension } from "./e-shape-action-open-dialog-extension";

export class EShapeActionOpenDialogExtensions {
	protected static _data?: EShapeActionOpenDialogExtension[];
	protected static _typeToDatum?: Map<number, EShapeActionOpenDialogExtension>;

	static add(extension: EShapeActionOpenDialogExtension): void {
		(this._typeToDatum ??= new Map<number, EShapeActionOpenDialogExtension>()).set(
			extension.type,
			extension
		);
		(this._data ??= []).push(extension);
	}

	static get(type: number): EShapeActionOpenDialogExtension | undefined {
		const typeToDatum = this._typeToDatum;
		if (typeToDatum != null) {
			return typeToDatum.get(type);
		}
	}

	static each(iteratee: (extension: EShapeActionOpenDialogExtension) => void): void {
		const data = this._data;
		if (data != null) {
			for (let i = 0, imax = data.length; i < imax; ++i) {
				iteratee(data[i]);
			}
		}
	}
}
