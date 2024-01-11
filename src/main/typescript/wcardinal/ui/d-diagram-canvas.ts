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
import { EShapeActionEnvironment } from "./shape/action/e-shape-action-environment";
import { EShapeRuntimeImpl } from "./shape/e-shape-runtime-impl";
import { EShapeActionRuntimes } from "./shape/action/e-shape-action-runtimes";

export interface DDiagramCanvasOptions<THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas>
	extends DDiagramCanvasBaseOptions<THEME> {}

export interface DThemeDiagramCanvas extends DThemeDiagramCanvasBase {}

const INITIAL_ZERO = "0";

const INITIAL_ARRAY = "[]";

const INITIAL_STRING = '""';

const INITIAL_OBJECT = "{}";

const INITIAL_FALSE = "false";

const INITIALIZER_ZERO = () => {
	return 0;
};

const INITIALIZER_ARRAY = () => {
	return [];
};

const INITIALIZER_STRING = () => {
	return "";
};

const INITIALIZER_OBJECT = () => {
	return {};
};

const INITIALIZER_FALSE = () => {
	return false;
};

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
		this._shape = new DDiagramCanvasShapeImpl(this);
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
		const actionables = this._actionables;
		const data = this._data;
		this.initialize_(
			shapes,
			null,
			null,
			mapper,
			new Map<EShapeDataValueType, Map<string, (value: unknown) => unknown>>(),
			new Map<EShapeDataValueType, Map<string, () => unknown>>(),
			new Map<EShapeActionValue, EShapeActionRuntime>(),
			this._ticker,
			this._shape,
			data,
			actionables
		);
		const layers = this._layer.children;
		const layersLength = layers.length;
		for (let i = 0; i < layersLength; ++i) {
			layers[i].initialize(actionables);
		}
		EShapeActionEnvironment.isInitializing = true;
		const time = Date.now();
		for (let i = 0; i < layersLength; ++i) {
			layers[i].update(time);
		}
		EShapeActionEnvironment.isInitializing = false;
		data.extended.each((id): void => {
			const extension = EShapeDataValueExtensions.getById(id);
			if (extension) {
				const start = extension.start;
				if (start) {
					start(this);
				}
			}
		});
		this._ticker.start();
	}

	protected initialize_(
		shapes: EShape[],
		dataShape: EShape | null,
		containerShape: EShape | null,
		mapper: DDiagramDataMapper | null | undefined,
		formatters: Map<EShapeDataValueType, Map<string, (value: unknown) => unknown>>,
		initializers: Map<EShapeDataValueType, Map<string, () => unknown>>,
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
				containerShape,
				mapper,
				formatters,
				initializers,
				canvasTicker,
				canvasData
			);

			// Runtime
			const runtime = new (EShapeRuntimes[shape.type] || EShapeRuntimeImpl)(shape);
			shape.runtime = runtime;

			// Action
			this.initActions(shape, runtime, actionValueToRuntime);

			// Init the runtime
			runtime.initialize(shape);

			// Shortcut
			const shortcut = shape.shortcut;
			if (shortcut != null) {
				UtilKeyboardEvent.on(shape, shortcut, (e: KeyboardEvent): void => {
					runtime.onClick(shape, e);
				});
			}

			// Actionables
			if (runtime.isActionable()) {
				actionables.push(shape);
			}

			// Children
			const children = shape.children;
			if (0 < children.length) {
				let newDataShape = dataShape;
				let newContainerShape = containerShape;
				if (shape instanceof EShapeEmbedded) {
					if (newDataShape == null) {
						newDataShape = shape;
					}
					newContainerShape = shape;
				}
				this.initialize_(
					children,
					newDataShape,
					newContainerShape,
					mapper,
					formatters,
					initializers,
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
		containerShape: EShape | null,
		mapper: DDiagramDataMapper | null | undefined,
		formatters: Map<EShapeDataValueType, Map<string, (value: unknown) => unknown>>,
		initializers: Map<EShapeDataValueType, Map<string, () => unknown>>,
		canvasTicker: DDiagramCanvasTicker,
		canvasData: DDiagramCanvasData
	): void {
		const data = shape.data;
		for (let i = 0, imax = data.size(); i < imax; ++i) {
			const value = data.get(i);
			if (value == null) {
				continue;
			}
			switch (value.type) {
				case EShapeDataValueType.BOOLEAN:
				case EShapeDataValueType.BOOLEAN_ARRAY:
				case EShapeDataValueType.NUMBER:
				case EShapeDataValueType.NUMBER_ARRAY:
				case EShapeDataValueType.STRING:
				case EShapeDataValueType.STRING_ARRAY:
				case EShapeDataValueType.OBJECT:
				case EShapeDataValueType.OBJECT_ARRAY:
					this.initDataValue(
						value,
						shape,
						dataShape,
						containerShape,
						mapper,
						formatters,
						initializers,
						canvasData
					);
					break;
				case EShapeDataValueType.TICKER:
					this.initDataTicker(value, initializers, canvasTicker);
					break;
				default:
					this.initDataExtension(value, canvasData);
					break;
			}
		}
	}

	protected initDataValue(
		value: EShapeDataValue,
		shape: EShape,
		dataShape: EShape | null,
		containerShape: EShape | null,
		mapper: DDiagramDataMapper | null | undefined,
		formatters: Map<EShapeDataValueType, Map<string, (value: unknown) => unknown>>,
		initializers: Map<EShapeDataValueType, Map<string, () => unknown>>,
		canvasData: DDiagramCanvasData
	): void {
		// Mapping
		if (value.scope === EShapeDataValueScope.PRIVATE) {
			const id = value.id;
			if (0 < id.length) {
				if (containerShape) {
					containerShape.data.private.add(id, value);
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
		const format = value.format;
		const initial = value.initial;
		let formatToFormatter = formatters.get(value.type);
		if (formatToFormatter == null) {
			formatToFormatter = new Map<string, (value: unknown) => unknown>();
			formatters.set(value.type, formatToFormatter);
		}
		const oldFormatter = formatToFormatter.get(format);
		if (oldFormatter != null) {
			value.formatter = oldFormatter;
		} else if (0 < format.length) {
			const newFormatter = this.calcFormatter(value, format, initial);
			formatToFormatter.set(format, newFormatter);
			value.formatter = newFormatter;
		}

		// Initial
		let initialToInitializer = initializers.get(value.type);
		if (initialToInitializer == null) {
			initialToInitializer = new Map<string, () => unknown>();
			initializers.set(value.type, initialToInitializer);
		}
		const oldInitializer = initialToInitializer.get(initial);
		if (oldInitializer != null) {
			value.value = oldInitializer();
		} else {
			const newInitializer = this.calcInitial(value, initial);
			initialToInitializer.set(initial, newInitializer);
			value.value = newInitializer();
		}
	}

	protected initDataTicker(
		value: EShapeDataValue,
		initializers: Map<EShapeDataValueType, Map<string, () => unknown>>,
		canvasTicker: DDiagramCanvasTicker
	): void {
		const initial = value.initial;
		let initialToInitializer = initializers.get(value.type);
		if (initialToInitializer == null) {
			initialToInitializer = new Map<string, () => unknown>();
			initializers.set(value.type, initialToInitializer);
		}
		const oldInitializer = initialToInitializer.get(initial);
		if (oldInitializer !== undefined) {
			value.value = 0;
			canvasTicker.add(oldInitializer()).add(value);
		} else {
			const newInitializer = this.calcInitial(value, initial);
			initialToInitializer.set(initial, newInitializer);
			value.value = 0;
			canvasTicker.add(newInitializer()).add(value);
		}
	}

	protected initDataExtension(value: EShapeDataValue, canvasData: DDiagramCanvasData): void {
		const extension = EShapeDataValueExtensions.get(value.type);
		if (extension) {
			canvasData.extended.add(extension.id, value);
			value.value = extension.initial;
		}
	}

	protected initActions(
		shape: EShape,
		shapeRuntime: EShapeRuntime,
		valueToRuntime: Map<EShapeActionValue, EShapeActionRuntime>
	): void {
		const values = shape.action.values;
		const runtimes = shapeRuntime.actions;
		const typeRuntimes = EShapeActionRuntimes.get(shape.type);
		if (typeRuntimes != null) {
			for (let i = 0, imax = typeRuntimes.length; i < imax; ++i) {
				const typeRuntime = typeRuntimes[i];
				runtimes.push(typeRuntime);
				shapeRuntime.reset |= typeRuntime.reset;
			}
		}
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
		try {
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
		} catch (e) {
			return this.toInitializer(value);
		}
	}

	protected calcInitial(value: EShapeDataValue, initial: string): () => unknown {
		if (initial.length <= 0) {
			return this.toInitializer(value);
		}
		try {
			return Function(
				/* eslint-disable prettier/prettier */
				`try {` +
					`return (${initial});` +
				`} catch( e ) {` +
					`return ${this.toInitial(value)};` +
				`}`
				/* eslint-enable prettier/prettier */
			) as any;
		} catch (e) {
			return this.toInitializer(value);
		}
	}

	protected toInitial(value: EShapeDataValue): string {
		const valueType = value.type;
		switch (valueType) {
			case EShapeDataValueType.BOOLEAN:
				return INITIAL_FALSE;
			case EShapeDataValueType.BOOLEAN_ARRAY:
				return INITIAL_ARRAY;
			case EShapeDataValueType.NUMBER:
				return INITIAL_ZERO;
			case EShapeDataValueType.NUMBER_ARRAY:
				return INITIAL_ARRAY;
			case EShapeDataValueType.STRING:
				return INITIAL_STRING;
			case EShapeDataValueType.STRING_ARRAY:
				return INITIAL_ARRAY;
			case EShapeDataValueType.OBJECT:
				return INITIAL_OBJECT;
			case EShapeDataValueType.OBJECT_ARRAY:
				return INITIAL_ARRAY;
			case EShapeDataValueType.TICKER:
				return INITIAL_ZERO;
			default:
				return INITIAL_ZERO;
		}
	}

	protected toInitializer(value: EShapeDataValue): () => unknown {
		const valueType = value.type;
		switch (valueType) {
			case EShapeDataValueType.BOOLEAN:
				return INITIALIZER_FALSE;
			case EShapeDataValueType.BOOLEAN_ARRAY:
				return INITIALIZER_ARRAY;
			case EShapeDataValueType.NUMBER:
				return INITIALIZER_ZERO;
			case EShapeDataValueType.NUMBER_ARRAY:
				return INITIALIZER_ARRAY;
			case EShapeDataValueType.STRING:
				return INITIALIZER_STRING;
			case EShapeDataValueType.STRING_ARRAY:
				return INITIALIZER_ARRAY;
			case EShapeDataValueType.OBJECT:
				return INITIALIZER_OBJECT;
			case EShapeDataValueType.OBJECT_ARRAY:
				return INITIALIZER_ARRAY;
			case EShapeDataValueType.TICKER:
				return INITIALIZER_ZERO;
			default:
				return INITIALIZER_ZERO;
		}
	}

	protected onDestroy(): void {
		this._data.extended.each((id): void => {
			const extension = EShapeDataValueExtensions.getById(id);
			if (extension) {
				const stop = extension.stop;
				if (stop) {
					stop(this);
				}
			}
		});
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

		// Cursor
		this.cursor = this._cursor = this.toShapeCursor(found);

		// TItle
		const layer = DApplications.getLayer(this);
		if (layer) {
			const title = this.toShapeTitle(found);
			const view = layer.view;
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
			let current = target;
			while (true) {
				const cursor = current.cursor;
				if (cursor != null && 0 < cursor.length) {
					return cursor;
				}
				const parent = current.parent;
				if (parent instanceof EShapeBase) {
					current = parent;
				} else {
					break;
				}
			}
		}
		return "auto";
	}

	protected toShapeTitle(target: EShape | null): string {
		if (target != null) {
			let current = target;
			while (true) {
				const title = current.title;
				if (title != null && 0 < title.length) {
					return title;
				}
				const parent = current.parent;
				if (parent instanceof EShapeBase) {
					current = parent;
				} else {
					break;
				}
			}
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

	onShapeRightClick(e: interaction.InteractionEvent): boolean {
		const found = this.hitTestInteractives(e.data.global);
		if (found && this._downed === found) {
			let target = found;
			while (true) {
				const runtime = target.runtime;
				if (runtime) {
					runtime.onRightClick(target, e);
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

	onShapeRightDown(e: interaction.InteractionEvent): boolean {
		const found = this.hitTestInteractives(e.data.global);
		this._downed = found;
		if (found) {
			this._downeds.add(found);
			let target = found;
			while (true) {
				const runtime = target.runtime;
				if (runtime) {
					runtime.onRightDown(target, e);
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

	onShapeRightUp(e: interaction.InteractionEvent): boolean {
		const downeds = this._downeds;
		const found = this.hitTestInteractives(e.data.global);
		if (found) {
			downeds.delete(found);
			let target = found;
			while (true) {
				const runtime = target.runtime;
				if (runtime) {
					runtime.onRightUp(target, e);
				}
				const parent = target.parent;
				if (parent instanceof EShapeBase) {
					target = parent;
				} else {
					break;
				}
			}
		}
		this.onShapeRightCancel(e);
		return found != null;
	}

	onShapeRightCancel(e: interaction.InteractionEvent): boolean {
		const downeds = this._downeds;
		if (0 < downeds.size) {
			downeds.forEach((downed: EShape): void => {
				let target = downed;
				while (true) {
					const runtime = target.runtime;
					if (runtime) {
						runtime.onRightUpOutside(target, e);
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

	update(): void {
		const actionables = this._actionables;
		if (0 < actionables.length) {
			let effect = -1;
			const time = Date.now();
			for (let i = 0, imax = actionables.length; i < imax; ++i) {
				const actionable = actionables[i];
				actionable.update(time);
				const runtime = actionable.runtime;
				if (runtime) {
					const runtimeEffect = runtime.effect;
					if (0 <= runtimeEffect && time < runtimeEffect) {
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
				if (runtime) {
					const runtimeEffect = runtime.effect;
					if (0 <= runtimeEffect && time < runtimeEffect) {
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
