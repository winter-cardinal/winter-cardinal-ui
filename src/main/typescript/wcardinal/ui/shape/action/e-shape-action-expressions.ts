/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionExpression } from "./e-shape-action-expression";

export class EShapeActionExpressions {
	static NULL = () => null;
	static ZERO = () => 0;
	static ONE = () => 1;
	static ONE_HUNDRED = () => 100;
	static EMPTY = () => "";
	static TRUE = () => true;
	static FALSE = () => false;

	static from<T>(
		expression: string,
		caster: string,
		def: EShapeActionExpression<T>,
		defLiteral: string,
		nullable: boolean
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
				`}`
			) as EShapeActionExpression<T>;
		} catch( e ) {
			return def;
		}
	}

	static ofNumberOrNull( expression: string ): EShapeActionExpression<number | null> {
		return this.from<number | null>( expression, "Number", this.NULL, "null", true );
	}

	static ofStringOrNull( expression: string ): EShapeActionExpression<string | null> {
		return this.from<string | null>( expression, "String", this.NULL, "null", true );
	}

	static ofUnknownOrNull( expression: string ): EShapeActionExpression<unknown | null> {
		return this.from( expression, "", this.NULL, "null", false );
	}

	static ofNumber( expression: string ): EShapeActionExpression<number> {
		return this.from( expression, "Number", this.ZERO, "0", false );
	}

	static ofString( expression: string ): EShapeActionExpression<string> {
		return this.from( expression, "String", this.EMPTY, '""', false );
	}

	static ofBoolean( expression: string, def: boolean ): EShapeActionExpression<boolean> {
		if( def ) {
			return this.from( expression, "Boolean", this.TRUE, "true", false );
		} else {
			return this.from( expression, "Boolean", this.FALSE, "false", false );
		}
	}
}
