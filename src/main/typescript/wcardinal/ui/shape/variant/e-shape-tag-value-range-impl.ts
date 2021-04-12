/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import {
	EShapeTagValueRange,
	EShapeTagValueRangeLike,
	EShapeTagValueRangeParent,
	EShapeTagValueRangeType
} from "../e-shape-tag-value-range";

export class EShapeTagValueRangeImpl implements EShapeTagValueRange {
	protected _type: EShapeTagValueRangeType;
	protected _from: number;
	protected _to: number;
	parent?: EShapeTagValueRangeParent;

	constructor() {
		this._type = EShapeTagValueRangeType.NONE;
		this._from = 0;
		this._to = 1;
	}

	get type(): EShapeTagValueRangeType {
		return this._type;
	}

	set type(type: EShapeTagValueRangeType) {
		if (this._type !== type) {
			this._type = type;
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}
	}

	get from(): number {
		return this._from;
	}

	set from(from: number) {
		if (this._from !== from) {
			this._from = from;
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}
	}

	get to(): number {
		return this._to;
	}

	set to(to: number) {
		if (this._to !== to) {
			this._to = to;
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}
	}

	set(from?: number | null, to?: number | null): boolean {
		let result = false;
		if (from !== undefined && to !== undefined) {
			if (from !== null && to !== null) {
				const type = this._type | EShapeTagValueRangeType.FROM | EShapeTagValueRangeType.TO;
				if (this._type !== type || this._from !== from || this._to !== to) {
					this._type = type;
					this._from = from;
					this._to = to;
					result = true;
				}
			} else if (from !== null) {
				const type =
					(this._type | EShapeTagValueRangeType.FROM) & ~EShapeTagValueRangeType.TO;
				if (this._type !== type || this._from !== from) {
					this._type = type;
					this._from = from;
					result = true;
				}
			} else if (to !== null) {
				const type =
					(this._type | EShapeTagValueRangeType.TO) & ~EShapeTagValueRangeType.FROM;
				if (this._type !== type || this._from !== from) {
					this._type = type;
					this._to = to;
					result = true;
				}
			} else {
				const type =
					this._type & ~(EShapeTagValueRangeType.TO | EShapeTagValueRangeType.FROM);
				if (this._type !== type) {
					this._type = type;
					result = true;
				}
			}
		} else if (from !== undefined) {
			if (from !== null) {
				const type = this._type | EShapeTagValueRangeType.FROM;
				if (this._type !== type || this._from !== from) {
					this._type = type;
					this._from = from;
					result = true;
				}
			} else {
				const type = this._type & ~EShapeTagValueRangeType.FROM;
				if (this._type !== type) {
					this._type = type;
					result = true;
				}
			}
		} else if (to !== undefined) {
			if (to !== null) {
				const type = this._type | EShapeTagValueRangeType.TO;
				if (this._type !== type || this._to !== to) {
					this._type = type;
					this._to = to;
					result = true;
				}
			} else {
				const type = this._type & ~EShapeTagValueRangeType.TO;
				if (this._type !== type) {
					this._type = type;
					result = true;
				}
			}
		}

		if (result) {
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}

		return result;
	}

	normalize(value: number): number {
		const type = this._type;
		const from = this._from;
		const to = this._to;
		switch (type) {
			case EShapeTagValueRangeType.FROM_TO:
				return (value - from) / (to - from);
			case EShapeTagValueRangeType.FROM:
				return value - from;
			case EShapeTagValueRangeType.TO:
				return to - value;
			case EShapeTagValueRangeType.NONE:
			default:
				return value;
		}
	}

	isEquals(target: EShapeTagValueRangeLike): boolean {
		return this._type === target.type && this._from === target.from && this._to === target.to;
	}

	copy(target: EShapeTagValueRangeLike): this {
		return this.copy_(target.type, target.from, target.to);
	}

	protected copy_(type: EShapeTagValueRangeType, from: number, to: number): this {
		let isChanged = false;

		if (this._type !== type) {
			this._type = type;
			isChanged = true;
		}

		if (this._from !== from) {
			this._from = from;
			isChanged = true;
		}

		if (this._to !== to) {
			this._to = to;
			isChanged = true;
		}

		if (isChanged) {
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}

		return this;
	}

	toObject(): EShapeTagValueRangeLike {
		return {
			type: this.type,
			from: this.from,
			to: this.to
		};
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const serialized = `[${this._type},${this._from},${this._to}]`;
		return manager.addResource(serialized);
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		if (0 <= target && target < resources.length) {
			const parsed = manager.getRange(target);
			if (parsed != null) {
				this.copy_(parsed[0], parsed[1], parsed[2]);
			} else {
				const deserialized = JSON.parse(resources[target]);
				manager.setRange(target, deserialized);
				this.copy_(deserialized[0], deserialized[1], deserialized[2]);
			}
		}
	}
}
