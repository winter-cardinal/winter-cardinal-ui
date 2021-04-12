/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { DDragMode } from "./d-drag-mode";
import { DMouseModifier } from "./d-mouse-modifier";
import { DThemeViewDrag, DViewDrag, DViewDragOptions } from "./d-view-drag";
import { DViewStopper } from "./d-view-stopper";
import { DViewToTarget } from "./d-view-to-target";
import { isString } from "./util/is-string";
import { toEnum } from "./util/to-enum";
import { UtilDrag } from "./util/util-drag";

export class DViewDragImpl implements DViewDrag {
	protected _parent: DBase;
	protected _toTarget: DViewToTarget;
	protected _stopper: DViewStopper;
	protected _dragUtil?: UtilDrag;
	protected _bind: boolean;

	constructor(
		parent: DBase,
		toTarget: DViewToTarget,
		stopper: DViewStopper,
		theme: DThemeViewDrag,
		options: DViewDragOptions | undefined
	) {
		this._parent = parent;
		this._toTarget = toTarget;
		this._stopper = stopper;

		const mode = toEnum(options?.mode ?? theme.getDragMode(), DDragMode);
		const modifier = toEnum(options?.modifier ?? theme.getDragModifier(), DMouseModifier);
		const duration = options?.duration ?? {
			position: theme.getDragDurationPosition(),
			scale: theme.getDragDurationScale()
		};
		const bind = mode === DDragMode.TOUCH;
		this._bind = bind;
		if (mode === DDragMode.ON || mode === DDragMode.TOUCH) {
			this._dragUtil = new UtilDrag({
				target: parent,
				touch: bind,
				modifier,
				checker: options && options.checker,
				easing: {
					duration
				},
				bind,
				on: {
					start: (): void => {
						this._stopper.stop();
					},
					move: (dx: number, dy: number, x: number, y: number, ds: number): void => {
						const target = toTarget(parent);
						if (target != null) {
							// Scale
							const oldScale = target.scale.y;
							const newScale = stopper.toNormalizedScale(oldScale * ds);
							const scaleRatio = newScale / oldScale;

							// Position
							const cx = x - dx;
							const cy = y - dy;
							const position = target.position;
							const newX = (position.x - cx) * scaleRatio + x;
							const newY = (position.y - cy) * scaleRatio + y;

							// Update
							target.scale.set(newScale, newScale);
							target.position.set(newX, newY);
						}
					}
				}
			});
		}
	}

	stop(): void {
		const dragUtil = this._dragUtil;
		if (dragUtil != null) {
			dragUtil.stop();
		}
	}

	onDown(e: interaction.InteractionEvent): void {
		if (!this._bind) {
			const dragUtil = this._dragUtil;
			if (dragUtil) {
				dragUtil.onDown(e);
			}
		}
	}
}
