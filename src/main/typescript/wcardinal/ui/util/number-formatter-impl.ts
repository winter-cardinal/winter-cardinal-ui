/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNode } from "./format-node/format-node";
import { FormatNodeA } from "./format-node/format-node-a-large";
import { FormatNodea } from "./format-node/format-node-a-small";
import { FormatNodeD } from "./format-node/format-node-d-large";
import { FormatNoded } from "./format-node/format-node-d-small";
import { FormatNodee } from "./format-node/format-node-e";
import { FormatNodef } from "./format-node/format-node-f";
import { FormatNodefsi } from "./format-node/format-node-fsi";
import { FormatNodeg } from "./format-node/format-node-g";
import { FormatNodeH } from "./format-node/format-node-h-large";
import { FormatNodeh } from "./format-node/format-node-h-small";
import { FormatNodeM } from "./format-node/format-node-m-large";
import { FormatNodem } from "./format-node/format-node-m-small";
import { FormatNodemi } from "./format-node/format-node-mi";
import { FormatNodeP } from "./format-node/format-node-p-large";
import { FormatNodep } from "./format-node/format-node-p-small";
import { FormatNodePadding } from "./format-node/format-node-padding";
import { FormatNodeParenthesis } from "./format-node/format-node-parenthesis";
import { FormatNodePlus } from "./format-node/format-node-plus";
import { FormatNodeRP } from "./format-node/format-node-rp-large";
import { FormatNoderp } from "./format-node/format-node-rp-small";
import { FormatNodesdt } from "./format-node/format-node-sdt";
import { FormatNodeSpace } from "./format-node/format-node-space";
import { FormatNodessi } from "./format-node/format-node-ssi";
import { FormatNodeString } from "./format-node/format-node-string";
import { FormatNodeY } from "./format-node/format-node-y-large";
import { FormatNodey } from "./format-node/format-node-y-small";
import { FormatNodez } from "./format-node/format-node-z";
import { FormatNoderd } from "./format-node/format-node-rd";
import { FormatNodes } from "./format-node/format-nodes";
import { NumberFormatter } from "./number-formatter";

let REGEXP: RegExp | undefined = undefined;

