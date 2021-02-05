/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point, Rectangle } from "pixi.js";
import { UtilHtmlElementPadding } from "../../util/util-html-element";
import { UtilInput, UtilInputOperation } from "../../util/util-input";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeMiscHtmlElement } from "./e-shape-action-runtime-misc-html-element";
import { EShapeActionValueOnInputActions } from "./e-shape-action-value-on-input-actions";

export abstract class EShapeActionRuntimeMiscInput<
	VALUE = unknown,
	UTIL extends UtilInput<VALUE> = UtilInput<VALUE>
> extends EShapeActionRuntimeMiscHtmlElement<HTMLInputElement, UTIL> {
	protected newOperation( shape: EShape, runtime: EShapeRuntime ): UtilInputOperation<VALUE> {
		return {
			getElementRect: ( resolution: number, work: Point, result: Rectangle ): Rectangle | null => {
				return this.getElementRect( shape, runtime, resolution, work, result );
			},

			getElementMatrix: (): Matrix | null => {
				return this.getElementMatrix( shape, runtime );
			},

			getClipperRect: ( resolution: number, work: Point, result: Rectangle ): Rectangle | null => {
				return this.getClipperToRect( shape, runtime, resolution, work, result );
			},

			getPadding: (): UtilHtmlElementPadding | null => {
				return this.getPadding( shape, runtime );
			},

			containsPoint: ( point: Point ): boolean => {
				return this.containsPoint( shape, runtime, point );
			},

			setTextVisibility: ( visible: boolean ): void => {
				shape.text.enable = visible;
			},

			getValue: (): VALUE | undefined => {
				return this.getUtil( shape, runtime ).toValue( shape.text.value );
			},

			onValueInput: ( newValue: VALUE ): void => {
				// DO NOTHING
			},

			onValueChange: ( newValue: VALUE, oldValue: VALUE ): void => {
				this.onValueChange( shape, runtime, newValue, oldValue );
			},

			onEnter: (): void => {
				// DO NOTHING
			},

			applyTitle: (): void => {
				// DO NOTHING
			}
		};
	}

	protected onValueChange( shape: EShape, runtime: EShapeRuntime, newValue: VALUE, oldValue: VALUE ): void {
		shape.text.value = this.getUtil( shape, runtime ).fromValue( newValue );
		const now = Date.now();
		const target = this.target( shape, now );
		if( target != null ) {
			EShapeActionValueOnInputActions.execute(
				shape, this.onInputAction, target, newValue, now
			);
		}
	}
}
