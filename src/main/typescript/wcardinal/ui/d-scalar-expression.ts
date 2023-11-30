/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DScalar } from "./d-scalar";
import { isNumber } from "./util/is-number";

export const DScalarExpressionNodeType = {
	// Parensesis
	OPEN: 0,
	CLOSE: 1,
	PARENSESIS: 2,

	// Operations
	ADD_OR_PLUS: 3,
	SUB_OR_MINUS: 4,

	PLUS: 5,
	MINUS: 6,

	ADD: 7,
	SUB: 8,
	MUL: 9,
	DIV: 10,

	// Functions
	MIN: 11,
	MAX: 12,
	COMMA: 13,

	// Literals
	PARENT: 14,
	SELF: 15,
	PADDING: 16,
	CURRENT: 17,
	NUMBER: 18
} as const;

export type DScalarExpressionNodeType =
	(typeof DScalarExpressionNodeType)[keyof typeof DScalarExpressionNodeType];

export type DScalarExpressionNodeTypeOperator =
	| typeof DScalarExpressionNodeType.SUB_OR_MINUS
	| typeof DScalarExpressionNodeType.ADD_OR_PLUS
	| typeof DScalarExpressionNodeType.SUB
	| typeof DScalarExpressionNodeType.ADD
	| typeof DScalarExpressionNodeType.MUL
	| typeof DScalarExpressionNodeType.DIV
	| typeof DScalarExpressionNodeType.OPEN
	| typeof DScalarExpressionNodeType.CLOSE
	| typeof DScalarExpressionNodeType.MIN
	| typeof DScalarExpressionNodeType.MAX
	| typeof DScalarExpressionNodeType.COMMA;

export type DScalarExpressionNodeTypeLiteral =
	| typeof DScalarExpressionNodeType.NUMBER
	| typeof DScalarExpressionNodeType.PARENT
	| typeof DScalarExpressionNodeType.SELF
	| typeof DScalarExpressionNodeType.PADDING
	| typeof DScalarExpressionNodeType.CURRENT;

export type DScalarExpressionToken =
	| DScalarExpressionNodeTypeOperator
	| [DScalarExpressionNodeTypeLiteral, number];

export interface DScalarExpressionNodeOrTokenParensesis {
	[0]: typeof DScalarExpressionNodeType.PARENSESIS;
	[1]: DScalarExpressionNodeOrToken[];
}

export interface DScalarExpressionNodeOrTokenUnary {
	[0]: typeof DScalarExpressionNodeType.PLUS | typeof DScalarExpressionNodeType.MINUS;
	[1]: DScalarExpressionNodeOrToken;
}

export type DScalarExpressionNodeArithmeticOperator =
	| typeof DScalarExpressionNodeType.SUB
	| typeof DScalarExpressionNodeType.ADD
	| typeof DScalarExpressionNodeType.MUL
	| typeof DScalarExpressionNodeType.DIV;

export interface DScalarExpressionNodeOrTokenArithmetic {
	[0]: DScalarExpressionNodeArithmeticOperator;
	[1]: DScalarExpressionNodeOrToken;
	[2]: DScalarExpressionNodeOrToken;
}

export interface DScalarExpressionNodeOrTokenFunction {
	[0]: typeof DScalarExpressionNodeType.MIN | typeof DScalarExpressionNodeType.MAX;
	[1]: DScalarExpressionNodeOrToken[];
}

export type DScalarExpressionNodeOrToken =
	| DScalarExpressionToken
	| DScalarExpressionNodeOrTokenParensesis
	| DScalarExpressionNodeOrTokenUnary
	| DScalarExpressionNodeOrTokenArithmetic
	| DScalarExpressionNodeOrTokenFunction;

export interface DScalarExpressionNodeLiteral {
	[0]: DScalarExpressionNodeTypeLiteral;
	[1]: number;
}

export interface DScalarExpressionNodeParensesis {
	[0]: typeof DScalarExpressionNodeType.PARENSESIS;
	[1]: DScalarExpressionNode[];
}

export interface DScalarExpressionNodeUnary {
	[0]: typeof DScalarExpressionNodeType.PLUS | typeof DScalarExpressionNodeType.MINUS;
	[1]: DScalarExpressionNode;
}