const getRegExp = (): RegExp => {
	let result = REGEXP;
	if (result) {
		result.lastIndex = 0;
	} else {
		result =
			/%(0|_|-|\+|\()?(\.\d+)?(Y(?:MD?)?|y(?:MD?)?|MD?|D|H(?:ms?)?|h(?:ms?)?|m(?:i|s)?|a|A|s(?:s?i|dt)?|z|%|f(?:si)?|e|g|d|r(?:d|p)|p|P|RP)/g;
		REGEXP = result;
	}
	return result;
};

const toModifiedDatetime = (modifier: string, length: number, node: FormatNode): FormatNode => {
	switch (modifier) {
		case "_":
			return new FormatNodePadding(length, " ", node);
		case "-":
			return node;
		default:
			return new FormatNodePadding(length, "0", node);
	}
};

const toModifiedNumber = (modifier: string, node: FormatNode): FormatNode => {
	switch (modifier) {
		case "_": // space for non-negative numbers
			return new FormatNodeSpace(node);
		case "+": // plus sign for non-negative numbers
			return new FormatNodePlus(node);
		case "(": // parenthesis for the negative numbers
			return new FormatNodeParenthesis(node);
		default:
			return node;
	}
};

interface Parsed {
	/** Nodes */
	nodes: FormatNode[];

	/** True if nodes contains nodes which requires a date object */
	date: boolean;
}

const toParsed = (format: string): Parsed => {
	let previousIndex = 0;
	let isDateRequired = false;
	const result: FormatNode[] = [];
	const regExp = getRegExp();
	while (true) {
		const matched = regExp.exec(format);
		if (matched != null) {
			const index = matched.index;
			if (previousIndex < index) {
				result.push(new FormatNodeString(format.substring(previousIndex, index)));
			}
			previousIndex = index + matched[0].length;

			const all = matched[0];
			const modifier = matched[1];
			const precision = matched[2];
			const specifier = matched[3];

			switch (specifier) {
				case "Y": // full year
					isDateRequired = true;
					result.push(new FormatNodeY());
					break;
				case "YM":
					isDateRequired = true;
					result.push(
						new FormatNodeY(),
						new FormatNodeString("/"),
						toModifiedDatetime(modifier, 2, new FormatNodeM())
					);
					break;
				case "YMD":
					isDateRequired = true;
					result.push(
						new FormatNodeY(),
						new FormatNodeString("/"),
						toModifiedDatetime(modifier, 2, new FormatNodeM()),
						new FormatNodeString("/"),
						toModifiedDatetime(modifier, 2, new FormatNodeD())
					);
					break;
				case "y": // short year: [0, 99]
					isDateRequired = true;
					result.push(toModifiedDatetime(modifier, 2, new FormatNodey()));
					break;
				case "yM":
					isDateRequired = true;
					result.push(
						toModifiedDatetime(modifier, 2, new FormatNodey()),
						new FormatNodeString("/"),
						toModifiedDatetime(modifier, 2, new FormatNodeM())
					);
					break;
				case "yMD":
					result.push(
						toModifiedDatetime(modifier, 2, new FormatNodey()),
						new FormatNodeString("/"),
						toModifiedDatetime(modifier, 2, new FormatNodeM()),
						new FormatNodeString("/"),
						toModifiedDatetime(modifier, 2, new FormatNodeD())
					);
					break;
				case "M": // month: [1, 12]
					isDateRequired = true;
					result.push(toModifiedDatetime(modifier, 2, new FormatNodeM()));
					break;
				case "MD":
					isDateRequired = true;
					result.push(
						toModifiedDatetime(modifier, 2, new FormatNodeM()),
						new FormatNodeString("/"),
						toModifiedDatetime(modifier, 2, new FormatNodeD())
					);
					break;
				case "D": // day of the month: [1, 31]
					isDateRequired = true;
					result.push(toModifiedDatetime(modifier, 2, new FormatNodeD()));
					break;
				case "H": // 24-hour clock: [0, 23]
					isDateRequired = true;
					result.push(toModifiedDatetime(modifier, 2, new FormatNodeH()));
					break;
				case "Hm":
					isDateRequired = true;
					result.push(
						toModifiedDatetime(modifier, 2, new FormatNodeH()),
						new FormatNodeString(":"),
						toModifiedDatetime(modifier, 2, new FormatNodem())
					);
					break;
				case "Hms":
					isDateRequired = true;
					result.push(
						toModifiedDatetime(modifier, 2, new FormatNodeH()),
						new FormatNodeString(":"),
						toModifiedDatetime(modifier, 2, new FormatNodem()),
						new FormatNodeString(":"),
						toModifiedDatetime(modifier, 2, new FormatNodes())
					);
					break;
				case "h": // 12-hour clock: [1, 12]
					isDateRequired = true;
					result.push(toModifiedDatetime(modifier, 2, new FormatNodeh()));
					break;
				case "hm":
					isDateRequired = true;
					result.push(
						toModifiedDatetime(modifier, 2, new FormatNodeh()),
						new FormatNodeString(":"),
						toModifiedDatetime(modifier, 2, new FormatNodem())
					);
					break;
				case "hms":
					isDateRequired = true;
					result.push(
						toModifiedDatetime(modifier, 2, new FormatNodeh()),
						new FormatNodeString(":"),
						toModifiedDatetime(modifier, 2, new FormatNodem()),
						new FormatNodeString(":"),
						toModifiedDatetime(modifier, 2, new FormatNodes())
					);
					break;
				case "m": // minute [0, 59]
					isDateRequired = true;
					result.push(toModifiedDatetime(modifier, 2, new FormatNodem()));
					break;
				case "ms":
					isDateRequired = true;
					result.push(
						toModifiedDatetime(modifier, 2, new FormatNodem()),
						new FormatNodeString(":"),
						toModifiedDatetime(modifier, 2, new FormatNodes())
					);
					break;
				case "mi": // milliseconds [0, 999]
					isDateRequired = true;
					result.push(toModifiedDatetime(modifier, 3, new FormatNodemi()));
					break;
				case "a": // am or pm
					isDateRequired = true;
					result.push(new FormatNodea());
					break;
				case "A": // AM or PM
					isDateRequired = true;
					result.push(new FormatNodeA());
					break;
				case "s": // seconds: [0, 61]
					isDateRequired = true;
					result.push(toModifiedDatetime(modifier, 2, new FormatNodes()));
					break;
				case "sdt":
					isDateRequired = true;
					result.push(
						new FormatNodesdt(
							new FormatNodeY(),
							toModifiedDatetime(modifier, 2, new FormatNodeM()),
							toModifiedDatetime(modifier, 2, new FormatNodeD()),
							toModifiedDatetime(modifier, 2, new FormatNodeH()),
							toModifiedDatetime(modifier, 2, new FormatNodem()),
							toModifiedDatetime(modifier, 2, new FormatNodes()),
							toModifiedDatetime(modifier, 3, new FormatNodemi())
						)
					);
					break;
				case "z": // time zone
					isDateRequired = true;
					result.push(new FormatNodez());
					break;
				case "%": // a % literal
					result.push(new FormatNodeString("%"));
					break;
				case "f": // fixed point notation
					result.push(toModifiedNumber(modifier, new FormatNodef(precision)));
					break;
				case "e": // exponent notation
					result.push(toModifiedNumber(modifier, new FormatNodee(precision)));
					break;
				case "g": // %f or %e
					result.push(toModifiedNumber(modifier, new FormatNodeg(precision)));
					break;
				case "rd": // rounded decimal notation
					result.push(toModifiedNumber(modifier, new FormatNoderd()));
					break;
				case "d": // decimal notation
					result.push(toModifiedNumber(modifier, new FormatNoded()));
					break;
				case "P": // percent notation (Multiplied by 100)
					result.push(toModifiedNumber(modifier, new FormatNodeP()));
					break;
				case "p": // percent notation (Not multiplied by 100)
					result.push(toModifiedNumber(modifier, new FormatNodep()));
					break;
				case "RP": // percent notation (Multiplied by 100)
					result.push(toModifiedNumber(modifier, new FormatNodeRP()));
					break;
				case "rp": // percent notation (Not multiplied by 100)
					result.push(toModifiedNumber(modifier, new FormatNoderp()));
					break;
				case "fsi": // fixed point notation with a SI prefix
					result.push(toModifiedNumber(modifier, new FormatNodefsi(precision)));
					break;
				case "ssi": // Step-based fixed point notation with a SI prefix
					result.push(toModifiedNumber(modifier, new FormatNodessi(precision)));
					break;
				default:
					result.push(new FormatNodeString(all));
					break;
			}
		} else {
			if (previousIndex < format.length) {
				result.push(new FormatNodeString(format.substring(previousIndex, format.length)));
			}
			break;
		}
	}
	return {
		nodes: result,
		date: isDateRequired
	};
};

/**
 * A NumberFormatter implementation class.
 */
export class NumberFormatterImpl implements NumberFormatter {
	protected static DATE?: Date;

	protected date: boolean;
	protected nodes: FormatNode[];

	constructor(format: string) {
		const parsed = toParsed(format);
		this.date = parsed.date;
		this.nodes = parsed.nodes;
	}

	format(target: number, step: number): string {
		const nodes = this.nodes;
		let date = NumberFormatterImpl.DATE;
		if (date == null) {
			date = new Date();
			NumberFormatterImpl.DATE = date;
		}
		if (this.date) {
			date.setTime(target);
		}
		let result = "";
		for (let i = 0, imax = nodes.length; i < imax; ++i) {
			result += nodes[i].format(target, step, date);
		}
		return result;
	}
}
