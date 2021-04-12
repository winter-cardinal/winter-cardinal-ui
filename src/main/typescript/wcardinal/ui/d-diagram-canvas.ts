/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
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
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DDiagramCanvasOptions<THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas>
	extends DDiagramCanvasBaseOptions<THEME> {}

export interface DThemeDiagramCanvas extends DThemeDiagramCanvasBase {}

export class DDiagramCanvas<
	THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas,
	OPTIONS extends DDiagramCanvasOptions<THEME> = DDiagramCanvasOptions<THEME>
> extends DDiagramCanvasBase<THEME, OPTIONS> {
	tags: DDiagramCanvasTagMap;
	interactives: EShape[];
	actionables: EShape[];
	ids: DDiagramCanvasIdMap;

	protected _workLocal: Point;
	protected _workGlobal: Point;
	protected _lastOverShape: EShape | null;

	constructor(options: OPTIONS) {
		super(options);
		this.tags = {};
		this.interactives = [];
		this.actionables = [];
		this.ids = {};
		this._workLocal = new Point();
		this._workGlobal = new Point();
		this._lastOverShape = null;
	}

	initialize(): void {
		const time = Date.now();
		const tags = this.tags;
		const interactives = this.interactives;
		const actionables = this.actionables;
		const ids = this.ids;
		const layers = this._layer.children;

		for (let i = 0, imax = layers.length; i < imax; ++i) {
			this.initializeShapes(layers[i].children, tags, interactives, actionables, ids);
		}

		for (let i = 0, imax = layers.length; i < imax; ++i) {
			this.updateShapes(layers[i].children, time);
		}

		this.initializeFocus();
	}

	protected initializeFocus(): void {
		const layer = DApplications.getLayer(this);
		if (layer) {
			const focusController = layer.getFocusController();
			const focusable = focusController.find(this, false, true, true);
			if (focusable) {
				focusController.focus(focusable);
			}
		}
	}

	protected initializeShapes(
		shapes: EShape[],
		tags: DDiagramCanvasTagMap,
		interactives: EShape[],
		actionables: EShape[],
		ids: DDiagramCanvasIdMap
	): void {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];

			// Tag mappings
			const tag = shape.tag;
			for (let j = 0, jmax = tag.size(); j < jmax; ++j) {
				const value = tag.get(j);
				if (value) {
					const valueId = value.id;
					if (0 < valueId.length) {
						let values = tags[valueId];
						if (values == null) {
							values = [];
							tags[valueId] = values;
						}
						values.push(value);
					}
				}
			}

			// Id mappings
			const shapeId = shape.id;
			if (0 < shapeId.length) {
				const mapping: EShape[] | undefined = ids[shapeId];
				if (mapping == null) {
					ids[shapeId] = [shape];
				} else {
					mapping.push(shape);
				}
			}

			// Interactives
			const runtime = shape.runtime;
			if (shape.interactive || 0 < shape.cursor.length || (runtime && runtime.interactive)) {
				interactives.push(shape);
			}

			// Actionables
			if (runtime && 0 < runtime.actions.length) {
				actionables.push(shape);
			}

			// Shortcuts
			const shortcut = shape.shortcut;
			if (runtime && shortcut != null) {
				UtilKeyboardEvent.on(this, shortcut, (e: KeyboardEvent): void => {
					runtime.onClick(shape, e);
				});
			}

			// Children
			const children = shape.children;
			if (0 < children.length) {
				this.initializeShapes(children, tags, interactives, actionables, ids);
			}
		}
	}

	protected updateShapes(shapes: EShape[], time: number): void {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			shapes[i].update(time);
		}
	}

	onShapeMove(e: interaction.InteractionEvent): boolean {
		const global = e.data.global;
		const local = this._workLocal;
		const interactives = this.interactives;
		let found: EShape | null = null;
		for (let i = interactives.length - 1; 0 <= i; --i) {
			const interactive = interactives[i];
			if (interactive.visible) {
				interactive.toLocal(global, undefined, local);
				if (interactive.contains(local)) {
					found = interactive;
					break;
				}
			}
		}

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
		const interactives = this.interactives;
		const global = e.data.global;
		const local = this._workLocal;
		for (let i = interactives.length - 1; 0 <= i; --i) {
			const interactive = interactives[i];
			if (interactive.visible) {
				interactive.toLocal(global, undefined, local);
				if (interactive.contains(local)) {
					const runtime = interactive.runtime;
					if (runtime) {
						runtime.onDown(interactive, e);
					}
					return true;
				}
			}
		}
		return false;
	}

	onShapeUp(e: interaction.InteractionEvent): boolean {
		const interactives = this.interactives;
		const global = e.data.global;
		const local = this._workLocal;
		for (let i = interactives.length - 1; 0 <= i; --i) {
			const interactive = interactives[i];
			if (interactive.visible) {
				interactive.toLocal(global, undefined, local);
				if (interactive.contains(local)) {
					const runtime = interactive.runtime;
					if (runtime) {
						runtime.onUp(interactive, e);
					}
					return true;
				}
			}
		}
		return false;
	}

	onShapeClick(e: interaction.InteractionEvent): boolean {
		const interactives = this.interactives;
		const global = e.data.global;
		const local = this._workLocal;
		for (let i = interactives.length - 1; 0 <= i; --i) {
			const interactive = interactives[i];
			if (interactive.visible) {
				interactive.toLocal(global, undefined, local);
				if (interactive.contains(local)) {
					let target: EShape = interactive;
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
			}
		}
		return false;
	}

	onShapeDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean {
		const interactives = this.interactives;
		const global = UtilPointerEvent.toGlobal(e, interactionManager, this._workGlobal);
		const local = this._workLocal;
		for (let i = interactives.length - 1; 0 <= i; --i) {
			const interactive = interactives[i];
			if (interactive.visible) {
				interactive.toLocal(global, undefined, local);
				if (interactive.contains(local)) {
					let target: EShape = interactive;
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
			}
		}
		return false;
	}

	protected getType(): string {
		return "DDiagramCanvas";
	}
}
