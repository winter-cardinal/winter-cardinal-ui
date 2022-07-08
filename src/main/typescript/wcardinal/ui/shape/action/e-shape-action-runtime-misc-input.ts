/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point, Rectangle } from "pixi.js";
import { UtilHtmlElementCreator, UtilHtmlElementPadding } from "../../util/util-html-element";
import { UtilHtmlElementClipperExRects } from "../../util/util-html-element-clipper-ex-rects";
import { UtilInput, UtilInputOperation } from "../../util/util-input";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeMiscHtmlElementBase } from "./e-shape-action-runtime-misc-html-element-base";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOnInputActions } from "./e-shape-action-value-on-input-actions";

export abstract class EShapeActionRuntimeMiscInput<
	VALUE = unknown,
	ELEMENT extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement | HTMLTextAreaElement,
	UTIL extends UtilInput<VALUE, ELEMENT> = UtilInput<VALUE, ELEMENT>
> extends EShapeActionRuntimeMiscHtmlElementBase<ELEMENT, UTIL> {
	protected readonly target: EShapeActionExpression<string | null>;
	protected onInputAction: EShapeActionValueOnInputAction;

	constructor(value: EShapeActionValueMisc) {
		super(value);
		this.target = EShapeActionExpressions.ofStringOrNull(value.target);
		this.onInputAction = value.onInputAction;
	}

	protected newOperation(
		shape: EShape,
		runtime: EShapeRuntime
	): UtilInputOperation<VALUE, ELEMENT> {
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
				shape.text.enable = false;
			},

			onCancel: (): void => {
				shape.text.enable = true;
			},

			onEnd: (): void => {
				// DO NOTHING
			},

			getValue: (): VALUE | undefined => {
				return this.getUtil(shape, runtime).toValue(shape.text.value);
			},

			onValueInput: (newValue: VALUE): void => {
				// DO NOTHING
			},

			onValueChange: (newValue: VALUE, oldValue: VALUE): void => {
				this.onValueChange(shape, runtime, newValue, oldValue);
			},

			onEnter: (): void => {
				// DO NOTHING
			},

			applyTitle: (): void => {
				// DO NOTHING
			}
		};
	}

	protected newElementCreator(
		shape: EShape,
		runtime: EShapeRuntime
	): UtilHtmlElementCreator<ELEMENT> | undefined {
		return undefined;
	}

	protected getPadding(shape: EShape, runtime: EShapeRuntime): UtilHtmlElementPadding | null {
		return shape.text.padding;
	}

	protected onValueChange(
		shape: EShape,
		runtime: EShapeRuntime,
		newValue: VALUE,
		oldValue: VALUE
	): void {
		shape.text.value = this.getUtil(shape, runtime).fromValue(newValue);
		const now = Date.now();
		const target = this.target(shape, now, EShapeActionEnvironment);
		if (target != null) {
			EShapeActionValueOnInputActions.execute(
				shape,
				this.onInputAction,
				target,
				newValue,
				now
			);
		}
	}
}
