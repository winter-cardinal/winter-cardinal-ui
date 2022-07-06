/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, IPoint, Point, Renderer } from "pixi.js";
import { DApplications } from "./d-applications";
import {
	DDiagramCanvasBase,
	DDiagramCanvasBaseOptions,
	DThemeDiagramCanvasBase
} from "./d-diagram-canvas-base";
import { EShape } from "./shape/e-shape";
import { EShapeBase } from "./shape/variant/e-shape-base";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { EShapeActionValue } from "./shape/action/e-shape-action-value";
import { EShapeActionRuntime } from "./shape/action/e-shape-action-runtime";
import { DDiagramDataMapper } from "./d-diagram-data-mapper";
import { EShapeRuntimes } from "./shape/e-shape-runtimes";
import { EShapeRuntime } from "./shape/e-shape-runtime";
import { EShapeDataValue } from "./shape/e-shape-data-value";
import { EShapeDataValueType } from "./shape/e-shape-data-value-type";
import { EShapeContainer } from "./shape/e-shape-container";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { DDiagramCanvasData } from "./d-diagram-canvas-data";
import { DDiagramCanvasDataImpl } from "./d-diagram-canvas-data-impl";
import { DDiagramCanvasShape } from "./d-diagram-canvas-shape";
import { DDiagramCanvasShapeImpl } from "./d-diagram-canvas-shape-impl";
import { DDiagramCanvasTicker } from "./d-diagram-canvas-ticker";
import { DDiagramCanvasTickerImpl } from "./d-diagram-canvas-ticker-impl";
import { EShapeDataValueScope } from "./shape/e-shape-data-value-scope";
import { EShapeEmbedded } from "./shape/variant/e-shape-embedded";
import { EShapeDataValueExtensions } from "./shape/e-shape-data-value-extensions";

export interface DDiagramCanvasOptions<THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas>
	extends DDiagramCanvasBaseOptions<THEME> {}

export interface DThemeDiagramCanvas extends DThemeDiagramCanvasBase {}

export class DDiagramCanvas<
	THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas,
	OPTIONS extends DDiagramCanvasOptions<THEME> = DDiagramCanvasOptions<THEME>
