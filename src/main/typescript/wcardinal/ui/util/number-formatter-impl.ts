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
import { FormatNoderd } from "./format-node/format-noder-d";
import { FormatNodes } from "./format-node/format-nodes";
import { NumberFormatter, NumberFormatterFunction } from "./number-formatter";

// tslint:disable-next-line: max-line-length
const REGEXP = /%(0|_|-|\+|\()?(\.\d+)?(Y(?:MD?)?|y(?:MD?)?|MD?|D|H(?:ms?)?|h(?:ms?)?|m(?:i|s)?|a|A|s(?:s?i|dt)?|z|%|f(?:si)?|e|g|d|r(?:d|p)|p|P|RP)/g;

export class NumberFormatterImpl implements NumberFormatter {
	protected isDateRequired: boolean;
	protected nodes: FormatNode[];
	protected date: Date;

	constructor( format: string ) {
		let previousIndex = 0;
		let isDateRequired = false;
		const nodes: FormatNode[] = [];
		REGEXP.lastIndex = 0;
		while( true ) {
			const matched = REGEXP.exec( format );
			if( matched != null ) {
				const index = matched.index;
				if( previousIndex < index ) {
					nodes.push( new FormatNodeString( format.substring( previousIndex, index ) ) );
				}
				previousIndex = index + matched[ 0 ].length;

				const all = matched[ 0 ];
				const modifier = matched[ 1 ];
				const precision = matched[ 2 ];
				const specifier = matched[ 3 ];

				switch( specifier ) {
				case "Y": // full year
					isDateRequired = true;
					nodes.push( new FormatNodeY() );
					break;
				case "YM":
					isDateRequired = true;
					nodes.push(
						new FormatNodeY(),
						new FormatNodeString( "/" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeM() )
					);
					break;
				case "YMD":
					isDateRequired = true;
					nodes.push(
						new FormatNodeY(),
						new FormatNodeString( "/" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeM() ),
						new FormatNodeString( "/" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeD() )
					);
					break;
				case "y": // short year: [0, 99]
					isDateRequired = true;
					nodes.push( this.toModifiedNodeDatetime2( modifier, new FormatNodey() ) );
					break;
				case "yM":
					isDateRequired = true;
					nodes.push(
						this.toModifiedNodeDatetime2( modifier, new FormatNodey() ),
						new FormatNodeString( "/" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeM() )
					);
					break;
				case "yMD":
					nodes.push(
						this.toModifiedNodeDatetime2( modifier, new FormatNodey() ),
						new FormatNodeString( "/" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeM() ),
						new FormatNodeString( "/" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeD() )
					);
					break;
				case "M": // month: [1, 12]
					isDateRequired = true;
					nodes.push( this.toModifiedNodeDatetime2( modifier, new FormatNodeM() ) );
					break;
				case "MD":
					isDateRequired = true;
					nodes.push(
						this.toModifiedNodeDatetime2( modifier, new FormatNodeM() ),
						new FormatNodeString( "/" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeD() )
					);
					break;
				case "D": // day of the month: [1, 31]
					isDateRequired = true;
					nodes.push( this.toModifiedNodeDatetime2( modifier, new FormatNodeD() ) );
					break;
				case "H": // 24-hour clock: [0, 23]
					isDateRequired = true;
					nodes.push( this.toModifiedNodeDatetime2( modifier, new FormatNodeH() ) );
					break;
				case "Hm":
					isDateRequired = true;
					nodes.push(
						this.toModifiedNodeDatetime2( modifier, new FormatNodeH() ),
						new FormatNodeString( ":" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodem() )
					);
					break;
				case "Hms":
					isDateRequired = true;
					nodes.push(
						this.toModifiedNodeDatetime2( modifier, new FormatNodeH() ),
						new FormatNodeString( ":" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodem() ),
						new FormatNodeString( ":" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodes() )
					);
					break;
				case "h": // 12-hour clock: [1, 12]
					isDateRequired = true;
					nodes.push( this.toModifiedNodeDatetime2( modifier, new FormatNodeh() ) );
					break;
				case "hm":
					isDateRequired = true;
					nodes.push(
						this.toModifiedNodeDatetime2( modifier, new FormatNodeh() ),
						new FormatNodeString( ":" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodem() )
					);
					break;
				case "hms":
					isDateRequired = true;
					nodes.push(
						this.toModifiedNodeDatetime2( modifier, new FormatNodeh() ),
						new FormatNodeString( ":" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodem() ),
						new FormatNodeString( ":" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodes() )
					);
					break;
				case "m": // minute [0, 59]
					isDateRequired = true;
					nodes.push( this.toModifiedNodeDatetime2( modifier, new FormatNodem() ) );
					break;
				case "ms":
					isDateRequired = true;
					nodes.push(
						this.toModifiedNodeDatetime2( modifier, new FormatNodem() ),
						new FormatNodeString( ":" ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodes() )
					);
					break;
				case "mi": // milliseconds [0, 999]
					isDateRequired = true;
					nodes.push( this.toModifiedNodeDatetime3( modifier, new FormatNodemi() ) );
					break;
				case "a": // am or pm
					isDateRequired = true;
					nodes.push( new FormatNodea() );
					break;
				case "A": // AM or PM
					isDateRequired = true;
					nodes.push( new FormatNodeA() );
					break;
				case "s": // seconds: [0, 61]
					isDateRequired = true;
					nodes.push( this.toModifiedNodeDatetime2( modifier, new FormatNodes() ) );
					break;
				case "sdt":
					isDateRequired = true;
					nodes.push(new FormatNodesdt(
						new FormatNodeY(),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeM() ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeD() ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodeH() ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodem() ),
						this.toModifiedNodeDatetime2( modifier, new FormatNodes() ),
						this.toModifiedNodeDatetime3( modifier, new FormatNodemi() )
					));
					break;
				case "z": // time zone
					isDateRequired = true;
					nodes.push( new FormatNodez() );
					break;
				case "%": // a % literal
					nodes.push( new FormatNodeString( "%" ) );
					break;
				case "f": // fixed point notation
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNodef( precision ) ) );
					break;
				case "e": // exponent notation
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNodee( precision ) ) );
					break;
				case "g": // %f or %e
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNodeg( precision ) ) );
					break;
				case "rd": // rounded decimal notation
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNoderd() ) );
					break;
				case "d": // decimal notation
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNoded() ) );
					break;
				case "P": // percent notation (Multiplied by 100)
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNodeP() ) );
					break;
				case "p": // percent notation (Not multiplied by 100)
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNodep() ) );
					break;
				case "RP": // percent notation (Multiplied by 100)
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNodeRP() ) );
					break;
				case "rp": // percent notation (Not multiplied by 100)
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNoderp() ) );
					break;
				case "fsi": // fixed point notation with a SI prefix
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNodefsi( precision ) ) );
					break;
				case "ssi": // Step-based fixed point notation with a SI prefix
					nodes.push( this.toModifiedNodeNumber( modifier, new FormatNodessi( precision ) ) );
					break;
				default:
					nodes.push( new FormatNodeString( all ) );
					break;
				}
			} else {
				if( previousIndex < format.length ) {
					nodes.push( new FormatNodeString( format.substring( previousIndex, format.length ) ) );
				}
				break;
			}
		}

		this.isDateRequired = isDateRequired;
		this.nodes = nodes;
		this.date = new Date();
	}

	protected toModifiedNodeDatetime2( modifier: string, node: FormatNode ): FormatNode {
		switch( modifier ) {
		case "_":
			return new FormatNodePadding( 2, " ", node );
		case "-":
			return node;
		default:
			return new FormatNodePadding( 2, "0", node );
		}
	}

	protected toModifiedNodeDatetime3( modifier: string, node: FormatNode ): FormatNode {
		switch( modifier ) {
		case "_":
			return new FormatNodePadding( 3, " ", node );
		case "-":
			return node;
		default:
			return new FormatNodePadding( 3, "0", node );
		}
	}

	protected toModifiedNodeNumber( modifier: string, node: FormatNode ): FormatNode {
		switch( modifier ) {
		case "_": // space for non-negative numbers
			return new FormatNodeSpace( node );
		case "+": // plus sign for non-negative numbers
			return new FormatNodePlus( node );
		case "(": // parenthesis for the negative numbers
			return new FormatNodeParenthesis( node );
		default:
			return node;
		}
	}

	format( target: number, step: number ): string {
		const nodes = this.nodes;
		const date = this.date;
		if( this.isDateRequired ) {
			date.setTime( target );
		}
		let result = "";
		for( let i = 0, imax = nodes.length; i < imax; ++i ) {
			result += nodes[ i ].format( target, step, date );
		}
		return result;
	}

	toFunction(): NumberFormatterFunction {
		return ( target: number, step: number ): string => {
			return this.format( target, step );
		};
	}
}
