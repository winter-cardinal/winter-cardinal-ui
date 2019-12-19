/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisPosition, DChartAxisTickPosition } from "./d-chart-axis";
import {
	DChartAxisBaseOptions, DChartAxisBaseTickContainerOptions,
	DChartAxisBaseTickMajorGridlineOptions, DChartAxisBaseTickMajorOptions,
	DChartAxisBaseTickMajorTextOptions, DThemeChartAxisBase
} from "./d-chart-axis-base-options";
import { EShapePointsStyle } from "./shape/e-shape-points";
import { EShapePointsStyleOption, EShapePointsStyles } from "./shape/e-shape-points-styles";
import { EShapeStrokeLike, EShapeStrokeSide } from "./shape/e-shape-stroke";
import { EShapeTextLike } from "./shape/e-shape-text";
import { EShapeTextAlignLike } from "./shape/e-shape-text-align";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeTextOffsetLike } from "./shape/e-shape-text-offset";
import { EShapeTextOutlineLike } from "./shape/e-shape-text-outline";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { DeepPartial } from "./util/deep-partial";
import { NumberFormatter } from "./util/number-formatter";
import { NumberFormatters } from "./util/number-formatters";
import { utilIsString } from "./util/util-is-string";

export interface DChartAxisBaseGridline {
	enable: boolean;
	style: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	shapes?: EShapeBar[];
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

	gridline: DChartAxisBaseGridline;
}

export interface DChartAxisBaseTickMinor {
	count: number;
	size: number;
	position: EShapeBarPosition;
	style: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	shapes?: EShapeBar[];
}

export interface DChartAxisBaseBar {
	style: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	shape?: EShapeBar;
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
	protected _bar: DChartAxisBaseBar;

