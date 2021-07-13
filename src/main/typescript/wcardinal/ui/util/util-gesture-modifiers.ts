/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { UtilGestureModifier } from "./util-gesture-modifier";

export type UtilGestureModifierEvent =
	| WheelEvent
	| MouseEvent
	| TouchEvent
	| interaction.InteractionEvent;

export class UtilGestureModifiers {
	static from(e: UtilGestureModifierEvent): UtilGestureModifier {
		const oe = "data" in e ? e.data.originalEvent : e;
		return (
			(oe.ctrlKey ? UtilGestureModifier.CTRL : UtilGestureModifier.NONE) |
			(oe.altKey ? UtilGestureModifier.ALT : UtilGestureModifier.NONE) |
			(oe.shiftKey ? UtilGestureModifier.SHIFT : UtilGestureModifier.NONE)
		);
	}

	static match(e: UtilGestureModifierEvent, modifier: UtilGestureModifier): boolean {
		if (modifier & UtilGestureModifier.OR) {
			return !!(UtilGestureModifiers.from(e) & modifier);
		} else {
			return UtilGestureModifiers.from(e) === modifier;
		}
	}
}
