/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisOptions, DChartAxisPosition, DChartAxisTickPosition } from "./d-chart-axis";
import { EShapePointsStyle } from "./shape/e-shape-points";
import { EShapeStrokeLike } from "./shape/e-shape-stroke";
import { EShapeTextLike, EShapeTextStyle, EShapeTextWeight } from "./shape/e-shape-text";
import { EShapeTextAlignLike } from "./shape/e-shape-text-align";
import { EShapeTextAlignHorizontal } from "./shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "./shape/e-shape-text-align-vertical";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeTextOffsetLike } from "./shape/e-shape-text-offset";
import { EShapeTextOutlineLike } from "./shape/e-shape-text-outline";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { DeepPartial } from "./util/deep-partial";
import { NumberFormatter } from "./util/number-formatter";
import { NumberFormatterFunction } from "./util/number-formatter-function";
import { NumberFormatters } from "./util/number-formatters";
import { utilIsString } from "./util/util-is-string";

export interface DThemeChartAxisBase {
	getPosition(): DChartAxisPosition;
	getPadding(): number;

	getLabelAlignHorizontal( position: DChartAxisPosition ): EShapeTextAlignHorizontal;
	getLabelAlignVertical( position: DChartAxisPosition ): EShapeTextAlignVertical;
	getLabelPaddingHorizontal(): number;
	getLabelPaddingVertical(): number;
	getLabelDirection(): EShapeTextDirection;

	getTickEnable(): boolean;

	getMajorTickCount(): number;
	getMajorTickSize(): number;
	getMajorTickPosition(): DChartAxisTickPosition;
	getMajorTickStyle(): EShapePointsStyle;
	getMajorTickTextAlignHorizontal( position: DChartAxisPosition ): EShapeTextAlignHorizontal;
	getMajorTickTextAlignVertical( position: DChartAxisPosition ): EShapeTextAlignVertical;
	getMajorTickTextDirection(): EShapeTextDirection;
	getMajorTickTextFormat(): string;
	getMajorTickTextPaddingHorizontal(): number;
	getMajorTickTextPaddingVertical(): number;

	getMinorTickCount(): number;
	getMinorTickSize(): number;
	getMinorTickPosition(): DChartAxisTickPosition;
	getMinorTickStyle(): EShapePointsStyle;
}

export interface DChartAxisBaseTickMajorTextOptions {
	/** A format. Please refer to {@link ui/util.NumberFormatter} for format details. */
	format?: string;

	/** A formatter function. */
	formatter?: NumberFormatterFunction;

	color?: number;
	alpha?: number;
	family?: string;
	size?: number;
	weight?: EShapeTextWeight;
	align?: Partial<EShapeTextAlignLike>;
	offset?: Partial<EShapeTextOffsetLike>;
	style?: EShapeTextStyle;
	outline?: Partial<EShapeTextOutlineLike>;
	spacing?: Partial<EShapeTextOffsetLike>;
	direction?: EShapeTextDirection;
	padding?: Partial<EShapeTextOffsetLike>;
	clipping?: boolean;
}

export interface DChartAxisBaseTickMajorOptions {
	count?: number;
	size?: number;
	position?: DChartAxisTickPosition | keyof typeof DChartAxisTickPosition;
	style?: EShapePointsStyle | keyof typeof EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	text?: DChartAxisBaseTickMajorTextOptions;
}

export interface DChartAxisBaseTickMinorOptions {
	count?: number;
	size?: number;
	position?: DChartAxisTickPosition | keyof typeof DChartAxisTickPosition;
	style?: EShapePointsStyle | keyof typeof EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
}

export interface DChartAxisBaseTickContainerOptions {
	enable?: boolean;
	position?: DChartAxisTickPosition | keyof typeof DChartAxisTickPosition;
	style?: EShapePointsStyle | keyof typeof EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	major?: DChartAxisBaseTickMajorOptions;
	minor?: DChartAxisBaseTickMinorOptions;
}

