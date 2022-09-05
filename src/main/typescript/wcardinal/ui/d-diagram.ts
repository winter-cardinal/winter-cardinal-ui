/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Renderer } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;
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

	constructor(options?: OPTIONS) {
		super(options);

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

		//
		const data = new DDiagramDataImpl(this, options && (options.data || options.tag));
		this.data = data;
		this.tag = data;
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
		super.onDown(e, this.canvas?.onShapeDown(e));
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

	onDblClick(e: MouseEvent | TouchEvent, interactionManager: InteractionManager): boolean {
		return super.onDblClick(
			e,
			interactionManager,
			this.canvas?.onShapeDblClick(e, interactionManager)
		);
	}

	render(renderer: Renderer): void {
		this.shape.onRender(renderer);
		super.render(renderer);
	}

	protected getType(): string {
		return "DDiagram";
	}
}