export interface DScalarExpressionNodeArithmetic {
	[0]: DScalarExpressionNodeArithmeticOperator;
	[1]: DScalarExpressionNode;
	[2]: DScalarExpressionNode;
}

export interface DScalarExpressionNodeFunction {
	[0]: typeof DScalarExpressionNodeType.MIN | typeof DScalarExpressionNodeType.MAX;
	[1]: DScalarExpressionNode[];
}

export type DScalarExpressionNode =
	| DScalarExpressionNodeParensesis
	| DScalarExpressionNodeUnary
	| DScalarExpressionNodeArithmetic
	| DScalarExpressionNodeFunction
	| DScalarExpressionNodeLiteral;

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
	protected _node: DScalarExpressionNode;

	constructor(expression: string) {
		const nodes: DScalarExpressionNodeOrToken[] = this.toToken(expression);
		let i = 0;
		do {
			i = this.toParensesis(nodes, i);
		} while (i < nodes.length);
		this.toUnary(nodes);
		this.toArithmetic(nodes, DScalarExpressionNodeType.MUL, DScalarExpressionNodeType.DIV);
		this.toArithmetic(nodes, DScalarExpressionNodeType.ADD, DScalarExpressionNodeType.SUB);
		if (nodes.length === 1) {
			const node = nodes[0];
			if (!isNumber(node)) {
				this._node = node as any;
				return;
			}
		}
		throw new Error(`Failed to parse '${expression}'`);
	}

	toParensesis(nodes: DScalarExpressionNodeOrToken[], ifrom: number): number {
		let ito = nodes.length;
		for (let i = ifrom; i < ito; ++i) {
			const inode = nodes[i];
			if (inode === DScalarExpressionNodeType.OPEN) {
				let istart = i;
				let nodeType: DScalarExpressionNodeType = DScalarExpressionNodeType.PARENSESIS;
				if (0 < i) {
					const nodeTypePrev = nodes[i - 1];
					if (
						nodeTypePrev === DScalarExpressionNodeType.MIN ||
						nodeTypePrev === DScalarExpressionNodeType.MAX
					) {
						istart -= 1;
						nodeType = nodeTypePrev;
					}
				}
				for (let j = i + 1; j < ito; ++j) {
					const jnode = nodes[j];
					if (jnode === DScalarExpressionNodeType.CLOSE) {
						nodes[istart] = [nodeType, this.toComma(nodes, i + 1, j)];
						nodes.splice(istart + 1, j - istart);
						return istart + 1;
					} else if (jnode === DScalarExpressionNodeType.OPEN) {
						j = this.toParensesis(nodes, j) - 1;
						ito = nodes.length;
					}
				}
				throw new Error(`Malformed parensesis`);
			}
		}
		return ito;
	}

	toCommaOf(
		nodes: DScalarExpressionNodeOrToken[],
		ifrom: number,
		ito: number
	): DScalarExpressionNodeOrToken {
		const l = ito - ifrom;
		if (l <= 0) {
			return [DScalarExpressionNodeType.NUMBER, 0];
		} else if (l <= 1) {
			return nodes[ifrom];
		} else {
			const operand: DScalarExpressionNodeOrToken[] = [];
			for (let j = ifrom; j < ito; ++j) {
				operand.push(nodes[j]);
			}
			return [DScalarExpressionNodeType.PARENSESIS, operand];
		}
	}

	toComma(
		nodes: DScalarExpressionNodeOrToken[],
		ifrom: number,
		ito: number
	): DScalarExpressionNodeOrToken[] {
		let result: DScalarExpressionNodeOrToken[] | null = null;
		let iprev = ifrom;
		for (let i = ifrom; i < ito; ++i) {
			const node = nodes[i];
			if (node === DScalarExpressionNodeType.COMMA) {
				result = result || [];
				result.push(this.toCommaOf(nodes, iprev, i));
				iprev = i + 1;
			}
		}
		if (iprev < ito) {
			if (result == null) {
				const operand: DScalarExpressionNodeOrToken[] = [];
				for (let i = iprev; i < ito; ++i) {
					operand.push(nodes[i]);
				}
				return operand;
			} else {
				result.push(this.toCommaOf(nodes, iprev, ito));
			}
		}
		return result || [];
	}

	toUnaryNode(node: DScalarExpressionNodeOrToken): void {
		if (!isNumber(node)) {
			if (
				node[0] === DScalarExpressionNodeType.PARENSESIS ||
				node[0] === DScalarExpressionNodeType.MIN ||
				node[0] === DScalarExpressionNodeType.MAX
			) {
				this.toUnary(node[1]);
			}
		}
	}

	toUnary(nodes: DScalarExpressionNodeOrToken[]): void {
		for (let i = 0, imax = nodes.length; i < imax; ++i) {
			const node = nodes[i];
			if (
				node === DScalarExpressionNodeType.ADD_OR_PLUS ||
				node === DScalarExpressionNodeType.SUB_OR_MINUS
			) {
				if (i <= 0 || isNumber(nodes[i - 1])) {
					if (i + 1 < imax && !isNumber(nodes[i + 1])) {
						const operand = nodes.splice(i + 1, 1)[0];
						const type =
							node === DScalarExpressionNodeType.ADD_OR_PLUS
								? DScalarExpressionNodeType.PLUS
								: DScalarExpressionNodeType.MINUS;
						nodes[i] = [type, operand];
						imax = nodes.length;
						this.toUnaryNode(operand);
					} else {
						throw new Error("Malformed unary operator");
					}
				} else {
					const type =
						node === DScalarExpressionNodeType.ADD_OR_PLUS
							? DScalarExpressionNodeType.ADD
							: DScalarExpressionNodeType.SUB;
					nodes[i] = type;
				}
			} else {
				this.toUnaryNode(node);
				imax = nodes.length;
			}
		}
	}

	toArithmeticNode(
		node: DScalarExpressionNodeOrToken,
		operatorA: DScalarExpressionNodeArithmeticOperator,
		operatorB: DScalarExpressionNodeArithmeticOperator
	): void {
		if (!isNumber(node)) {
			if (
				node[0] === DScalarExpressionNodeType.PARENSESIS ||
				node[0] === DScalarExpressionNodeType.MIN ||
				node[0] === DScalarExpressionNodeType.MAX
			) {
				this.toArithmetic(node[1], operatorA, operatorB);
			} else if (
				node[0] === DScalarExpressionNodeType.PLUS ||
				node[0] === DScalarExpressionNodeType.MINUS
			) {
				this.toArithmeticNode(node[1], operatorA, operatorB);
			} else if (
				node[0] === DScalarExpressionNodeType.ADD ||
				node[0] === DScalarExpressionNodeType.SUB ||
				node[0] === DScalarExpressionNodeType.MUL ||
				node[0] === DScalarExpressionNodeType.DIV
			) {
				this.toArithmeticNode(node[1], operatorA, operatorB);
				this.toArithmeticNode(node[2], operatorA, operatorB);
			}
		}
	}

	toArithmetic(
		nodes: DScalarExpressionNodeOrToken[],
		operatorA: DScalarExpressionNodeArithmeticOperator,
		operatorB: DScalarExpressionNodeArithmeticOperator
	): void {
		for (let i = 0, imax = nodes.length; i < imax; ++i) {
			const node = nodes[i];
			if (node === operatorA || node === operatorB) {
				if (0 < i && i + 1 < imax) {
					const left = nodes[i - 1];
					const right = nodes[i + 1];
					if (!isNumber(left) && !isNumber(right)) {
						nodes.splice(i, 2);
						nodes[i - 1] = [node, left, right];
						i -= 1;
						imax = nodes.length;
						this.toArithmeticNode(left, operatorA, operatorB);
						this.toArithmeticNode(right, operatorA, operatorB);
						continue;
					}
				}
				throw new Error(`Malformed operands for the operator ${node}`);
			} else {
				this.toArithmeticNode(node, operatorA, operatorB);
				imax = nodes.length;
			}
		}
	}

	toToken(expression: string): DScalarExpressionToken[] {
		const tokens: DScalarExpressionToken[] = [];
		while (true) {
			const matched = DScalarExpression.TOKEN_REGEX.exec(expression);
			if (matched != null) {
				const token = matched[0];
				const tokenTypeOperator = this.toTokenOperator(token);
				if (tokenTypeOperator != null) {
					tokens.push(tokenTypeOperator);
				} else {
					const parsedToken = parseFloat(token);
					if (parsedToken !== parsedToken) {
						throw new Error(
							`Unexpected token '${token}' at ${matched.index} in '${expression}'`
						);
					}

					const tokenTypeLiteral = this.toTokenLiteral(token);
					if (tokenTypeLiteral != null) {
						tokens.push([tokenTypeLiteral, parsedToken * 0.01]);
					} else {
						tokens.push([DScalarExpressionNodeType.NUMBER, parsedToken]);
					}
				}
			} else {
				break;
			}
		}
		return tokens;
	}

	toTokenOperator(token: string): DScalarExpressionNodeTypeOperator | null {
		switch (token) {
			case "+":
				return DScalarExpressionNodeType.ADD_OR_PLUS;
			case "-":
				return DScalarExpressionNodeType.SUB_OR_MINUS;
			case "*":
				return DScalarExpressionNodeType.MUL;
			case "/":
				return DScalarExpressionNodeType.DIV;
			case "(":
				return DScalarExpressionNodeType.OPEN;
			case ")":
				return DScalarExpressionNodeType.CLOSE;
			case ",":
				return DScalarExpressionNodeType.COMMA;
			case "min":
				return DScalarExpressionNodeType.MIN;
			case "max":
				return DScalarExpressionNodeType.MAX;
		}
		return null;
	}

	toTokenLiteral(token: string): DScalarExpressionNodeTypeLiteral | null {
		const tokenLength = token.length;
		if (0 < tokenLength) {
			switch (token[tokenLength - 1]) {
				case "%":
					return DScalarExpressionNodeType.PARENT;
				case "s":
					return DScalarExpressionNodeType.SELF;
				case "p":
					return DScalarExpressionNodeType.PADDING;
				case "c":
					return DScalarExpressionNodeType.CURRENT;
			}
		}
		return null;
	}

	protected evaluate(
		node: DScalarExpressionNode,
		parent: number,
		self: number,
		padding: number,
		current: number
	): number {
		switch (node[0]) {
			case DScalarExpressionNodeType.PARENSESIS:
				const nodes = node[1];
				return this.evaluate(nodes[nodes.length - 1], parent, self, padding, current);

			// Unary operators
			case DScalarExpressionNodeType.PLUS:
				return +this.evaluate(node[1], parent, self, padding, current);

			case DScalarExpressionNodeType.MINUS:
				return -this.evaluate(node[1], parent, self, padding, current);

			// Four arithmetic operators
			case DScalarExpressionNodeType.ADD:
				return (
					this.evaluate(node[1], parent, self, padding, current) +
					this.evaluate(node[2], parent, self, padding, current)
				);
			case DScalarExpressionNodeType.SUB:
				return (
					this.evaluate(node[1], parent, self, padding, current) -
					this.evaluate(node[2], parent, self, padding, current)
				);
			case DScalarExpressionNodeType.MUL:
				return (
					this.evaluate(node[1], parent, self, padding, current) *
					this.evaluate(node[2], parent, self, padding, current)
				);
			case DScalarExpressionNodeType.DIV:
				return (
					this.evaluate(node[1], parent, self, padding, current) /
					this.evaluate(node[2], parent, self, padding, current)
				);

			// Functions
			case DScalarExpressionNodeType.MIN:
				if (0 < node[1].length) {
					const args = node[1];
					let result = this.evaluate(args[0], parent, self, padding, current);
					for (let i = 1, imax = args.length; i < imax; ++i) {
						result = Math.min(
							result,
							this.evaluate(args[i], parent, self, padding, current)
						);
					}
					return result;
				}
				return 0;
			case DScalarExpressionNodeType.MAX:
				if (0 < node[1].length) {
					const args = node[1];
					let result = this.evaluate(args[0], parent, self, padding, current);
					for (let i = 1, imax = args.length; i < imax; ++i) {
						result = Math.max(
							result,
							this.evaluate(args[i], parent, self, padding, current)
						);
					}
					return result;
				}
				return 0;

			// Literals
			case DScalarExpressionNodeType.PARENT:
				return node[1] * parent;
			case DScalarExpressionNodeType.SELF:
				return node[1] * self;
			case DScalarExpressionNodeType.PADDING:
				return node[1] * padding;
			case DScalarExpressionNodeType.CURRENT:
				return node[1] * current;
			case DScalarExpressionNodeType.NUMBER:
				return node[1];
		}

		return 0;
	}

	calculate(parent: number, self: number, padding: number, current: number): number {
		return this.evaluate(this._node, parent, self, padding, current);
	}
}
