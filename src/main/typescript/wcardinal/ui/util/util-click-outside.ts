/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, Point } from "pixi.js";
import { DBase } from "../d-base";
import { UtilPointerEvent } from "./util-pointer-event";

export type UtilClickOutsideOnClick = (e: InteractionEvent) => void;

export class UtilClickOutside {
	protected static point = new Point();

	static apply(target: DBase, onClick: UtilClickOutsideOnClick): void {
		target.on(UtilPointerEvent.down, (e: InteractionEvent): void => {
			if (e.target === target) {
				const point = this.point;
				point.copyFrom(e.data.global);
				target.toLocal(point, undefined, point, true);
				const x = point.x;
				const y = point.y;
				if (x < 0 || y < 0 || target.width < x || target.height < y) {
					// If dialogs / menus are being rendered on the overlay layer, closing them before
					// the default pointerdown event handler causes the base layer to lose its focus.
					// Therefore, onClick needed to be delayed.
					setTimeout((): void => {
						onClick(e);
					}, 0);
				}
			}
		});
	}
}
