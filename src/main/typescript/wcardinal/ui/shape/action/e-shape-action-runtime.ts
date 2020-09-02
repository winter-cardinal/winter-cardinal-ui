/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCanvasContainer } from "../../d-canvas-container";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";

export type EShapeActionExpression<T> = ( shape: EShape, time: number ) => T;

export class EShapeActionRuntime {
	reset: EShapeRuntimeReset;

	constructor( reset?: EShapeRuntimeReset ) {
		this.reset = reset || EShapeRuntimeReset.NONE;
	}

	toExpression<T>(
		expression: string, def: EShapeActionExpression<T>, defLiteral: string
	): EShapeActionExpression<T> {
		if( expression.trim().length <= 0 ) {
			return def;
		}

		try {
			return Function(
				"shape", "time",
				`try{` +
					`with( shape ) {` +
						`with( state ) {` +
							`return (${expression});` +
						`}` +
					`}` +
				`} catch( e ) {` +
					`return ${defLiteral};` +
				`}`
			) as EShapeActionExpression<T>;
		} catch( e ) {
			return def;
		}
	}

	protected toContainer( shape: EShape ): any | null {
		let current: { parent: any; } = shape;
		while( current != null ) {
			if( current instanceof DCanvasContainer ) {
				return current;
			}
			current = current.parent;
		}
		return null;
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		// OVERRIDE THIS
	}
}
