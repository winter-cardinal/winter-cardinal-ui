/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DCanvas } from "./d-canvas";
import { DCanvasContainerOptions, DThemeCanvasContainer } from "./d-canvas-container";
import { DCanvasContainerViewParent } from "./d-canvas-container-view";
import { DCanvasContainerViewStopper } from "./d-canvas-container-view-stopper";
import { DDragMode } from "./d-drag-mode";
import { DMouseModifier } from "./d-mouse-modifier";
import { UtilDrag } from "./util/util-drag";
import { utilIsString } from "./util/util-is-string";

export class DCanvasContainerViewDrag<
	CANVAS extends DBase = DCanvas,
	THEME extends DThemeCanvasContainer = DThemeCanvasContainer,
	OPTIONS extends DCanvasContainerOptions<CANVAS, THEME> = DCanvasContainerOptions<CANVAS, THEME>
> {
	protected _parent: DCanvasContainerViewParent<CANVAS>;
	protected _stopper: DCanvasContainerViewStopper;
	protected _dragUtil?: UtilDrag;

	constructor(
		parent: DCanvasContainerViewParent<CANVAS>,
		stopper: DCanvasContainerViewStopper,
		theme: THEME,
		options: OPTIONS | undefined
	) {
		this._parent = parent;
		this._stopper = stopper;

		const drag = options && options.drag;
		const mode = ( drag && drag.mode != null ?
			( utilIsString( drag.mode ) ? DDragMode[ drag.mode ] : drag.mode ) :
			theme.getDragMode()
		);
		const modifier = ( drag && drag.modifier != null ?
			( utilIsString( drag.modifier ) ? DMouseModifier[ drag.modifier ] : drag.modifier ) :
			theme.getDragModifier()
		);
		const duration = ( drag && drag.duration != null ?
			drag.duration : {
				position: theme.getDragDurationPosition(),
				scale: theme.getDragDurationScale()
			}
		);
		if( mode === DDragMode.ON || mode === DDragMode.TOUCH ) {
			this._dragUtil = new UtilDrag({
				target: parent,
				touch: mode === DDragMode.TOUCH,
				modifier,
				checker: drag && drag.checker,
				easing: {
					duration
				},
				on: {
					start: (): void => {
						this._stopper.stop();
					},
					move: ( dx: number, dy: number, x: number, y: number, ds: number ): void => {
						const canvas = parent.canvas;
						if( canvas != null ) {
							// Scale
							const oldScale = canvas.scale.y;
							const newScale = stopper.toNormalizedScale( oldScale * ds );
							const scaleRatio = newScale / oldScale;

							// Position
							const cx = x - dx;
							const cy = y - dy;
							const position = canvas.position;
							const newX = (position.x - cx) * scaleRatio + x;
							const newY = (position.y - cy) * scaleRatio + y;

							// Update
							canvas.scale.set( newScale, newScale );
							canvas.position.set( newX, newY );
						}
					}
				}
			});
		}
	}

	stop(): void {
		const dragUtil = this._dragUtil;
		if( dragUtil != null ) {
			dragUtil.stop();
		}
	}
}