export interface DChartAxisBaseOptions extends DChartAxisOptions {
	tick?: DChartAxisBaseTickContainerOptions;
	label?: DeepPartial<EShapeTextLike>;
	theme?: DThemeChartAxisBase;
	coordinate?: number;
	padding?: number;
}

export interface DChartAxisBaseTickMajor {
	count: number;
	size: number;
	position: EShapeBarPosition;
	style: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	text?: DChartAxisBaseTickMajorTextOptions;
	formatter: NumberFormatter;
	shapes?: EShapeBar[];
}

export interface DChartAxisBaseTickMinor {
	count: number;
	size: number;
	position: EShapeBarPosition;
	style: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	shapes?: EShapeBar[];
}

export interface DChartAxisBaseTickContainer {
	enable: boolean;
	major: DChartAxisBaseTickMajor;
	minor: DChartAxisBaseTickMinor;
}

export class DChartAxisBaseOptionParser {
	protected _coordinateIndex: number;
	protected _position: DChartAxisPosition;
	protected _tick: DChartAxisBaseTickContainer;
	protected _label: DeepPartial<EShapeTextLike> | undefined;
	protected _padding: number;

	constructor( theme: DThemeChartAxisBase, options?: DChartAxisBaseOptions ) {
		this._coordinateIndex = ( options && options.coordinate != null ? options.coordinate : 0 );
		this._position = this.toPosition( theme, options );
		this._tick = this.toTickContainer( theme, options );
		this._label = this.toLabel( theme, options );
		this._padding = ( options && options.padding != null ? options.padding : theme.getPadding() );
	}

	get coordinateIndex(): number {
		return this._coordinateIndex;
	}

	get padding(): number {
		return this._padding;
	}

	get position(): DChartAxisPosition {
		return this._position;
	}

	get tick(): DChartAxisBaseTickContainer {
		return this._tick;
	}

	get label(): DeepPartial<EShapeTextLike> | undefined {
		return this._label;
	}

	protected toPosition(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseOptions
	): DChartAxisPosition {
		const position = options && options.position;
		if( utilIsString( position ) ) {
			return DChartAxisPosition[ position ];
		} else if( position != null ) {
			return position;
		}
		return theme.getPosition();
	}

	protected toTickContainer(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseOptions
	): DChartAxisBaseTickContainer {
		const tick = options && options.tick;
		return {
			enable: ( tick && tick.enable != null ? tick.enable : theme.getTickEnable() ),
			major: this.toTickMajor( theme, tick ),
			minor: this.toMinorTick( theme, tick )
		};
	}

	protected toTickMajor(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickContainerOptions
	): DChartAxisBaseTickMajor {
		const major: DChartAxisBaseTickMajorOptions | undefined = options && options.major;
		const position = ( major && major.position != null ? major.position :
			( options && options.position != null ? options.position : theme.getMajorTickPosition() )
		);
		const style = ( major && major.style != null ? major.style :
			( options && options.style != null ? options.style : theme.getMajorTickStyle() )
		);
		return {
			count: ( major && major.count != null ? major.count : theme.getMajorTickCount() ),
			size: ( major && major.size != null ? major.size : theme.getMajorTickSize() ),
			position: this.toTickPosition( position ),
			style: ( utilIsString( style ) ? EShapePointsStyle[ style ] : style ),
			stroke: this.toTickStroke( theme, major && major.stroke, options && options.stroke ),
			text: this.toMajorTickText( theme, major && major.text ),
			formatter: this.toMajorTickFormatter( theme, major ),
			shapes: undefined
		};
	}

	protected toTickPosition(
		tickPosition: DChartAxisTickPosition | keyof typeof DChartAxisTickPosition
	): EShapeBarPosition {
		const position = this._position;
		if( tickPosition === DChartAxisTickPosition.OUTSIDE || tickPosition === "OUTSIDE" ) {
			switch( position ) {
			case DChartAxisPosition.TOP:
				return EShapeBarPosition.BOTTOM;
			case DChartAxisPosition.BOTTOM:
				return EShapeBarPosition.TOP;
			case DChartAxisPosition.LEFT:
				return EShapeBarPosition.RIGHT;
			case DChartAxisPosition.RIGHT:
				return EShapeBarPosition.LEFT;
			default:
				return EShapeBarPosition.TOP;
			}
		} else {
			switch( position ) {
			case DChartAxisPosition.TOP:
				return EShapeBarPosition.TOP;
			case DChartAxisPosition.BOTTOM:
				return EShapeBarPosition.BOTTOM;
			case DChartAxisPosition.LEFT:
				return EShapeBarPosition.LEFT;
			case DChartAxisPosition.RIGHT:
				return EShapeBarPosition.RIGHT;
			default:
				return EShapeBarPosition.TOP;
			}
		}
	}

