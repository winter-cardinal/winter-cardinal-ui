/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager, Renderer } from "pixi.js";
import { DDiagramBase, DDiagramBaseOptions, DThemeDiagramBase } from "./d-diagram-base";
import { DDiagramCanvas, DDiagramCanvasOptions } from "./d-diagram-canvas";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { DDiagramShape } from "./d-diagram-shape";
import { DDiagramData, DDiagramDataOptions } from "./d-diagram-data";
import { EShape } from "./shape/e-shape";
import { DDiagramDataImpl } from "./d-diagram-data-impl";
import { DDiagramDataMapper } from "./d-diagram-data-mapper";
import { DDiagramController } from "./d-diagram-controller";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { EShapeResourceManagerDeserializationMode } from "./shape/e-shape-resource-manager-deserialization-mode";
import { DApplications } from "./d-applications";

/**
 * {@link DDiagram} options.
 */
export interface DDiagramOptions<THEME extends DThemeDiagram = DThemeDiagram, EMITTER = any>
	extends DDiagramBaseOptions<
		DDiagramCanvas,
		DDiagramCanvasOptions,
		DDiagramController,
		THEME,
		EMITTER
	> {
	/** @deprecated in favor of {@link data} */
	tag?: DDiagramDataOptions;
	data?: DDiagramDataOptions;
}

/**
 * {@link DDiagram} theme.
 */
export interface DThemeDiagram extends DThemeDiagramBase {}

export class DDiagram<
	THEME extends DThemeDiagram = DThemeDiagram,
	OPTIONS extends DDiagramOptions<THEME> = DDiagramOptions<THEME>
