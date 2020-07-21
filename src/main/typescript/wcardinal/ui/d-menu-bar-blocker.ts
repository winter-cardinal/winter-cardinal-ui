/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, interaction, Point } from "pixi.js";
import { DMenuBarItem } from "./d-menu-bar-item";
import { Closeable } from "./d-menu-context";
import { UtilPointerEvent } from "./util/util-pointer-event";

export class DMenuBarBlocker extends Container {
	constructor( target: Closeable & Container ) {
		super();
		this.renderable = false;
		this.interactive = true;

		this.on( UtilPointerEvent.down, ( e: interaction.InteractionEvent ): void => {
			if( e.target === this ) {
				target.close();
			}
		});
		this.on( UtilPointerEvent.move, ( e: interaction.InteractionEvent ): void => {
			if( e.target === this ) {
				const global = e.data.global;
				const children = target.children;
				for( let i = 0, imax = children.length; i < imax; ++i ) {
					const child = children[ i ];
					if( child instanceof DMenuBarItem ) {
						child.state.isHovered = child.containsPoint( global );
					}
				}
			}
		});
	}

	containsPoint( global: Point ): boolean {
		return true;
	}
}
