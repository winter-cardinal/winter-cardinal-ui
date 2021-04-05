/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionExpression, EShapeActionExpressionWithParameter } from "./e-shape-action-expression";

export class EShapeActionExpressions {
	static NULL = (): null => null;
	static ZERO = (): number => 0;
	static ONE = (): number => 1;
	static ONE_HUNDRED = (): number => 100;
	static EMPTY = (): string => "";
	static TRUE = (): boolean => true;
	static FALSE = (): boolean => false;

	static from<T, DEF>(
		expression: string, caster: string, def: DEF,
		defLiteral: string, nullable: boolean
	): EShapeActionExpression<T> | DEF;
	static from<T, P, DEF>(
		expression: string, caster: string, def: DEF,
		defLiteral: string, nullable: boolean, parameter: string
	): EShapeActionExpressionWithParameter<T, P> | DEF;
	static from<T, P>(
		expression: string, caster: string, def: EShapeActionExpression<T> | EShapeActionExpressionWithParameter<T, P> | undefined,
		defLiteral: string, nullable: boolean, parameter?: string
	): EShapeActionExpression<T> | EShapeActionExpressionWithParameter<T, P> | undefined {
		if( expression.trim().length <= 0 ) {
			return def;
		}

		try {
			const body = `` +
				`try{` +
					`with( shape ) {` +
						`with( state ) {` +
							( nullable ?
								(
									`var result = (${expression});` +
									`return (result != null ? ${caster}(result) : null);`
								) :
								`return ${caster}(${expression});`
							) +
						`}` +
					`}` +
				`} catch( e ) {` +
					`return ${defLiteral};` +
				`}`;
			if( parameter == null ) {
				return Function(
					"shape", "time", body
				) as EShapeActionExpression<T>;
			} else {
				return Function(
					"shape", "time", parameter, body
				) as EShapeActionExpressionWithParameter<T, P>;
			}
		} catch( e ) {
			return def;
		}
	}

	static ofNumberOrNull( expression: string ): EShapeActionExpression<number | null> {
		return this.from( expression, "Number", this.NULL, "null", true );
	}

	static ofStringOrNull( expression: string ): EShapeActionExpression<string | null> {
		return this.from( expression, "String", this.NULL, "null", true );
	}

	static ofUnknown( expression: string ): EShapeActionExpression<unknown> {
		return this.from( expression, "", this.NULL, "null", false );
	}

	static ofNumber( expression: string ): EShapeActionExpression<number> {
		return this.from( expression, "Number", this.ZERO, "0", false );
	}

	static ofNumberOrOne( expression: string ): EShapeActionExpression<number> {
		return this.from( expression, "Number", this.ONE, "1", false );
	}

	static ofNumberOrOneHundred( expression: string ): EShapeActionExpression<number> {
		return this.from( expression, "Number", this.ONE_HUNDRED, "100", false );
	}

	static ofString( expression: string ): EShapeActionExpression<string> {
		return this.from( expression, "String", this.EMPTY, "\"\"", false );
	}

	static ofBoolean( expression: string ): EShapeActionExpression<boolean> {
		return this.from( expression, "Boolean", this.TRUE, "true", false );
	}

	static ofBooleanOrTrue( expression: string ): EShapeActionExpression<boolean> {
		return this.from( expression, "Boolean", this.TRUE, "true", false );
	}

	static ofBooleanOrFalse( expression: string ): EShapeActionExpression<boolean> {
		return this.from( expression, "Boolean", this.FALSE, "false", false );
	}

	static ofElementOrNull<ELEMENT extends HTMLElement>( expression: string ): EShapeActionExpressionWithParameter<ELEMENT | null, HTMLElement> | undefined {
		return this.from( expression, "", undefined, "null", false, "container" );
	}
}