> extends DDiagramBase<DDiagramCanvas, DDiagramCanvasOptions, DDiagramController, THEME, OPTIONS> {
	/** @deprecated in favor of {@link data} */
	tag: DDiagramData;
	data: DDiagramData;
	shape: DDiagramShape;

	protected _rendererBound?: Renderer;
	protected _onPrerenderBound?: (renderer: Renderer) => void;

	constructor(options?: OPTIONS) {
		super(options);

		// Event handlers
		this.on(UtilPointerEvent.move, (e: InteractionEvent): void => {
			this.onShapeMove(e);
		});
		this.on(UtilPointerEvent.up, (e: InteractionEvent): void => {
			this.onShapeUp(e);
		});
		this.on(UtilPointerEvent.upoutside, (e: InteractionEvent): void => {
			this.onShapeCancel(e);
		});
		this.on(UtilPointerEvent.cancel, (e: InteractionEvent): void => {
			this.onShapeCancel(e);
		});
		this.on(UtilPointerEvent.tap, (e: InteractionEvent): void => {
			this.onShapeClick(e);
		});
		this.on(UtilPointerEvent.righttap, (e: InteractionEvent): void => {
			this.onShapeRightClick(e);
		});
		this.on(UtilPointerEvent.rightdown, (e: InteractionEvent): void => {
			this.onShapeRightDown(e);
		});
		this.on(UtilPointerEvent.rightup, (e: InteractionEvent): void => {
			this.onShapeRightUp(e);
		});
		this.on(UtilPointerEvent.rightupoutside, (e: InteractionEvent): void => {
			this.onShapeRightCancel(e);
		});

		// Data
		const data = new DDiagramDataImpl(this, options && (options.data || options.tag));
		this.data = data;
		this.tag = data;

		// Shape
		this.shape = new DDiagramShape(this);
	}

	protected initLayer(
		canvas: DDiagramCanvas,
		shapes: EShape[],
		mapper?: DDiagramDataMapper | null
	): DDiagramCanvas {
		return super.initLayer(canvas, shapes, mapper || this.data.mapper);
	}

	protected toMode(options?: OPTIONS): EShapeResourceManagerDeserializationMode {
		return EShapeResourceManagerDeserializationMode.VIEWER;
	}

	protected newCanvas(serialized: DDiagramSerialized): DDiagramCanvas {
		return new DDiagramCanvas(this.toCanvasOptions(serialized));
	}

	protected toCanvasOptions(serialized: DDiagramSerialized): DDiagramCanvasOptions {
		return this.toCanvasBaseOptions(serialized);
	}

	protected onDown(e: InteractionEvent): void {
		const canvas = this.canvas;
		if (canvas) {
			const target = e.target;
			if (target === this || target === canvas) {
				super.onDown(e, canvas.onShapeDown(e));
			} else {
				super.onDown(e);
			}
		} else {
			super.onDown(e);
		}
	}

	protected onShapeMove(e: InteractionEvent): void {
		const canvas = this.canvas;
		if (canvas) {
			const target = e.target;
			if (target === this || target === canvas) {
				canvas.onShapeMove(e);
			}
		}
	}

	protected onShapeUp(e: InteractionEvent): void {
		const canvas = this.canvas;
		if (canvas) {
			const target = e.target;
			if (target === this || target === canvas) {
				canvas.onShapeUp(e);
			}
		}
	}

	protected onShapeCancel(e: InteractionEvent): void {
		const canvas = this.canvas;
		if (canvas) {
			const target = e.target;
			if (target === this || target === canvas) {
				canvas.onShapeCancel(e);
			}
		}
	}

	protected onShapeClick(e: InteractionEvent): void {
		const canvas = this.canvas;
		if (canvas) {
			const target = e.target;
			if (target === this || target === canvas) {
				canvas.onShapeClick(e);
			}
		}
	}

	protected onShapeRightClick(e: InteractionEvent): void {
		const canvas = this.canvas;
		if (canvas) {
			const target = e.target;
			if (target === this || target === canvas) {
				canvas.onShapeRightClick(e);
			}
		}
	}

	protected onShapeRightDown(e: InteractionEvent): void {
		const canvas = this.canvas;
		if (canvas) {
			const target = e.target;
			if (target === this || target === canvas) {
				canvas.onShapeRightDown(e);
			}
		}
	}

	protected onShapeRightUp(e: InteractionEvent): void {
		const canvas = this.canvas;
		if (canvas) {
			const target = e.target;
			if (target === this || target === canvas) {
				canvas.onShapeRightUp(e);
			}
		}
	}

	protected onShapeRightCancel(e: InteractionEvent): void {
		const canvas = this.canvas;
		if (canvas) {
			const target = e.target;
			if (target === this || target === canvas) {
				canvas.onShapeRightCancel(e);
			}
		}
	}

	onDblClick(e: MouseEvent | TouchEvent, manager: InteractionManager): boolean {
		const canvas = this.canvas;
		if (canvas) {
			return super.onDblClick(e, manager, canvas.onShapeDblClick(e, manager));
		} else {
			return super.onDblClick(e, manager);
		}
	}

	protected onPrerender(renderer: Renderer): void {
		const canvas = this._canvas;
		if (canvas) {
			canvas.onRender(renderer);
		}
	}

	render(newRenderer: Renderer): void {
		const oldRenderer = this._rendererBound;
		if (oldRenderer !== newRenderer) {
			const onPrerenderBound = (this._onPrerenderBound ??= (r: Renderer): void => {
				this.onPrerender(r);
			});

			if (oldRenderer != null) {
				oldRenderer.off("prerender", onPrerenderBound);
			}

			this._rendererBound = newRenderer;
			if (newRenderer != null) {
				newRenderer.on("prerender", onPrerenderBound);
				const canvas = this._canvas;
				if (canvas != null) {
					// Request the update to call `canvas.onRender(Renderer)`
					DApplications.update(this);
				}
			}
		}
		super.render(newRenderer);
	}

	override destroy(): void {
		// Renderer
		const renderer = this._rendererBound;
		if (renderer != null) {
			this._rendererBound = undefined;

			const onPrerenderBound = this._onPrerenderBound;
			if (onPrerenderBound != null) {
				renderer.off("prerender", onPrerenderBound);
			}
		}

		super.destroy();
	}

	protected getType(): string {
		return "DDiagram";
	}
}