	protected toMinorTick(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickContainerOptions
	): DChartAxisBaseTickMinor {
		const minor: DChartAxisBaseTickMajorOptions | undefined = options && options.major;
		const position = ( minor && minor.position != null ? minor.position :
			( options && options.position != null ? options.position : theme.getMinorTickPosition() )
		);
		const style = ( minor && minor.style != null ? minor.style :
			( options && options.style != null ? options.style : theme.getMinorTickStyle() )
		);
		return {
			count: ( minor && minor.count != null ? minor.count : theme.getMinorTickCount() ),
			size: ( minor && minor.size != null ? minor.size : theme.getMinorTickSize() ),
			position: this.toTickPosition( position ),
			style: ( utilIsString( style ) ? EShapePointsStyle[ style ] : style ),
			stroke: this.toTickStroke( theme, minor && minor.stroke, options && options.stroke ),
			shapes: undefined
		};
	}

	protected toTickStroke(
		theme: DThemeChartAxisBase,
		optionsA?: Partial<EShapeStrokeLike>,
		optionsB?: Partial<EShapeStrokeLike>
	): Partial<EShapeStrokeLike> | undefined {
		if( optionsA ) {
			if( optionsB ) {
				return {
					enable: ( optionsA.enable != null ? optionsA.enable : optionsB.enable ),
					color: ( optionsA.color != null ? optionsA.color : optionsB.color ),
					alpha: ( optionsA.alpha != null ? optionsA.alpha : optionsB.alpha ),
					width: ( optionsA.width != null ? optionsA.width : optionsB.width ),
					align: ( optionsA.align != null ? optionsA.align : optionsB.align ),
					side: ( optionsA.side != null ? optionsA.side : optionsB.side )
				};
			} else {
				return {
					enable: optionsA.enable,
					color: optionsA.color,
					alpha: optionsA.alpha,
					width: optionsA.width,
					align: optionsA.align,
					side: optionsA.side
				};
			}
		} else if( optionsB ) {
			return {
				enable: optionsB.enable,
				color: optionsB.color,
				alpha: optionsB.alpha,
				width: optionsB.width,
				align: optionsB.align,
				side: optionsB.side
			};
		}
	}

	protected toMajorTickFormatter(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickMajorOptions
	): NumberFormatter {
		const text = options && options.text;
		if( text ) {
			const format = text.format;
			if( format != null ) {
				return NumberFormatters.create( format );
			} else {
				const formatter = text.formatter;
				if( formatter ) {
					return {
						format: formatter
					};
				}
			}
		}
		return NumberFormatters.create(
			theme.getMajorTickTextFormat()
		);
	}

	protected toMajorTickText(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickMajorTextOptions
	): DChartAxisBaseTickMajorTextOptions | undefined {
		options = options || {};
		return {
			format: options.format,
			color: options.color,
			alpha: options.alpha,
			family: options.family,
			size: options.size,
			weight: options.weight,
			align: this.toMajorTickTextAlign( theme, options.align ),
			offset: this.toMajorTickTextOffset( theme, options.offset ),
			style: options.style,
			outline: this.toMajorTickTextOutline( theme, options.outline ),
			spacing: this.toMajorTickTextSpacing( theme, options.spacing ),
			direction: this.toTickMajorTextDirection( theme, options.direction ),
			padding: this.toMajorTickTextPadding( theme, options.padding ),
			clipping: options.clipping
		};
	}

