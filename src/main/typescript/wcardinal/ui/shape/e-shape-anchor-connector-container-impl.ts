/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAnchorConnectorContainer } from "./e-shape-anchor-connector-container";
import { EShapeConnector } from "./variant/e-shape-connector";

export class EShapeAnchorConnectorContainerImpl implements EShapeAnchorConnectorContainer {
	protected _list: EShapeConnector[];

	constructor() {
		this._list = [];
	}

	add(target: EShapeConnector, at?: number): boolean {
		const list = this._list;
		if (at != null) {
			if (0 <= at && at < list.length) {
				list.splice(at, 0, target);
				return true;
			} else if (at === list.length) {
				list.push(target);
				return true;
			} else {
				return false;
			}
		} else {
			list.push(target);
			return true;
		}
	}

	get(index: number): EShapeConnector | null {
		const list = this._list;
		if (0 <= index && index < list.length) {
			return list[index];
		}
		return null;
	}

	size(): number {
		return this._list.length;
	}

	remove(index: number): EShapeConnector | null {
		const list = this._list;
		if (0 <= index && index < list.length) {
			return list.splice(index, 1)[0];
		}
		return null;
	}

	clear(): boolean {
		const list = this._list;
		if (0 < list.length) {
			list.length = 0;
			return true;
		}
		return false;
	}

	update(): void {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			const connector = list[i];
			//
		}
	}
}
