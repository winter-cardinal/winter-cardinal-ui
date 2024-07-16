/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager, Matrix, Point, Rectangle, Renderer } from "pixi.js";
import { DThemes } from "../../theme/d-themes";
import {
	UtilHtmlElement,
	UtilHtmlElementCreator,
	UtilHtmlElementOperation,
	UtilHtmlElementOptions,
	UtilHtmlElementPadding
} from "../../util/util-html-element";
import { UtilHtmlElementWhen } from "../../util/util-html-element-when";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActions } from "./e-shape-actions";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { UtilHtmlElementClipperExRects } from "../../util/util-html-element-clipper-ex-rects";
import { EShapeContainer } from "../e-shape-container";
import { DDiagramLayer } from "../../d-diagram-layer";
import { isShapeClipperExLoaded } from "../load/load-shape-clipper-ex";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeBase } from "./e-shape-action-runtime-base";

export abstract class EShapeActionRuntimeMiscHtmlElementBase<
	ELEMENT extends HTMLElement = HTMLElement,
	UTIL extends UtilHtmlElement<ELEMENT> = UtilHtmlElement<ELEMENT>
> extends EShapeActionRuntimeBase {
	protected static WORK?: Point;
	protected readonly condition: EShapeActionExpression<string | null>;
	protected utils: Map<EShape, UTIL>;

	constructor(value: EShapeActionValueMisc) {
		super();
		this.condition = EShapeActionExpressions.ofString(value.condition);
		this.utils = new Map<EShape, UTIL>();
	}

	protected getUtil(shape: EShape, runtime: EShapeRuntime): UTIL {
		const utils = this.utils;
		let result = utils.get(shape);
		if (result == null) {
			result = this.newUtil(shape, runtime);
			utils.set(shape, result);
		}
		return result;
	}

	protected newUtil(shape: EShape, runtime: EShapeRuntime): UTIL {
		return new UtilHtmlElement<ELEMENT>(
			shape,
			this.newOperation(shape, runtime),
			DThemes.getInstance().get("DHtmlElement"),
			this.newUtilOptions(shape, runtime)
		) as any;
	}

	protected newOperation(
		shape: EShape,
		runtime: EShapeRuntime
	): UtilHtmlElementOperation<ELEMENT> {
		return {
			getElementRect: (
				resolution: number,
				work: Point,
				result: Rectangle
			): Rectangle | null => {
				return this.getElementRect(shape, runtime, resolution, work, result);
			},

			getElementMatrix: (): Matrix | null => {
				return this.getElementMatrix(shape, runtime);
			},

			getClipperRect: (
				resolution: number,
				work: Point,
				result: Rectangle
			): Rectangle | null => {
				return this.getClipperToRect(shape, runtime, resolution, work, result);
			},

			getClipperExRects: (result: UtilHtmlElementClipperExRects): void => {
				this.getClipperExRects(shape, result);
			},

			getPadding: (): UtilHtmlElementPadding | null => {
				return this.getPadding(shape, runtime);
			},

			containsPoint: (point: Point): boolean => {
				return this.containsPoint(shape, runtime, point);
			},

			onStart: (): void => {
				// DO NOTHING
			},

			onCancel: (): void => {
				// DO NOTHING
			},

			onEnd: (): void => {
				// DO NOTHING
			}
		};
	}

	protected newUtilOptions(
		shape: EShape,
		runtime: EShapeRuntime
	): UtilHtmlElementOptions<ELEMENT> {
		return {
			element: {
				creator: this.newElementCreator(shape, runtime)
			},
			when: this.toWhen(shape, runtime),
			clipper: {
				extended: isShapeClipperExLoaded()
			}
		};
	}

	protected abstract newElementCreator(
		shape: EShape,
		runtime: EShapeRuntime
	): UtilHtmlElementCreator<ELEMENT> | undefined;

	protected toWhen(shape: EShape, runtime: EShapeRuntime): UtilHtmlElementWhen | undefined {
		const value = this.condition(shape, Date.now(), EShapeActionEnvironment);
		if (value != null && value in UtilHtmlElementWhen) {
			return UtilHtmlElementWhen[value as keyof typeof UtilHtmlElementWhen];
		}
		return undefined;
	}

	protected containsPoint(shape: EShape, runtime: EShapeRuntime, point: Point): boolean {
		if (shape.visible) {
			const local = (EShapeActionRuntimeMiscHtmlElementBase.WORK ??= new Point());
			shape.toLocal(point, undefined, local);
			return shape.contains(local.x, local.y) != null;
		}
		return false;
	}

	protected getPadding(shape: EShape, runtime: EShapeRuntime): UtilHtmlElementPadding | null {
		return null;
	}

	protected getElementRect(
		shape: EShape,
		runtime: EShapeRuntime,
		resolution: number,
		point: Point,
		result: Rectangle
	): Rectangle | null {
		const pivot = shape.transform.pivot;
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		result.x = -0.5 * sizeX + pivot.x;
		result.y = -0.5 * sizeY + pivot.y;
		result.width = sizeX;
		result.height = sizeY;
		return result;
	}

	protected getElementMatrix(shape: EShape, runtime: EShapeRuntime): Matrix | null {
		shape.updateTransform();
		return shape.transform.worldTransform;
	}

	protected getClipperToRect(
		shape: EShape,
		runtime: EShapeRuntime,
		resolution: number,
		point: Point,
		result: Rectangle
	): Rectangle | null {
		const diagram = EShapeActions.toDiagram(shape);
		return UtilHtmlElement.getClipperRect(diagram, shape, resolution, point, result);
	}

	protected getClipperExRects(shape: EShape, result: UtilHtmlElementClipperExRects): void {
		result.begin();
		const target = shape.root.parent as EShapeContainer | null;
		if (target instanceof DDiagramLayer) {
			const layerContainer = target.parent;
			if (layerContainer != null) {
				const layers = layerContainer.children as DDiagramLayer[];
				const index = layers.indexOf(target);
				if (0 <= index) {
					for (let i = index + 1, imax = layers.length; i < imax; ++i) {
						const layer = layers[i];
						if (layer.visible) {
							const w = layer.width;
							const h = layer.height;
							const t = layer.transform.worldTransform;
							const a = t.a;
							const b = t.b;
							const c = t.c;
							const d = t.d;
							const tx = t.tx;
							const ty = t.ty;
							result.add(tx, ty, a * w + c * h + tx, b * w + d * h + ty);
						}
					}
				}
			}
		}
		result.end();
	}

	onRender(shape: EShape, runtime: EShapeRuntime, time: number, renderer: Renderer): void {
		this.getUtil(shape, runtime).onRender(renderer);
	}

	onFocus(shape: EShape, runtime: EShapeRuntime): void {
		this.getUtil(shape, runtime).onFocus();
	}

	onBlur(shape: EShape, runtime: EShapeRuntime): void {
		this.getUtil(shape, runtime).onBlur();
	}

	onDowning(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		this.getUtil(shape, runtime).onDowning(e);
	}

	onDown(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		this.getUtil(shape, runtime).onDown(e);
	}

	onDblClick(
		shape: EShape,
		runtime: EShapeRuntime,
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager
	): void {
		this.getUtil(shape, runtime).onDblClick(e, interactionManager);
	}
}