	protected toMajorTickTextOutline(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOutlineLike>
	): Partial<EShapeTextOutlineLike> | undefined {
		if( options ) {
			return {
				enable: options.enable,
				color: options.color,
				alpha: options.alpha,
				width: options.width
			};
		}
	}

	protected toMajorTickTextAlign(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextAlignLike>
	): Partial<EShapeTextAlignLike> | undefined {
		const position = this._position;
		if( options ) {
			return {
				horizontal: ( options.horizontal != null ? options.horizontal : theme.getMajorTickTextAlignHorizontal( position ) ),
				vertical: ( options.vertical != null ? options.vertical : theme.getMajorTickTextAlignVertical( position ) )
			};
		}
		return {
			horizontal: theme.getMajorTickTextAlignHorizontal( position ),
			vertical: theme.getMajorTickTextAlignVertical( position )
		};
	}

	protected toMajorTickTextOffset(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> | undefined {
		if( options ) {
			return {
				horizontal: options.horizontal,
				vertical: options.vertical
			};
		}
	}

	protected toMajorTickTextSpacing(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> | undefined {
		if( options ) {
			return {
				horizontal: options.horizontal,
				vertical: options.vertical
			};
		}
	}

	protected toMajorTickTextPadding(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> {
		return {
			horizontal: ( options && options.horizontal != null ?
				options.horizontal : theme.getMajorTickTextPaddingHorizontal()
			),
			vertical: ( options && options.vertical != null ?
				options.vertical : theme.getMajorTickTextPaddingVertical()
			)
		};
	}

	protected toTickMajorTextDirection(
		theme: DThemeChartAxisBase,
		options?: EShapeTextDirection
	): EShapeTextDirection {
		return ( options != null ? options : theme.getMajorTickTextDirection() );
	}

	protected toLabel(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseOptions
	): DeepPartial<EShapeTextLike> | undefined {
		const label = options && options.label;
		if( label ) {
			return {
				value: label.value,
				color: label.color,
				alpha: label.alpha,
				family: label.family,
				size: label.size,
				weight: label.weight,
				align: this.toLabelAlign( theme, label.align ),
				offset: this.toLabelOffset( theme, label.offset ),
				style: label.style,
				outline: this.toLabelOutline( theme, label.outline ),
				spacing: this.toLabelSpacing( theme, label.spacing ),
				direction: this.toLabelDirection( theme, label.direction ),
				padding: this.toLabelPadding( theme, label.padding ),
				clipping: label.clipping
			};
		}
	}

	protected toLabelOutline(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOutlineLike>
	): Partial<EShapeTextOutlineLike> | undefined {
		if( options ) {
			return {
				enable: options.enable,
				color: options.color,
				alpha: options.alpha,
				width: options.width
			};
		}
	}

	protected toLabelAlign(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextAlignLike>
	): Partial<EShapeTextAlignLike> | undefined {
		const position = this._position;
		if( options ) {
			return {
				horizontal: ( options.horizontal != null ?
					options.horizontal : theme.getLabelAlignHorizontal( position )
				),
				vertical: ( options.vertical != null ?
					options.vertical : theme.getLabelAlignVertical( position )
				)
			};
		}
		return {
			horizontal: theme.getLabelAlignHorizontal( position ),
			vertical: theme.getLabelAlignVertical( position )
		};
	}

	protected toLabelOffset(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> | undefined {
		if( options ) {
			return {
				horizontal: options.horizontal,
				vertical: options.vertical
			};
		}
	}

	protected toLabelSpacing(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> | undefined {
		if( options ) {
			return {
				horizontal: options.horizontal,
				vertical: options.vertical
			};
		}
	}

	protected toLabelPadding(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> {
		return {
			horizontal: ( options && options.horizontal != null ?
				options.horizontal : theme.getLabelPaddingHorizontal()
			),
			vertical: ( options && options.vertical != null ?
				options.vertical : theme.getLabelPaddingVertical()
			)
		};
	}

	protected toLabelDirection(
		theme: DThemeChartAxisBase,
		options?: EShapeTextDirection
	): EShapeTextDirection {
		return ( options != null ? options : theme.getLabelDirection() );
	}
}