> extends DDiagramCanvasBase<THEME, OPTIONS> {
	protected static WORK_DBLCLICK?: Point;

	protected _data: DDiagramCanvasData;
	protected _shape: DDiagramCanvasShape;
	protected _ticker: DDiagramCanvasTicker;
	protected _actionables: EShape[];

	protected _overed?: EShape | null;
	protected _downed?: EShape | null;
	protected _downeds: Set<EShape>;

	protected _updateBound: () => void;

	constructor(options: OPTIONS) {
		super(options);
		this._data = new DDiagramCanvasDataImpl();
		this._shape = new DDiagramCanvasShapeImpl();
		this._ticker = new DDiagramCanvasTickerImpl(this);
		this._actionables = [];
		this._downeds = new Set<EShape>();
		this._updateBound = (): void => {
			DApplications.update(this);
		};
	}

	get data(): DDiagramCanvasData {
		return this._data;
	}

	get shape(): DDiagramCanvasShape {
		return this._shape;
	}

	get ticker(): DDiagramCanvasTicker {
		return this._ticker;
	}

	initialize(shapes: EShape[], mapper?: DDiagramDataMapper | null): void {
		const time = Date.now();
		const actionables = this._actionables;
		this.initialize_(
			shapes,
			null,
			mapper,
			new Map<string, (value: unknown) => unknown>(),
			new Map<string, unknown>(),
			new Map<EShapeActionValue, EShapeActionRuntime>(),
			this._ticker,
			this._shape,
			this._data,
			actionables
		);
		const layers = this._layer.children;
		for (let i = 0, imax = layers.length; i < imax; ++i) {
			layers[i].initialize(actionables);
		}
		for (let i = 0, imax = layers.length; i < imax; ++i) {
			const layerChildren = layers[i].children;
			for (let j = 0, jmax = layerChildren.length; j < jmax; ++j) {
				layerChildren[j].update(time);
			}
		}
		this._ticker.start();
	}

	protected initialize_(
		shapes: EShape[],
		dataShape: EShape | null,
		mapper: DDiagramDataMapper | null | undefined,
		formatToFormatter: Map<string, (value: unknown) => unknown>,
		initialToInitialValue: Map<string, unknown>,
		actionValueToRuntime: Map<EShapeActionValue, EShapeActionRuntime>,
		canvasTicker: DDiagramCanvasTicker,
		canvasShape: DDiagramCanvasShape,
		canvasData: DDiagramCanvasData,
		actionables: EShape[]
	): void {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];

			// ID
			const id = shape.id;
			if (0 < id.length) {
				canvasShape.add(id, shape);
			}

			// Data
			this.initData(
				shape,
				dataShape,
				mapper,
				formatToFormatter,
				initialToInitialValue,
				canvasTicker,
				canvasData
			);

			// Runtime
			const runtime = new (EShapeRuntimes[shape.type] || EShapeRuntime)(shape);
			shape.runtime = runtime;

			// Action
			this.initActions(shape, runtime, actionValueToRuntime);

			// Actionables
			if (runtime.isActionable()) {
				actionables.push(shape);
			}

			// Shortcut
			const shortcut = shape.shortcut;
			if (shortcut != null) {
				UtilKeyboardEvent.on(shape, shortcut, (e: KeyboardEvent): void => {
					runtime.onClick(shape, e);
				});
			}

			// Init the runtime
			runtime.initialize(shape);

			// Children
			const children = shape.children;
			if (0 < children.length) {
				this.initialize_(
					children,
					this.toDataShape(dataShape, shape),
					mapper,
					formatToFormatter,
					initialToInitialValue,
					actionValueToRuntime,
					canvasTicker,
					canvasShape,
					canvasData,
					actionables
				);
			}
		}
	}

	protected initData(
		shape: EShape,
		dataShape: EShape | null,
		mapper: DDiagramDataMapper | null | undefined,
		formatToFormatter: Map<string, (value: unknown) => unknown>,
		initialToInitialValue: Map<string, unknown>,
		canvasTicker: DDiagramCanvasTicker,
		canvasData: DDiagramCanvasData
	): void {
		const data = shape.data;
		for (let i = 0, imax = data.size(); i < imax; ++i) {
			const value = data.get(i);
			if (value) {
				const type = value.type;
				const format = value.format;
				const initial = value.initial;
				switch (type) {
					case EShapeDataValueType.NUMBER:
					case EShapeDataValueType.NUMBER_ARRAY:
					case EShapeDataValueType.STRING:
					case EShapeDataValueType.STRING_ARRAY:
					case EShapeDataValueType.OBJECT:
					case EShapeDataValueType.OBJECT_ARRAY:
						// Mapping
						if (value.scope === EShapeDataValueScope.PRIVATE) {
							const id = value.id;
							if (0 < id.length) {
								if (dataShape) {
									dataShape.data.private.add(id, value);
								} else {
									canvasData.private.add(id, value);
								}
							}
						} else if (value.scope === EShapeDataValueScope.PROTECTED) {
							const id = value.id;
							if (0 < id.length) {
								canvasData.protected.add(id, value);
							}
						} else {
							if (mapper) {
								mapper(value, dataShape || shape);
							}
							const id = value.id;
							if (0 < id.length) {
								canvasData.add(id, value);
							}
						}

						// Format
						if (formatToFormatter.has(format)) {
							value.formatter = formatToFormatter.get(format);
						} else if (0 < format.length) {
							try {
								const formatter = this.calcFormatter(value, format, initial);
								formatToFormatter.set(format, formatter);
								value.formatter = formatter;
							} catch (e) {
								// DO NOTHING
							}
						}

						// Initial
						if (initialToInitialValue.has(initial)) {
							value.value = initialToInitialValue.get(initial);
						} else if (0 < initial.length) {
							try {
								const initialValue = this.calcInitial(value, initial);
								initialToInitialValue.set(initial, initialValue);
								value.value = initialValue;
							} catch (e) {
								// DO NOTHING
							}
						}
						break;
					case EShapeDataValueType.TICKER:
						// Initial
						if (initialToInitialValue.has(initial)) {
							value.value = 0;
							canvasTicker.add(initialToInitialValue.get(initial)).add(value);
						} else if (0 < initial.length) {
							try {
								const initialValue = this.calcInitial(value, initial);
								initialToInitialValue.set(initial, initialValue);
								value.value = 0;
								canvasTicker.add(initialValue).add(value);
							} catch (e) {
								// DO NOTHING
							}
						}
						break;
					default:
						const extension = EShapeDataValueExtensions.get(type);
						if (extension) {
							// Mapping
							canvasData.extended.add(extension.id, value);

							// Initial
							value.value = extension.initial;
						}
						break;
				}
			}
		}
	}

	protected initActions(
		shape: EShape,
		shapeRuntime: EShapeRuntime,
		valueToRuntime: Map<EShapeActionValue, EShapeActionRuntime>
	): void {
		const values = shape.action.values;
		const runtimes = shapeRuntime.actions;
		for (let i = 0, imax = values.length; i < imax; ++i) {
			const value = values[i];
			let runtime = valueToRuntime.get(value);
			if (runtime == null) {
				runtime = value.toRuntime();
				if (runtime != null) {
					valueToRuntime.set(value, runtime);
					runtimes.push(runtime);
					shapeRuntime.reset |= runtime.reset;
				}
			} else {
				runtimes.push(runtime);
				shapeRuntime.reset |= runtime.reset;
			}
		}
	}

	protected calcFormatter(
		value: EShapeDataValue,
		format: string,
		initial: string
	): (value: unknown) => unknown {
		const def = this.toInitial(value);
		return Function(
			"value",
			/* eslint-disable prettier/prettier */
			`try {` +
				`return (${format});` +
			`} catch( e1 ) {` +
				`try {` +
					`return (${0 < initial.length ? initial : def});` +
				`} catch( e2 ) {` +
					`return ${def};` +
				`}` +
			`}`
			/* eslint-enable prettier/prettier */
		) as any;
	}

	protected calcInitial(value: EShapeDataValue, initial: string): unknown {
		return Function(
			/* eslint-disable prettier/prettier */
			`try {` +
				`return (${initial});` +
			`} catch( e ) {` +
				`return ${this.toInitial(value)};` +
			`}`
			/* eslint-enable prettier/prettier */
		)();
	}

	protected toInitial(value: EShapeDataValue): string {
		const valueType = value.type;
		switch (valueType) {
			case EShapeDataValueType.NUMBER:
				return "0";
			case EShapeDataValueType.NUMBER_ARRAY:
				return "[]";
			case EShapeDataValueType.STRING:
				return '""';
			case EShapeDataValueType.STRING_ARRAY:
				return "[]";
			case EShapeDataValueType.OBJECT:
				return "{}";
			case EShapeDataValueType.OBJECT_ARRAY:
				return "[]";
			case EShapeDataValueType.TICKER:
				return "0";
			default:
				return "0";
		}
	}

	protected toDataShape(dataShape: EShape | null, shape: EShape): EShape | null {
		if (dataShape != null) {
			return dataShape;
		}
		if (shape instanceof EShapeEmbedded) {
			return shape;
		}
		return null;
	}

	protected onDestroy(): void {
		this._ticker.stop();
		super.onDestroy();
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

	update(): void {
		const actionables = this._actionables;
		if (0 < actionables.length) {
			let effect = -1;
			const time = Date.now();
			for (let i = 0, imax = actionables.length; i < imax; ++i) {
				const actionable = actionables[i];
				actionable.update(time);
				const runtime = actionable.runtime;
				if (runtime && time < runtime.effect) {
					const runtimeEffect = runtime.effect;
					if (time < runtimeEffect) {
						effect = effect < 0 ? runtimeEffect : Math.min(effect, runtimeEffect);
					}
				}
			}
			if (0 <= effect) {
				window.setTimeout(this._updateBound, effect - Date.now());
			}
		}
	}

	onRender(renderer: Renderer): void {
		const actionables = this._actionables;
		if (0 < actionables.length) {
			let effect = -1;
			const time = Date.now();
			for (let i = 0, imax = actionables.length; i < imax; ++i) {
				const actionable = actionables[i];
				actionable.onRender(time, renderer);
				const runtime = actionable.runtime;
				if (runtime && time < runtime.effect) {
					const runtimeEffect = runtime.effect;
					if (time < runtimeEffect) {
						effect = effect < 0 ? runtimeEffect : Math.min(effect, runtimeEffect);
					}
				}
			}
			if (0 <= effect) {
				window.setTimeout(this._updateBound, effect - Date.now());
			}
		}
	}

	protected getType(): string {
		return "DDiagramCanvas";
	}
}
