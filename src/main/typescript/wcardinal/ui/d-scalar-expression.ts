/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DScalar } from "./d-scalar";
import { utilIsNumber } from "./util/util-is-number";

const enum NodeType {
	// Parensesis
	OPEN,
	CLOSE,
	PARENSESIS,

	// Operations
	ADD_OR_PLUS,
	SUB_OR_MINUS,

	PLUS,
	MINUS,

	ADD,
	SUB,
	MUL,
	DIV,

	// Functions
	MIN,
	MAX,
	COMMA,

	// Literals
	PARENT,
	SELF,
	PADDING,
	CURRENT,
	NUMBER
}

type NodeTypeOperator = NodeType.SUB_OR_MINUS | NodeType.ADD_OR_PLUS |
	NodeType.SUB | NodeType.ADD | NodeType.MUL | NodeType.DIV |
	NodeType.OPEN | NodeType.CLOSE |
	NodeType.MIN | NodeType.MAX | NodeType.COMMA;
type NodeTypeLiteral = NodeType.NUMBER | NodeType.PARENT | NodeType.SELF | NodeType.PADDING | NodeType.CURRENT;
type Token = NodeTypeOperator | [ NodeTypeLiteral, number ];

interface NodeOrTokenParensesis {
	[ 0 ]: NodeType.PARENSESIS;
	[ 1 ]: NodeOrToken[];
}

interface NodeOrTokenUnary {
	[ 0 ]: NodeType.PLUS | NodeType.MINUS;
	[ 1 ]: NodeOrToken;
}

type NodeArithmeticOperator = NodeType.SUB | NodeType.ADD | NodeType.MUL | NodeType.DIV;

interface NodeOrTokenArithmetic {
	[ 0 ]: NodeArithmeticOperator;
	[ 1 ]: NodeOrToken;
	[ 2 ]: NodeOrToken;
}

interface NodeOrTokenFunction {
	[ 0 ]: NodeType.MIN | NodeType.MAX;
	[ 1 ]: NodeOrToken[];
}

type NodeOrToken = Token | NodeOrTokenParensesis | NodeOrTokenUnary | NodeOrTokenArithmetic | NodeOrTokenFunction;

interface NodeLiteral {
	[ 0 ]: NodeTypeLiteral;
	[ 1 ]: number;
}

interface NodeParensesis {
	[ 0 ]: NodeType.PARENSESIS;
	[ 1 ]: Node[];
}

interface NodeUnary {
	[ 0 ]: NodeType.PLUS | NodeType.MINUS;
	[ 1 ]: Node;
}

interface NodeArithmetic {
	[ 0 ]: NodeArithmeticOperator;
	[ 1 ]: Node;
	[ 2 ]: Node;
}

interface NodeFunction {
	[ 0 ]: NodeType.MIN | NodeType.MAX;
	[ 1 ]: Node[];
}

type Node = NodeParensesis | NodeUnary | NodeArithmetic | NodeFunction | NodeLiteral;

const TOKEN_MAPPING_OPERATOR: { [ token: string ]: NodeTypeOperator | undefined } = {
	"+": NodeType.ADD_OR_PLUS,
	"-": NodeType.SUB_OR_MINUS,
	"*": NodeType.MUL,
	"/": NodeType.DIV,
	"(": NodeType.OPEN,
	")": NodeType.CLOSE,
	",": NodeType.COMMA,
	"min": NodeType.MIN,
	"max": NodeType.MAX
};

const TOKEN_MAPPING_LITERAL: { [ token: string ]: NodeTypeLiteral | undefined } = {
	"%": NodeType.PARENT,
	"s": NodeType.SELF,
	"p": NodeType.PADDING,
	"c": NodeType.CURRENT
};

/**
 * Parser and evaluator of the scalar expressions like `100% - 50s`.
 *
 * Literals
 *
 * * x%: 0.01 * x * parent value
 * * xs: 0.01 * x * self value
 * * xp: 0.01 * x * padding value
 * * xc: 0.01 * x * current value
 *
 * Operators
 *
 * * `+`
 * * `-`
 * * `*`
 * * `/`
 * * `(` and `)`
 *
 * Functions
 *
 * * min( a, b, ... )
 * * max( a, b, ... )
 *
 * Examples
 *
 * * `90%`: 0.9 * parent value
 * * `50s`: 0.5 * self value
 * * `90% - 50s`: 0.9 * parent value - 0.5 * self value
 * * `90% - (50s + 100) * 2`: 0.9 * parent value - ( 0.5 * self value + 100 ) * 2
 */
export class DScalarExpression implements DScalar {
	protected static TOKEN_REGEX = /(?:\+|-|\*|\/|\(|\)|min|max|,|(?:\d+(?:\.\d*)?[%psc]?))/g;
	protected _node: Node;

