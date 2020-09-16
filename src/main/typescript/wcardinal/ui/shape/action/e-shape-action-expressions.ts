/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionExpression } from "./e-shape-action-expression";

export class EShapeActionExpressions {
	static from<T>(
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
}
