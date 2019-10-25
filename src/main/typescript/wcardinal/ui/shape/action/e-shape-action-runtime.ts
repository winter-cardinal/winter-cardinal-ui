/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "../../d-applications";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";

export type ACTION_EXPRESSION<T> = ( shape: EShape, time: number ) => T;

export class EShapeActionRuntime {
	reset: EShapeRuntimeReset;

	constructor( reset?: EShapeRuntimeReset ) {
		this.reset = reset || EShapeRuntimeReset.NONE;
	}

	parseExpression<T>( expression: string, def: ACTION_EXPRESSION<T>, defLiteral: string ): ACTION_EXPRESSION<T> {
		if( expression.trim().length <= 0 ) {
			return def;
		}

		try {
			return Function(
				"shape", "time",
				`try{ with( shape ) { return (${expression}); } } catch( e ) { return ${defLiteral}; }`
			) as ACTION_EXPRESSION<T>;
		} catch( e ) {
			return def;
		}
	}

	emit( name: string, shape: EShape, parameter1?: unknown, parameter2?: unknown ): void {
		if( parameter1 === undefined ) {
			shape.emit( name, shape );
		} else if( parameter2 === undefined ) {
			shape.emit( name, shape, parameter1 );
		} else {
			shape.emit( name, shape, parameter1, parameter2 );
		}

		const application = DApplications.getInstance() as any;
		if( "shape" in application ) {
			if( parameter1 === undefined ) {
				application.shape.emit( name, shape );
			} else if( parameter2 === undefined ) {
				application.shape.emit( name, shape, parameter1 );
			} else {
				application.shape.emit( name, shape, parameter1, parameter2 );
			}
		}
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		// OVERRIDE THIS
	}
}
