/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DHtmlElementState } from "../../d-html-element-state";
import { UtilHtmlElement, UtilHtmlElementCreator } from "../../util/util-html-element";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpressionWithParameter } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeMiscHtmlElementBase } from "./e-shape-action-runtime-misc-html-element-base";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";

export class EShapeActionRuntimeMiscHtmlElement<
	ELEMENT extends HTMLElement = HTMLElement,
	UTIL extends UtilHtmlElement<ELEMENT> = UtilHtmlElement<ELEMENT>
> extends EShapeActionRuntimeMiscHtmlElementBase<ELEMENT, UTIL> {
	protected elementCreator?: EShapeActionExpressionWithParameter<ELEMENT | null, HTMLElement>;
	protected noPointerEvent: boolean;

	constructor( value: EShapeActionValueMisc ) {
		super( value );
		this.elementCreator = EShapeActionExpressions.ofElementOrNull( value.value );
		this.noPointerEvent = ( value.subtype === EShapeActionValueMiscType.HTML_ELEMENT_WITHOUT_POINTER_EVENTS );
	}

	protected newUtil( shape: EShape, runtime: EShapeRuntime ): UTIL {
		if( this.noPointerEvent ) {
			shape.state.add( DHtmlElementState.NO_POINTER_EVENTS );
		}
		return super.newUtil( shape, runtime );
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
}