	constructor( theme: DThemeChartAxisBase, options?: DChartAxisBaseOptions ) {
		this._coordinateIndex = ( options && options.coordinate != null ? options.coordinate : 0 );
		this._position = this.toPosition( theme, options );
		this._tick = this.toTickContainer( theme, options );
		this._label = this.toLabel( theme, options );
		this._padding = ( options && options.padding != null ? options.padding : theme.getPadding() );
		this._bar = this.toBar( theme, options );
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

	get bar(): DChartAxisBaseBar {
		return this._bar;
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

	protected toBar(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseOptions
	): DChartAxisBaseBar {
		return {
			style: options && options.style != null ? options.style : theme.getStyle(),
			stroke: this.toBarStroke( theme, options && options.stroke ),
			shape: undefined
		};
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
		const optionsStyle = options && options.style;
		const style = EShapePointsStyles.from( major && major.style != null ? major.style :
			( optionsStyle != null ? optionsStyle : theme.getMajorTickStyle() )
		);
		const optionsStroke = options && options.stroke;
		const stroke = this.toTickMajorStroke( theme, major && major.stroke, optionsStroke );
		return {
			count: ( major && major.count != null ? major.count : theme.getMajorTickCount() ),
			size: ( major && major.size != null ? major.size : theme.getMajorTickSize() ),
			position: this.toTickPosition( position ),
			style,
			stroke,
			text: this.toMajorTickText( theme, major && major.text ),
			formatter: this.toMajorTickFormatter( theme, major ),
			shapes: undefined,
			gridline: this.toTickMajorGridline( theme, major && major.gridline, optionsStyle, optionsStroke )
		};
	}

	protected toTickMajorGridline(
		theme: DThemeChartAxisBase,
		options: DChartAxisBaseTickMajorGridlineOptions | undefined,
		optionsStyle: EShapePointsStyleOption | undefined,
		optionsStroke: Partial<EShapeStrokeLike> | undefined
	): DChartAxisBaseGridline {
		const style = EShapePointsStyles.from( options && options.style != null ? options.style :
			( optionsStyle != null ? optionsStyle : theme.getMajorTickGridlineStyle() )
		);
		return {
			enable: options && options.enable != null ? options.enable : theme.getMajorTickGridlineEnable(),
			style,
			stroke: this.toTickMajorGridlineStroke( theme, options && options.stroke, optionsStroke ),
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
		const style = EShapePointsStyles.from( minor && minor.style != null ? minor.style :
			( options && options.style != null ? options.style : theme.getMinorTickStyle() )
		);
		return {
			count: ( minor && minor.count != null ? minor.count : theme.getMinorTickCount() ),
			size: ( minor && minor.size != null ? minor.size : theme.getMinorTickSize() ),
			position: this.toTickPosition( position ),
			style,
			stroke: this.toTickMinorStroke( theme, minor && minor.stroke, options && options.stroke ),
			shapes: undefined
		};
	}

	protected toBarStroke(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeStrokeLike>
	): EShapeStrokeLike {
		return this.toStroke(
			options, undefined,
			theme.getStrokeEnable(),
			theme.getStrokeColor(),
			theme.getStrokeAlpha(),
			theme.getStrokeWidth(),
			theme.getStrokeAlign(),
			theme.getStrokeSide()
		);
	}

	protected toTickMajorStroke(
		theme: DThemeChartAxisBase,
		optionsA?: Partial<EShapeStrokeLike>,
		optionsB?: Partial<EShapeStrokeLike>
	): EShapeStrokeLike {
		return this.toStroke(
			optionsA, optionsB,
			theme.getMajorTickStrokeEnable(),
			theme.getMajorTickStrokeColor(),
			theme.getMajorTickStrokeAlpha(),
			theme.getMajorTickStrokeWidth(),
			theme.getMajorTickStrokeAlign(),
			theme.getMajorTickStrokeSide()
		);
	}

	protected toTickMajorGridlineStroke(
		theme: DThemeChartAxisBase,
		optionsA?: Partial<EShapeStrokeLike>,
		optionsB?: Partial<EShapeStrokeLike>
	): EShapeStrokeLike {
		return this.toStroke(
			optionsA, optionsB,
			theme.getMajorTickGridlineStrokeEnable(),
			theme.getMajorTickGridlineStrokeColor(),
			theme.getMajorTickGridlineStrokeAlpha(),
			theme.getMajorTickGridlineStrokeWidth(),
			theme.getMajorTickGridlineStrokeAlign(),
			theme.getMajorTickGridlineStrokeSide()
		);
	}

	protected toTickMinorStroke(
		theme: DThemeChartAxisBase,
		optionsA?: Partial<EShapeStrokeLike>,
		optionsB?: Partial<EShapeStrokeLike>
	): EShapeStrokeLike {
		return this.toStroke(
			optionsA, optionsB,
			theme.getMinorTickStrokeEnable(),
			theme.getMinorTickStrokeColor(),
			theme.getMinorTickStrokeAlpha(),
			theme.getMinorTickStrokeWidth(),
			theme.getMinorTickStrokeAlign(),
			theme.getMinorTickStrokeSide()
		);
	}

	protected toStroke(
		optionsA: Partial<EShapeStrokeLike> | undefined,
		optionsB: Partial<EShapeStrokeLike> | undefined,
		enable: boolean,
		color: number,
		alpha: number,
		width: number,
		align: number,
		side: EShapeStrokeSide
	): EShapeStrokeLike {
		if( optionsA ) {
			if( optionsB ) {
				return {
					enable: ( optionsA.enable != null ? optionsA.enable :
						( optionsB.enable != null ? optionsB.enable : enable )
					),
					color: ( optionsA.color != null ? optionsA.color :
						( optionsB.color != null ? optionsB.color : color )
					),
					alpha: ( optionsA.alpha != null ? optionsA.alpha :
						( optionsB.alpha != null ? optionsB.alpha : alpha )
					),
					width: ( optionsA.width != null ? optionsA.width :
						( optionsB.width != null ? optionsB.width : width )
					),
					align: ( optionsA.align != null ? optionsA.align :
						( optionsB.align != null ? optionsB.align : align )
					),
					side: ( optionsA.side != null ? optionsA.side :
						( optionsB.side != null ? optionsB.side : side )
					)
				};
			} else {
				return {
					enable: ( optionsA.enable != null ? optionsA.enable : enable ),
					color: ( optionsA.color != null ? optionsA.color : color ),
					alpha: ( optionsA.alpha != null ? optionsA.alpha : alpha ),
					width: ( optionsA.width != null ? optionsA.width : width ),
					align: ( optionsA.align != null ? optionsA.align : align ),
					side: ( optionsA.side != null ? optionsA.side : side )
				};
			}
		} else if( optionsB ) {
			return {
				enable: ( optionsB.enable != null ? optionsB.enable : enable ),
				color: ( optionsB.color != null ? optionsB.color : color ),
				alpha: ( optionsB.alpha != null ? optionsB.alpha : alpha ),
				width: ( optionsB.width != null ? optionsB.width : width ),
				align: ( optionsB.align != null ? optionsB.align : align ),
				side: ( optionsB.side != null ? optionsB.side : side )
			};
		} else {
			return {
				enable,
				color,
				alpha,
				width,
				align,
				side
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
				horizontal: ( options.horizontal != null ? options.horizontal :
					theme.getMajorTickTextAlignHorizontal( position )
				),
				vertical: ( options.vertical != null ? options.vertical :
					theme.getMajorTickTextAlignVertical( position )
				)
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
