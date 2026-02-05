/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedFill } from "../../d-diagram-serialized";
import { EShapeFill, EShapeFillLike } from "../e-shape-fill";
import { EShapeFillDirection } from "../e-shape-fill-direction";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeFillImplParent } from "./e-shape-fill-impl-parent";

export class EShapeFillImpl implements EShapeFill {
	protected _parent: EShapeFillImplParent;
	protected _enable: boolean;
	protected _color: number;
	protected _alpha: number;
	protected _direction: EShapeFillDirection;
	protected _percent: number;

	constructor(
		parent: EShapeFillImplParent,
		enable: boolean,
		color: number,
		alpha: number,
		direction: EShapeFillDirection,
		percent: number
	) {
		this._parent = parent;
		this._enable = enable;
		this._color = color;
		this._alpha = alpha;
		this._direction = direction;
		this._percent = percent;
	}

	get enable(): boolean {
		return this._enable;
	}

	set enable(enable: boolean) {
		this.set(enable);
	}

	get color(): number {
		return this._color;
	}

	set color(color: number) {
		this.set(undefined, color);
	}

	get alpha(): number {
		return this._alpha;
	}

	set alpha(alpha: number) {
		this.set(undefined, undefined, alpha);
	}

	get direction(): EShapeFillDirection {
		return this._direction;
	}

	set direction(direction: EShapeFillDirection) {
		this.set(undefined, undefined, undefined, direction);
	}

	get percent(): number {
		return this._percent;
	}

	set percent(percent: number) {
		this.set(undefined, undefined, undefined, undefined, percent);
	}

	copy(target?: Partial<EShapeFillLike>): void {
		if (target) {
			this.set(target.enable, target.color, target.alpha, target.direction, target.percent);
		}
	}

	set(
		enable?: boolean,
		color?: number,
		alpha?: number,
		direction?: EShapeFillDirection,
		percent?: number
	): void {
		let isChanged = false;

		if (enable !== undefined && this._enable !== enable) {
			this._enable = enable;
			isChanged = true;
		}

		if (color !== undefined && this._color !== color) {
			this._color = color;
			isChanged = true;
		}

		if (alpha !== undefined && this._alpha !== alpha) {
			this._alpha = alpha;
			isChanged = true;
		}

		if (direction !== undefined && this._direction !== direction) {
			this._direction = direction;
			isChanged = true;
		}

		if (percent !== undefined) {
			percent = Math.max(0, Math.min(1, percent));
			if (this._percent !== percent) {
				this._percent = percent;
				isChanged = true;
			}
		}

		if (isChanged) {
			this._parent.updateUploaded();
		}
	}

	clone(): EShapeFill {
		return new EShapeFillImpl(
			this._parent,
			this._enable,
			this._color,
			this._alpha,
			this._direction,
			this._percent
		);
	}

	toObject(): EShapeFillLike {
		return {
			enable: this._enable,
			color: this._color,
			alpha: this._alpha,
			direction: this._direction,
			percent: this._percent
		};
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const enable = this._enable ? 1 : 0;
		const stringified = `[${enable},${this._color},${this._alpha},${this._direction},${this._percent}]`;
		return manager.addResource(stringified);
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		if (0 <= target && target < resources.length) {
			let parsed = manager.getFill(target);
			if (parsed != null) {
				this.set(!!parsed[0], parsed[1], parsed[2], parsed[3], parsed[4]);
			} else {
				parsed = JSON.parse(resources[target]) as DDiagramSerializedFill;
				manager.setFill(target, parsed);
				this.set(!!parsed[0], parsed[1], parsed[2], parsed[3], parsed[4]);
			}
		}
	}
}
