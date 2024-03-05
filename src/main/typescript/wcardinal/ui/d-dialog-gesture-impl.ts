/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, Rectangle } from "pixi.js";
import { DApplicationLayerLike } from "./d-application-layer-like";
import { DBase } from "./d-base";
import {
	DDialogGesture,
	DDialogGestureConstraint,
	DDialogGestureOptions,
	DDialogGestureParent
} from "./d-dialog-gesture";
import { DDialogGestureMode } from "./d-dialog-gesture-mode";
import { toEnum } from "./util/to-enum";
import { UtilGesture } from "./util/util-gesture";

export class DDialogGestureImpl<PARENT extends DDialogGestureParent>
	implements DDialogGesture<PARENT>
{
	protected static WORK_BOUNDS?: Rectangle;

	protected _parent: PARENT;
	protected _mode: DDialogGestureMode;
	protected _options?: DDialogGestureOptions;

	protected _isEnabled: boolean;

	protected _isDirty: boolean;
	protected _constraint?: DDialogGestureConstraint;
	protected _util?: UtilGesture<PARENT>;

	constructor(parent: PARENT, options: DDialogGestureOptions) {
		this._parent = parent;
		this._options = options;
		if (options.enable) {
			this._util = this.newUtil();
		}
		this._mode = toEnum(options.mode ?? DDialogGestureMode.DIRTY, DDialogGestureMode);
		this._isEnabled = true;
		this._isDirty = false;
	}

	get parent(): PARENT {
		return this._parent;
	}

	get mode(): DDialogGestureMode {
		return this._mode;
	}

	set mode(mode: DDialogGestureMode) {
		this._mode = mode;
	}

	get constraint(): DDialogGestureConstraint {
		let result = this._constraint;
		if (result == null) {
			result = this._options?.constraint ?? this.newConstraint();
			this._constraint = result;
		}
		return result;
	}

	set constraint(constraint: DDialogGestureConstraint) {
		this._constraint = constraint;
	}

	protected newConstraint(): DDialogGestureConstraint {
		return (target, layer, x, y): void => {
			this.toConstrained(target, layer, x, y);
		};
	}

	isDirty(): boolean {
		return this._isDirty;
	}

	isClean(): boolean {
		return !this._isDirty;
	}

	toClean(): void {
		if (this._isDirty) {
			this._isDirty = false;
		}
	}

	protected newUtil(): UtilGesture<PARENT> {
		const p = new Point();
		const parent = this._parent;
		const position = parent.position;
		return new UtilGesture<PARENT>({
			bind: parent,
			checker: {
				start: (e): boolean => {
					// Are children clicked?
					if (e.target !== parent) {
						return false;
					}

					// Is clicked outside?
					p.copyFrom(e.data.global);
					parent.toLocal(p, undefined, p, true);
					const x = p.x;
					const y = p.y;
					if (x < 0 || y < 0 || parent.width < x || parent.height < y) {
						return false;
					}

					// Ok
					return true;
				}
			},
			on: {
				start: (): void => {
					p.copyFrom(position);
				},
				move: (target: unknown, dx: number, dy: number): void => {
					p.set(p.x + dx, p.y + dy);
					if (!this._isDirty) {
						this._isDirty = true;
						parent.setX(position.x);
						parent.setY(position.y);
					}
					const layer = parent.layer;
					if (layer != null) {
						this.constraint(parent, layer, p.x, p.y);
					}
				}
			}
		});
	}

	protected toConstrained(
		target: DBase,
		layer: DApplicationLayerLike,
		x: number,
		y: number
	): void {
		const position = target.position;
		if (layer) {
			const bounds = target.getBounds(
				false,
				(DDialogGestureImpl.WORK_BOUNDS ??= new Rectangle())
			);
			const obx = bounds.x + x - position.x;
			const oby = bounds.y + y - position.y;
			const nbx = Math.min(Math.max(0, obx), layer.width - bounds.width);
			const nby = Math.min(Math.max(0, oby), layer.height - bounds.height);
			position.set(x + nbx - obx, y + nby - oby);
		} else {
			position.set(x, y);
		}
	}
}