	constructor( expression: string ) {
		const nodes: NodeOrToken[] = this.toToken( expression );
		let i = 0;
		do {
			i = this.toParensesis( nodes, i );
		} while( i < nodes.length );
		this.toUnary( nodes );
		this.toArithmetic( nodes, NodeType.MUL, NodeType.DIV );
		this.toArithmetic( nodes, NodeType.ADD, NodeType.SUB );
		if( nodes.length === 1 ) {
			const node = nodes[ 0 ];
			if( ! utilIsNumber( node ) ) {
				this._node = node as any;
				return;
			}
		}
		throw new Error( `Failed to parse '${expression}'` );
	}

	toParensesis( nodes: NodeOrToken[], ifrom: number ): number {
		let ito = nodes.length;
		for( let i = ifrom; i < ito; ++i ) {
			const inode = nodes[ i ];
			if( inode === NodeType.OPEN ) {
				let istart = i;
				let nodeType = NodeType.PARENSESIS;
				if( 0 < i ) {
					const nodeTypePrev = nodes[ i - 1 ];
					if( nodeTypePrev === NodeType.MIN || nodeTypePrev === NodeType.MAX ) {
						istart -= 1;
						nodeType = nodeTypePrev;
					}
				}
				for( let j = i + 1; j < ito; ++j ) {
					const jnode = nodes[ j ];
					if( jnode === NodeType.CLOSE ) {
						nodes[ istart ] = [ nodeType, this.toComma( nodes, i + 1, j ) ];
						nodes.splice( istart + 1, j - istart );
						return istart + 1;
					} else if( jnode === NodeType.OPEN ) {
						j = this.toParensesis( nodes, j ) - 1;
						ito = nodes.length;
					}
				}
				throw new Error( `Malformed parensesis` );
			}
		}
		return ito;
	}

	toCommaOf( nodes: NodeOrToken[], ifrom: number, ito: number ): NodeOrToken {
		const l = ito - ifrom;
		if( l <= 0 ) {
			return [ NodeType.NUMBER, 0 ];
		} else if( l <= 1 ) {
			return nodes[ ifrom ];
		} else {
			const operand: NodeOrToken[] = [];
			for( let j = ifrom; j < ito; ++j ) {
				operand.push( nodes[ j ] );
			}
			return [ NodeType.PARENSESIS, operand ];
		}
	}

	toComma( nodes: NodeOrToken[], ifrom: number, ito: number ): NodeOrToken[] {
		let result: NodeOrToken[] | null = null;
		let iprev = ifrom;
		for( let i = ifrom; i < ito; ++i ) {
			const node = nodes[ i ];
			if( node === NodeType.COMMA ) {
				result = result || [];
				result.push( this.toCommaOf( nodes, iprev, i ) );
				iprev = i + 1;
			}
		}
		if( iprev < ito ) {
			if( result == null ) {
				const operand: NodeOrToken[] = [];
				for( let i = iprev; i < ito; ++i ) {
					operand.push( nodes[ i ] );
				}
				return operand;
			} else {
				result.push( this.toCommaOf( nodes, iprev, ito ) );
			}
		}
		return result || [];
	}

	toUnaryNode( node: NodeOrToken ): void {
		if( ! utilIsNumber( node ) ) {
			if( node[ 0 ] === NodeType.PARENSESIS ||
				node[ 0 ] === NodeType.MIN ||
				node[ 0 ] === NodeType.MAX ) {
				this.toUnary( node[ 1 ] );
			}
		}
	}

	toUnary( nodes: NodeOrToken[] ): void {
		for( let i = 0, imax = nodes.length; i < imax; ++i ) {
			const node = nodes[ i ];
			if( node === NodeType.ADD_OR_PLUS || node === NodeType.SUB_OR_MINUS ) {
				if( i <= 0 || utilIsNumber( nodes[ i - 1 ] ) ) {
					if( i + 1 < imax && ! utilIsNumber( nodes[ i + 1 ] ) ) {
						const operand = nodes.splice( i + 1, 1 )[ 0 ];
						const type = ( node === NodeType.ADD_OR_PLUS ? NodeType.PLUS : NodeType.MINUS );
						nodes[ i ] = [ type, operand ];
						imax = nodes.length;
						this.toUnaryNode( operand );
					} else {
						throw new Error( "Malformed unary operator" );
					}
				} else {
					const type = ( node === NodeType.ADD_OR_PLUS ? NodeType.ADD : NodeType.SUB );
					nodes[ i ] = type;
				}
			} else {
				this.toUnaryNode( node );
				imax = nodes.length;
			}
		}
	}

	toArithmeticNode( node: NodeOrToken, operatorA: NodeArithmeticOperator, operatorB: NodeArithmeticOperator ): void {
		if( ! utilIsNumber( node ) ) {
			if( node[ 0 ] === NodeType.PARENSESIS || node[ 0 ] === NodeType.MIN || node[ 0 ] === NodeType.MAX ) {
				this.toArithmetic( node[ 1 ], operatorA, operatorB );
			} else if( node[ 0 ] === NodeType.PLUS || node[ 0 ] === NodeType.MINUS ) {
				this.toArithmeticNode( node[ 1 ], operatorA, operatorB );
			} else if( node[ 0 ] === NodeType.ADD || node[ 0 ] === NodeType.SUB ||
				node[ 0 ] === NodeType.MUL || node[ 0 ] === NodeType.DIV ) {
				this.toArithmeticNode( node[ 1 ], operatorA, operatorB );
				this.toArithmeticNode( node[ 2 ], operatorA, operatorB );
			}
		}
	}

