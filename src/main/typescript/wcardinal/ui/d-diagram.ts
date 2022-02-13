/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Renderer } from "pixi.js";
import {
	DDiagramBase,
	DDiagramBaseController,
	DDiagramBaseOptions,
	DDiagramBasePieceController,
	DThemeDiagramBase
} from "./d-diagram-base";
import { DDiagramCanvas, DDiagramCanvasOptions } from "./d-diagram-canvas";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { DDiagramShape } from "./d-diagram-shape";
import { DDiagramData, DDiagramDataMapper, DDiagramDataOptions } from "./d-diagram-data";
import { EShapeActionRuntime } from "./shape/action/e-shape-action-runtime";
import { EShapeActionRuntimeOpen } from "./shape/action/e-shape-action-runtime-open";
import { EShapeActionValue } from "./shape/action/e-shape-action-value";
import { EShape } from "./shape/e-shape";
import { EShapeRuntime } from "./shape/e-shape-runtime";
import { EShapeRuntimes } from "./shape/e-shape-runtimes";
import { EShapeType } from "./shape/e-shape-type";
import { UtilPointerEvent } from "./util/util-pointer-event";

/**
 * {@link DDiagram} piece controller.
 */
export interface DDiagramPieceController extends DDiagramBasePieceController {}

/**
 * {@link DDiagram} controller.
 */
export interface DDiagramController extends DDiagramBaseController {}

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

		this.on(UtilPointerEvent.move, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeMove(e);
			}
		});

		this.on(UtilPointerEvent.up, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeUp(e);
			}
		});

		this.on(UtilPointerEvent.upoutside, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeCancel(e);
			}
		});

		this.on(UtilPointerEvent.cancel, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeCancel(e);
			}
		});

		UtilPointerEvent.onClick(this, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeClick(e);
			}
		});

		//
		const data = new DDiagramData(this, options && (options.data || options.tag));
		this.data = data;
		this.tag = data;
		this.shape = new DDiagramShape(this);
	}

	protected initialize(shapes: EShape[]): void {
		this.initializeShapes(shapes, null, this.data.mapper);
	}

	protected initializeShapes(
		shapes: EShape[],
		dataShape: EShape | null,
		dataMapper: DDiagramDataMapper | null
	): void {
		const formatterMap: Record<string, (value: unknown) => unknown> = {};
		const initialMap: Record<string, unknown | undefined> = {};
		const actionMap: Map<EShapeActionValue, EShapeActionRuntime> = new Map<
			EShapeActionValue,
			EShapeActionRuntime
		>();

		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];
			const runtimeConstructor = EShapeRuntimes[shape.type] || EShapeRuntime;
			const runtime = (shape.runtime = new runtimeConstructor(shape));

			// Data
			const shapeData = shape.data;
			for (let j = 0, jmax = shapeData.size(); j < jmax; ++j) {
				const shapeDatum = shapeData.get(j);
				if (shapeDatum) {
					// Mapping
					if (dataMapper) {
						dataMapper(shapeDatum, dataShape || shape);
					}

					// Format
					const datumFormat = shapeDatum.format;
					const datumInitial = shapeDatum.initial;
					if (datumFormat in formatterMap) {
						shapeDatum.formatter = formatterMap[datumFormat];
					} else if (0 < datumFormat.length) {
						try {
							const formatter = Function(
								"value",
								/* eslint-disable prettier/prettier */
								`try {` +
									`return (${datumFormat});` +
								`} catch( e1 ) {` +
									`try {` +
										`return (${0 < datumInitial.length ? datumInitial : 0});` +
									`} catch( e2 ) {` +
										`return 0;` +
									`}` +
								`}`
								/* eslint-enable prettier/prettier */
							) as any;
							formatterMap[datumFormat] = formatter;
							shapeDatum.formatter = formatter;
						} catch (e) {
							//
						}
					}

					// Initial
					if (datumInitial in initialMap) {
						shapeDatum.value = initialMap[datumInitial];
					} else if (0 < datumInitial.length) {
						try {
							shapeDatum.value = initialMap[datumInitial] = Function(
								/* eslint-disable prettier/prettier */
								`try {` +
									`return (${datumInitial});` +
								`} catch( e ) {` +
									`return 0;` +
								`}`
								/* eslint-enable prettier/prettier */
							)();
						} catch (e) {
							//
						}
					}
				}
			}

			// Initialize runtime actions
			const values = shape.action.values;
			const actions = runtime.actions;
			for (let j = 0, jmax = values.length; j < jmax; ++j) {
				const value = values[j];
				let action: EShapeActionRuntime | undefined | null = actionMap.get(value);
				if (action == null) {
					action = value.toRuntime();
					if (action != null) {
						if (action instanceof EShapeActionRuntimeOpen) {
							if (shape.cursor.length <= 0) {
								shape.cursor = "pointer";
							}
						}

						actionMap.set(value, action);
						actions.push(action);
						runtime.reset |= action.reset;
					}
				} else {
					actions.push(action);
					runtime.reset |= action.reset;
				}
			}

			// Children
			const children = shape.children;
			if (0 < children.length) {
				this.initializeShapes(children, this.toDataShape(dataShape, shape), dataMapper);
			}
		}
	}

	protected toDataShape(dataShape: EShape | null, shape: EShape): EShape | null {
		if (dataShape != null) {
			return dataShape;
		}
		if (shape.type === EShapeType.EMBEDDED) {
			return shape;
		}
		return null;
	}

	protected isEditMode(): boolean {
		return false;
	}

	protected newCanvas(serialized: DDiagramSerialized): DDiagramCanvas {
		return new DDiagramCanvas(this.toCanvasOptions(serialized));
	}

	protected toCanvasOptions(serialized: DDiagramSerialized): DDiagramCanvasOptions {
		return this.toCanvasBaseOptions(serialized);
	}

	protected onDown(e: interaction.InteractionEvent): void {
		super.onDown(e, this.canvas?.onShapeDown(e));
	}

	onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean {
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
