/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, IPoint, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import {
	DDiagramCanvasBase,
	DDiagramCanvasBaseOptions,
	DThemeDiagramCanvasBase
} from "./d-diagram-canvas-base";
import { DDiagramCanvasIdMap } from "./d-diagram-canvas-id-map";
import { DDiagramCanvasTagMap } from "./d-diagram-canvas-tag-map";
import { EShape } from "./shape/e-shape";
import { EShapeBase } from "./shape/variant/e-shape-base";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DDiagramCanvasOptions<THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas>
	extends DDiagramCanvasBaseOptions<THEME> {}

export interface DThemeDiagramCanvas extends DThemeDiagramCanvasBase {}

export class DDiagramCanvas<
	THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas,
	OPTIONS extends DDiagramCanvasOptions<THEME> = DDiagramCanvasOptions<THEME>
> extends DDiagramCanvasBase<THEME, OPTIONS> {
	tags: DDiagramCanvasTagMap;
	actionables: EShape[];
	ids: DDiagramCanvasIdMap;

	protected _workGlobal: Point;
	protected _lastOverShape: EShape | null;

	constructor(options: OPTIONS) {
		super(options);
		this.tags = {};
		this.actionables = [];
		this.ids = {};
		this._workGlobal = new Point();
		this._lastOverShape = null;
	}

	initialize(): void {
		const time = Date.now();
		const tags = this.tags;
		const actionables = this.actionables;
		const ids = this.ids;
		const layers = this._layer.children;
		for (let i = 0, imax = layers.length; i < imax; ++i) {
			layers[i].initialize(tags, ids, actionables);
		}
		for (let i = 0, imax = layers.length; i < imax; ++i) {
			const layerChildren = layers[i].children;
			for (let j = 0, jmax = layerChildren.length; j < jmax; ++j) {
				layerChildren[j].update(time);
			}
		}
	}

	hitTestInteractives(global: IPoint): EShape | null {
		const layers = this._layer.children;
		for (let i = layers.length - 1; 0 <= i; --i) {
			const layer = layers[i];
			if (layer.visible) {
				const result = layer.hitTestInteractives(global);
				if (result != null) {
					return result;
				}
			}
		}
		return null;
	}

	onShapeMove(e: interaction.InteractionEvent): boolean {
		const found = this.hitTestInteractives(e.data.global);
		const layer = DApplications.getLayer(this);
		if (found) {
			if (layer) {
				let cursor = found.cursor;
				if (cursor.length <= 0) {
					cursor = "auto";
				}
				const style = layer.view.style;
				if (style.cursor !== cursor) {
					style.cursor = cursor;
				}
			}

			const lastOverShape = this._lastOverShape;
			if (found === lastOverShape) {
				const runtime = lastOverShape.runtime;
				if (runtime) {
					runtime.onMove(lastOverShape, e);
				}
			} else {
				this._lastOverShape = found;

				// Previous
				if (lastOverShape) {
					const previousRuntime = lastOverShape.runtime;
					if (previousRuntime) {
						previousRuntime.onOut(lastOverShape, e);
					}

					// Parents
					let lastOverParent = lastOverShape.parent;
					while (lastOverParent instanceof EShapeBase && lastOverParent !== found) {
						const parentRuntime = lastOverShape.runtime;
						if (parentRuntime) {
							parentRuntime.onOut(lastOverParent, e);
						}
						lastOverParent = lastOverParent.parent;
					}
				}

				// Next
				const runtime = found.runtime;
				if (runtime) {
					runtime.onOver(found, e);
				}
				if (layer) {
					layer.view.title = found.title || "";
				}

				// Parents
				let parent = found.parent;
				while (parent instanceof EShapeBase) {
					const parentRuntime = parent.runtime;
					if (parentRuntime) {
						parentRuntime.onOver(parent, e);
					}
					parent = parent.parent;
				}
			}

			return true;
		} else {
			if (layer) {
				const style = layer.view.style;
				if (style.cursor !== "auto") {
					style.cursor = "auto";
				}
			}

			// Previous
			const lastOverShape = this._lastOverShape;
			this._lastOverShape = null;
			if (lastOverShape) {
				const runtime = lastOverShape.runtime;
				if (runtime) {
					runtime.onOut(lastOverShape, e);
				}

				// Parents
				let lastOverParent = lastOverShape.parent;
				while (lastOverParent instanceof EShapeBase) {
					const parentRuntime = lastOverParent.runtime;
					if (parentRuntime) {
						parentRuntime.onOut(lastOverParent, e);
					}
					lastOverParent = lastOverParent.parent;
				}
			}

			//
			if (layer) {
				layer.view.title = "";
			}

			return false;
		}
	}

	onShapeDown(e: interaction.InteractionEvent): boolean {
		const found = this.hitTestInteractives(e.data.global);
		if (found) {
			const runtime = found.runtime;
			if (runtime) {
				runtime.onDown(found, e);
			}
			return true;
		}
		return false;
	}

	onShapeUp(e: interaction.InteractionEvent): boolean {
		const found = this.hitTestInteractives(e.data.global);
		if (found) {
			const runtime = found.runtime;
			if (runtime) {
				runtime.onUp(found, e);
			}
			return true;
		}
		return false;
	}

	onShapeClick(e: interaction.InteractionEvent): boolean {
		const found = this.hitTestInteractives(e.data.global);
		if (found) {
			let target = found;
			while (true) {
				const runtime = target.runtime;
				if (runtime) {
					runtime.onClick(target, e);
				}
				const parent = target.parent;
				if (parent instanceof EShapeBase) {
					target = parent;
				} else {
					break;
				}
			}
			return true;
		}
		return false;
	}

	onShapeDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean {
		const global = UtilPointerEvent.toGlobal(e, interactionManager, this._workGlobal);
		const found = this.hitTestInteractives(global);
		if (found) {
			let target = found;
			while (true) {
				const runtime = target.runtime;
				if (runtime) {
					runtime.onDblClick(target, e, interactionManager);
				}
				const parent = target.parent;
				if (parent instanceof EShapeBase) {
					target = parent;
				} else {
					break;
				}
			}
			return true;
		}
		return false;
	}

	protected getType(): string {
		return "DDiagramCanvas";
	}
}
