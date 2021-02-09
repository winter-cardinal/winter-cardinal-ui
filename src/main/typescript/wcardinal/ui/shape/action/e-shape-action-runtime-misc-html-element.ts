/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Matrix, Point, Rectangle, Renderer } from "pixi.js";
import { DHtmlElementState } from "../../d-html-element-state";
import { DThemes } from "../../theme/d-themes";
import { UtilHtmlElement, UtilHtmlElementCreator, UtilHtmlElementOperation, UtilHtmlElementOptions, UtilHtmlElementPadding } from "../../util/util-html-element";
import { UtilHtmlElementWhen } from "../../util/util-html-element-when";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpression, EShapeActionExpressionWithParameter } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimes } from "./e-shape-action-runtimes";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";

export class EShapeActionRuntimeMiscHtmlElement<
	ELEMENT extends HTMLElement = HTMLElement,
	UTIL extends UtilHtmlElement<ELEMENT> = UtilHtmlElement<ELEMENT>
> extends EShapeActionRuntime {
	protected static WORK?: Point;
	protected readonly condition: EShapeActionExpression<string | null>;
	protected readonly target: EShapeActionExpression<string | null>;
	protected onInputAction: EShapeActionValueOnInputAction;
	protected elementCreator?: EShapeActionExpressionWithParameter<ELEMENT | null, HTMLElement>;
	protected noPointerEvent: boolean;
	protected utils: Map<EShape, UTIL>;

	constructor( value: EShapeActionValueMisc ) {
		super();
		this.condition = EShapeActionExpressions.ofString( value.condition );
		this.target = EShapeActionExpressions.ofStringOrNull( value.target );
		this.onInputAction = value.onInputAction;
		this.elementCreator = EShapeActionExpressions.ofElementOrNull( value.value );
		this.noPointerEvent = ( value.subtype === EShapeActionValueMiscType.HTML_ELEMENT_WITHOUT_POINTER_EVENTS );
		this.utils = new Map<EShape, UTIL>();
	}

	protected getUtil( shape: EShape, runtime: EShapeRuntime ): UTIL {
		const utils = this.utils;
		let result = utils.get( shape );
		if( result == null ) {
			result = this.newUtil( shape, runtime );
			utils.set( shape, result );
		}
		return result;
	}

	protected newUtil( shape: EShape, runtime: EShapeRuntime ): UTIL {
		if( this.noPointerEvent ) {
			shape.state.add( DHtmlElementState.NO_POINTER_EVENTS );
		}
		return new UtilHtmlElement<ELEMENT>(
			shape, this.newOperation( shape, runtime ),
			DThemes.getInstance().get( "DHtmlElement" ),
			this.newUtilOptions( shape, runtime )
		) as any;
	}

	protected newOperation( shape: EShape, runtime: EShapeRuntime ): UtilHtmlElementOperation<ELEMENT> {
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

	protected newUtilOptions( shape: EShape, runtime: EShapeRuntime ): UtilHtmlElementOptions<ELEMENT> {
		return {
			element: {
				creator: this.newElementCreator( shape, runtime )
			},
			when: this.toWhen( shape, runtime )
		};
	}

	protected newElementCreator( shape: EShape, runtime: EShapeRuntime ): UtilHtmlElementCreator<ELEMENT> | undefined {
		const elementCreator = this.elementCreator;
		if( elementCreator ) {
			return ( container: HTMLElement ): ELEMENT | null => {
				return elementCreator( shape, Date.now(), container );
			};
		}
		return undefined;
	}

	protected toWhen( shape: EShape, runtime: EShapeRuntime ): UtilHtmlElementWhen | undefined {
		const value = this.condition( shape, Date.now() );
		if( value != null && value in UtilHtmlElementWhen ) {
			return UtilHtmlElementWhen[ value as (keyof typeof UtilHtmlElementWhen) ];
		}
		return undefined;
	}

	protected containsPoint( shape: EShape, runtime: EShapeRuntime, point: Point ): boolean {
		if( shape.visible ) {
			const local = EShapeActionRuntimeMiscHtmlElement.WORK || new Point();
			EShapeActionRuntimeMiscHtmlElement.WORK = local;
			shape.toLocal( point, undefined, local );
			return shape.contains( local ) != null;
		}
		return false;
	}

	protected getPadding( shape: EShape, runtime: EShapeRuntime ): UtilHtmlElementPadding | null {
		return null;
	}

	protected getElementRect( shape: EShape, runtime: EShapeRuntime, resolution: number, point: Point, result: Rectangle ): Rectangle | null {
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

	protected getElementMatrix( shape: EShape, runtime: EShapeRuntime ): Matrix | null {
		shape.updateTransform();
		return shape.transform.worldTransform;
	}

	protected getClipperToRect( shape: EShape, runtime: EShapeRuntime, resolution: number, point: Point, result: Rectangle ): Rectangle | null {
		const container = EShapeActionRuntimes.toContainer( shape );
		return UtilHtmlElement.getClipperRect( container, shape, resolution, point, result );
	}

	onRender( shape: EShape, runtime: EShapeRuntime, time: number, renderer: Renderer ): void {
		this.getUtil( shape, runtime ).onRender( renderer );
	}

	onFocus( shape: EShape, runtime: EShapeRuntime ): void {
		this.getUtil( shape, runtime ).onFocus();
	}

	onBlur( shape: EShape, runtime: EShapeRuntime ): void {
		this.getUtil( shape, runtime ).onBlur();
	}

	onDownThisBefore( shape: EShape, runtime: EShapeRuntime, e: interaction.InteractionEvent | KeyboardEvent ): void {
		this.getUtil( shape, runtime ).onDownThisBefore( e );
	}

	onDownThisAfter( shape: EShape, runtime: EShapeRuntime, e: interaction.InteractionEvent | KeyboardEvent ): void {
		this.getUtil( shape, runtime ).onDownThisAfter( e );
	}

	onDblClick( shape: EShape, runtime: EShapeRuntime, e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager ): void {
		this.getUtil( shape, runtime ).onDblClick( e, interactionManager );
	}
}