	toArithmetic( nodes: NodeOrToken[], operatorA: NodeArithmeticOperator, operatorB: NodeArithmeticOperator ): void {
		for( let i = 0, imax = nodes.length; i < imax; ++i ) {
			const node = nodes[ i ];
			if( node === operatorA || node === operatorB ) {
				if( 0 < i && i + 1 < imax ) {
					const left = nodes[ i - 1 ];
					const right = nodes[ i + 1 ];
					if( ! utilIsNumber( left ) && ! utilIsNumber( right ) ) {
						nodes.splice( i, 2 );
						nodes[ i - 1 ] = [ node, left, right ];
						i -= 1;
						imax = nodes.length;
						this.toArithmeticNode( left, operatorA, operatorB );
						this.toArithmeticNode( right, operatorA, operatorB );
						continue;
					}
				}
				throw new Error( `Malformed operands for the operator ${node}` );
			} else {
				this.toArithmeticNode( node, operatorA, operatorB );
				imax = nodes.length;
			}
		}
	}

	toToken( expression: string ): Token[] {
		const tokens: Token[] = [];
		while( true ) {
			const matched = DScalarExpression.TOKEN_REGEX.exec( expression );
			if( matched != null ) {
				const token = matched[ 0 ];
				const tokenTypeOperator = TOKEN_MAPPING_OPERATOR[ token ];
				if( tokenTypeOperator != null ) {
					tokens.push( tokenTypeOperator );
				} else {
					const parsedToken = parseFloat( token );
					if( parsedToken !== parsedToken ) {
						throw new Error( `Unexpected token '${token}' at ${matched.index} in '${expression}'` );
					}

					const tokenTypeLiteral = TOKEN_MAPPING_LITERAL[ token[ token.length - 1 ] ];
					if( tokenTypeLiteral != null ) {
						tokens.push([ tokenTypeLiteral, parsedToken * 0.01 ]);
					} else {
						tokens.push([ NodeType.NUMBER, parsedToken ]);
					}
				}
			} else {
				break;
			}
		}
		return tokens;
	}

	protected evaluate( node: Node, parent: number, self: number, padding: number, current: number ): number {
		switch( node[ 0 ] ) {
		case NodeType.PARENSESIS:
			const nodes = node[ 1 ];
			return this.evaluate( nodes[ nodes.length - 1 ], parent, self, padding, current );

		// Unary operators
		case NodeType.PLUS:
			return + this.evaluate( node[ 1 ], parent, self, padding, current );

		case NodeType.MINUS:
			return - this.evaluate( node[ 1 ], parent, self, padding, current );

		// Four arithmetic operators
		case NodeType.ADD:
			return this.evaluate( node[ 1 ], parent, self, padding, current ) +
				this.evaluate( node[ 2 ], parent, self, padding, current );
		case NodeType.SUB:
			return this.evaluate( node[ 1 ], parent, self, padding, current ) -
				this.evaluate( node[ 2 ], parent, self, padding, current );
		case NodeType.MUL:
			return this.evaluate( node[ 1 ], parent, self, padding, current ) *
				this.evaluate( node[ 2 ], parent, self, padding, current );
		case NodeType.DIV:
			return this.evaluate( node[ 1 ], parent, self, padding, current ) /
				this.evaluate( node[ 2 ], parent, self, padding, current );

		// Functions
		case NodeType.MIN:
			if( 0 < node[ 1 ].length ) {
				const args = node[ 1 ];
				let result = this.evaluate( args[ 0 ], parent, self, padding, current );
				for( let i = 1, imax = args.length; i < imax; ++i ) {
					result = Math.min( result, this.evaluate( args[ i ], parent, self, padding, current ) );
				}
				return result;
			}
			return 0;
		case NodeType.MAX:
			if( 0 < node[ 1 ].length ) {
				const args = node[ 1 ];
				let result = this.evaluate( args[ 0 ], parent, self, padding, current );
				for( let i = 1, imax = args.length; i < imax; ++i ) {
					result = Math.max( result, this.evaluate( args[ i ], parent, self, padding, current ) );
				}
				return result;
			}
			return 0;

		// Literals
		case NodeType.PARENT:
			return node[ 1 ] * parent;
		case NodeType.SELF:
			return node[ 1 ] * self;
		case NodeType.PADDING:
			return node[ 1 ] * padding;
		case NodeType.CURRENT:
			return node[ 1 ] * current;
		case NodeType.NUMBER:
			return node[ 1 ];
		}

		return 0;
	}

	calculate( parent: number, self: number, padding: number, current: number ): number {
		return this.evaluate( this._node, parent, self, padding, current );
	}
}
