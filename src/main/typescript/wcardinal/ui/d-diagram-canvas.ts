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
import { EShapeContainer } from "./shape";
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
	protected static WORK_DBLCLICK?: Point;
	tags: DDiagramCanvasTagMap;
	actionables: EShape[];
	ids: DDiagramCanvasIdMap;

	protected _overed?: EShape | null;
	protected _downed?: EShape | null;
	protected _downeds: Set<EShape>;

	constructor(options: OPTIONS) {
		super(options);
		this.tags = {};
		this.actionables = [];
		this.ids = {};
		this._downeds = new Set<EShape>();
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
		if (layer) {
			const view = layer.view;

			// Cursor
			const cursor = this.toShapeCursor(found);
			const style = view.style;
			if (style.cursor !== cursor) {
				style.cursor = cursor;
			}

			// TItle
			const title = this.toShapeTitle(found);
			if (view.title !== title) {
				view.title = title;
			}
		}

		const overed = this._overed;
		this._overed = found;
		if (found === overed) {
			if (found != null) {
				const runtime = found.runtime;
				if (runtime) {
					runtime.onMove(found, e);
				}
			}
		} else {
			this.onShapeOut(e, overed, found);
			this.onShapeOver(e, found);
		}
		return found != null;
	}

	protected toShapeCursor(target: EShape | null): string {
		if (target != null) {
			const result = target.cursor;
			if (0 < result.length) {
				return result;
			}
		}
		return "auto";
	}

	protected toShapeTitle(target: EShape | null): string {
		if (target != null) {
			return target.title || "";
		}
		return "";
	}

	protected onShapeOut(
		e: interaction.InteractionEvent,
		target?: EShape | EShapeContainer | null,
		except?: EShape | null
	): void {
		while (target != null && target !== except && target instanceof EShapeBase) {
			const runtime = target.runtime;
			if (runtime) {
				runtime.onOut(target, e);
			}
			target = target.parent;
		}
	}

	protected onShapeOver(
		e: interaction.InteractionEvent,
		target?: EShape | EShapeContainer | null,
		except?: EShape | null
	): void {
		while (target != null && target !== except && target instanceof EShapeBase) {
			const runtime = target.runtime;
			if (runtime) {
				runtime.onOver(target, e);
			}
			target = target.parent;
		}
	}

	onShapeDown(e: interaction.InteractionEvent): boolean {
		const found = this.hitTestInteractives(e.data.global);
		this._downed = found;
		if (found) {
			this._downeds.add(found);
			let target = found;
			while (true) {
				const runtime = target.runtime;
				if (runtime) {
					runtime.onDown(target, e);
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

	onShapeUp(e: interaction.InteractionEvent): boolean {
		const downeds = this._downeds;
		const found = this.hitTestInteractives(e.data.global);
		if (found) {
			downeds.delete(found);
			let target = found;
			while (true) {
				const runtime = target.runtime;
				if (runtime) {
					runtime.onUp(target, e);
				}
				const parent = target.parent;
				if (parent instanceof EShapeBase) {
					target = parent;
				} else {
					break;
				}
			}
		}
		this.onShapeCancel(e);
		return found != null;
	}

	onShapeCancel(e: interaction.InteractionEvent): boolean {
		const downeds = this._downeds;
		if (0 < downeds.size) {
			downeds.forEach((downed: EShape): void => {
				let target = downed;
				while (true) {
					const runtime = target.runtime;
					if (runtime) {
						runtime.onUpOutside(target, e);
					}
					const parent = target.parent;
					if (parent instanceof EShapeBase) {
						target = parent;
					} else {
						break;
					}
				}
			});
			downeds.clear();
			return true;
		}
		return false;
	}

	onShapeClick(e: interaction.InteractionEvent): boolean {
		const found = this.hitTestInteractives(e.data.global);
		if (found && this._downed === found) {
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
		const global = (DDiagramCanvas.WORK_DBLCLICK ??= new Point());
		UtilPointerEvent.toGlobal(e, interactionManager, global);
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
