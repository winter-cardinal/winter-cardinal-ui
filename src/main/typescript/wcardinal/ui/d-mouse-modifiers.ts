/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DMouseModifier } from "./d-mouse-modifier";

export type DMouseModifierEvent = WheelEvent | MouseEvent | TouchEvent | interaction.InteractionEvent;

export class DMouseModifiers {
	static from( e: DMouseModifierEvent ): DMouseModifier {
		const oe = ( "data" in e ? e.data.originalEvent : e );
		return ( oe.ctrlKey ? DMouseModifier.CTRL : DMouseModifier.NONE ) |
			( oe.altKey ? DMouseModifier.ALT : DMouseModifier.NONE ) |
			( oe.shiftKey ? DMouseModifier.SHIFT : DMouseModifier.NONE );
	}

	static match( e: DMouseModifierEvent, modifier: DMouseModifier ): boolean {
		if( modifier & DMouseModifier.OR ) {
			return !! (DMouseModifiers.from( e ) & modifier);
		} else {
			return DMouseModifiers.from( e ) === modifier;
		}
	}
}
