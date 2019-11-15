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

	// Literals
	PARENT,
	SELF,
	PADDING,
	CURRENT,
	NUMBER
}

type NodeTypeOperator = NodeType.SUB_OR_MINUS | NodeType.ADD_OR_PLUS |
	NodeType.SUB | NodeType.ADD | NodeType.MUL | NodeType.DIV |
	NodeType.OPEN | NodeType.CLOSE;
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

interface NodeLiteral {
	[ 0 ]: NodeTypeLiteral;
	[ 1 ]: number;
}

type NodeOrToken = Token | NodeOrTokenParensesis | NodeOrTokenUnary | NodeOrTokenArithmetic;

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

type Node = NodeParensesis | NodeUnary | NodeArithmetic | NodeLiteral;

const TOKEN_MAPPING_OPERATOR: { [ token: string ]: NodeTypeOperator | undefined } = {
	"+": NodeType.ADD_OR_PLUS,
	"-": NodeType.SUB_OR_MINUS,
	"*": NodeType.MUL,
	"/": NodeType.DIV,
	"(": NodeType.OPEN,
	")": NodeType.CLOSE
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
 * Examples
 *
 * * `90%`: 0.9 * parent value
 * * `50s`: 0.5 * self value
 * * `90% - 50s`: 0.9 * parent value - 0.5 * self value
 * * `90% - (50s + 100) * 2`: 0.9 * parent value - ( 0.5 * self value + 100 ) * 2
 */
export class DScalarExpression implements DScalar {
	protected _node: Node;

	constructor( expression: string ) {
		const nodes: NodeOrToken[] = this.toToken( expression );
		this.toParensesis( nodes, 0 );
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

	toParensesis( nodes: NodeOrToken[], from: number ): void {
		for( let i = from, imax = nodes.length; i < imax; ++i ) {
			const inode = nodes[ i ];
			if( inode === NodeType.OPEN ) {
				for( let j = i + 1, jmax = nodes.length; j < jmax; ++j ) {
					const jnode = nodes[ j ];
					switch( jnode ) {
					case NodeType.CLOSE:
						const operand = nodes.splice( i + 1, j - i );
						operand.length -= 1;
						nodes[ i ] = [ NodeType.PARENSESIS, operand ];
						return;
					case NodeType.OPEN:
						this.toParensesis( nodes, j );
						jmax = nodes.length;
						break;
					}
				}

				throw new Error( `Malformed parensesis` );
			}
		}
	}

	toUnaryNode( node: NodeOrToken ): void {
		if( ! utilIsNumber( node ) && node[ 0 ] === NodeType.PARENSESIS ) {
			this.toUnary( node[ 1 ] );
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
			if( node[ 0 ] === NodeType.PARENSESIS ) {
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
		const tokenRegEx = /(?:\+|-|\*|\/|\(|\)|(?:\d+(?:\.\d*)?[%psc]?))/g;
		const tokens: Token[] = [];
		while( true ) {
			const matched = tokenRegEx.exec( expression );
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
			return this.evaluate( node[ 1 ][ 0 ], parent, self, padding, current );

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
