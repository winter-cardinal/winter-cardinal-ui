/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DChartAxisBaseOptions,
	DChartAxisBaseTickContainerOptions,
	DChartAxisBaseTickMajorGridlineOptions,
	DChartAxisBaseTickMajorOptions,
	DChartAxisBaseTickMinorOptions,
	DChartAxisBaseTickTextOptions,
	DThemeChartAxisBase
} from "./d-chart-axis-base-options";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickPosition } from "./d-chart-axis-tick-position";
import { DChartCoordinateTickMajorStepFunction } from "./d-chart-coordinate-tick-major-step-function";
import { DChartCoordinateTickMinorStepFunction } from "./d-chart-coordinate-tick-minor-step-function";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapePointsStyleOption, EShapePointsStyles } from "./shape/e-shape-points-styles";
import { EShapeStrokeLike } from "./shape/e-shape-stroke";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";
import { EShapeTextLike } from "./shape/e-shape-text";
import { EShapeTextAlignLike } from "./shape/e-shape-text-align";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeTextOffsetLike } from "./shape/e-shape-text-offset";
import { EShapeTextOutlineLike } from "./shape/e-shape-text-outline";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { DeepPartial } from "./util/deep-partial";
import { isString } from "./util/is-string";
import { NumberFormatter } from "./util/number-formatter";
import { NumberFormatters } from "./util/number-formatters";

export interface DChartAxisBaseOptionParserGridline {
	enable: boolean;
	style?: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
}

export interface DChartAxisBaseOptionParserTickMajor {
	capacity: number;
	count: number;
	step: number | DChartCoordinateTickMajorStepFunction | undefined;
	size: number;
	position: EShapeBarPosition;
	style?: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	text?: DChartAxisBaseTickTextOptions;
	formatter?: NumberFormatter;

	gridline: DChartAxisBaseOptionParserGridline;
}

export interface DChartAxisBaseOptionParserTickMinor {
	count: number;
	step: number | DChartCoordinateTickMinorStepFunction | undefined;
	size: number;
	position: EShapeBarPosition;
	style?: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	text?: DChartAxisBaseTickTextOptions;
	formatter?: NumberFormatter;
}

export interface DChartAxisBaseOptionParserTickContainer {
	enable: boolean;
	major: DChartAxisBaseOptionParserTickMajor;
	minor: DChartAxisBaseOptionParserTickMinor;
}

export interface DChartAxisBaseOptionParserBar {
	style?: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
}

export class DChartAxisBaseOptionParser {
	protected _coordinateIndex: number;
	protected _position: DChartAxisPosition;
	protected _tick: DChartAxisBaseOptionParserTickContainer;
	protected _label: DeepPartial<EShapeTextLike> | undefined;
	protected _padding: number;
	protected _bar: DChartAxisBaseOptionParserBar;

	constructor(theme: DThemeChartAxisBase, options?: DChartAxisBaseOptions) {
		this._coordinateIndex = options?.coordinate ?? 0;
		this._position = this.toPosition(theme, options);
		this._tick = this.toTickContainer(theme, options);
		this._label = this.toLabel(theme, options);
		this._padding = options?.padding ?? theme.getPadding();
		this._bar = this.toBar(theme, options);
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

	get bar(): DChartAxisBaseOptionParserBar {
		return this._bar;
	}

	get tick(): DChartAxisBaseOptionParserTickContainer {
		return this._tick;
	}

	get label(): DeepPartial<EShapeTextLike> | undefined {
		return this._label;
	}

	protected toPosition(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseOptions
	): DChartAxisPosition {
		const position = options?.position;
		if (isString(position)) {
			return DChartAxisPosition[position];
		} else if (position != null) {
			return position;
		}
		return theme.getPosition();
	}

	protected toBar(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseOptions
	): DChartAxisBaseOptionParserBar {
		return {
			style: options?.style ?? theme.getStyle(),
			stroke: this.toBarStroke(theme, options?.stroke)
		};
	}

	protected toTickContainer(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseOptions
	): DChartAxisBaseOptionParserTickContainer {
		const tick = options?.tick;
		return {
			enable: tick?.enable ?? theme.getTickEnable(),
			major: this.toTickMajor(theme, tick),
			minor: this.toTickMinor(theme, tick)
		};
	}

	protected toTickMajor(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickContainerOptions
	): DChartAxisBaseOptionParserTickMajor {
		const major = options?.major;
		const position = major?.position ?? options?.position ?? theme.getMajorTickPosition();
		const optionsStyle = options?.style;
		const style = EShapePointsStyles.from(
			major?.style ?? optionsStyle ?? theme.getMajorTickStyle()
		);
		const optionsStroke = options?.stroke;
		const stroke = this.toTickMajorStroke(theme, major?.stroke, optionsStroke);
		const count = major?.count ?? theme.getMajorTickCount();
		const capacity = major?.capacity ?? theme.getMajorTickCapacity(count);
		return {
			count,
			capacity,
			step: major?.step ?? theme.getMajorTickStep(),
			size: major?.size ?? theme.getMajorTickSize(),
			position: this.toTickPosition(position),
			style,
			stroke,
			text: this.toTickMajorText(theme, major?.text),
			formatter: this.toTickMajorFormatter(theme, major),
			gridline: this.toTickMajorGridline(theme, major?.gridline, optionsStyle, optionsStroke)
		};
	}

	protected toTickMajorGridline(
		theme: DThemeChartAxisBase,
		options: DChartAxisBaseTickMajorGridlineOptions | undefined,
		optionsStyle: EShapePointsStyleOption | undefined,
		optionsStroke: Partial<EShapeStrokeLike> | undefined
	): DChartAxisBaseOptionParserGridline {
		const style = EShapePointsStyles.from(
			options?.style ?? optionsStyle ?? theme.getMajorTickGridlineStyle()
		);
		return {
			enable: options?.enable ?? theme.getMajorTickGridlineEnable(),
			style,
			stroke: this.toTickMajorGridlineStroke(theme, options?.stroke, optionsStroke)
		};
	}

	protected toTickPosition(
		tickPosition: DChartAxisTickPosition | keyof typeof DChartAxisTickPosition
	): EShapeBarPosition {
		const position = this._position;
		if (tickPosition === DChartAxisTickPosition.OUTSIDE || tickPosition === "OUTSIDE") {
			switch (position) {
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
			switch (position) {
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

	protected toTickMinor(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickContainerOptions
	): DChartAxisBaseOptionParserTickMinor {
		const minor = options?.minor;
		const position = minor?.position ?? options?.position ?? theme.getMinorTickPosition();
		const style = EShapePointsStyles.from(
			minor?.style ?? options?.style ?? theme.getMinorTickStyle()
		);
		return {
			count: minor?.count ?? theme.getMinorTickCount(),
			step: minor?.step ?? theme.getMinorTickStep(),
			size: minor?.size ?? theme.getMinorTickSize(),
			position: this.toTickPosition(position),
			style,
			stroke: this.toTickMinorStroke(theme, minor?.stroke, options?.stroke),
			text: this.toTickMinorText(theme, minor?.text),
			formatter: this.toTickMinorFormatter(theme, minor)
		};
	}

	protected toBarStroke(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeStrokeLike>
	): Partial<EShapeStrokeLike> {
		return this.toStroke(
			options,
			undefined,
			theme.getStrokeEnable(),
			theme.getStrokeColor(),
			theme.getStrokeAlpha(),
			theme.getStrokeWidth(),
			theme.getStrokeAlign(),
			theme.getStrokeSide(),
			theme.getStrokeStyle()
		);
	}

	protected toTickMajorStroke(
		theme: DThemeChartAxisBase,
		optionsA?: Partial<EShapeStrokeLike>,
		optionsB?: Partial<EShapeStrokeLike>
	): Partial<EShapeStrokeLike> {
		return this.toStroke(
			optionsA,
			optionsB,
			theme.getMajorTickStrokeEnable(),
			theme.getMajorTickStrokeColor(),
			theme.getMajorTickStrokeAlpha(),
			theme.getMajorTickStrokeWidth(),
			theme.getMajorTickStrokeAlign(),
			theme.getMajorTickStrokeSide(),
			theme.getMajorTickStrokeStyle()
		);
	}

	protected toTickMajorGridlineStroke(
		theme: DThemeChartAxisBase,
		optionsA?: Partial<EShapeStrokeLike>,
		optionsB?: Partial<EShapeStrokeLike>
	): Partial<EShapeStrokeLike> {
		return this.toStroke(
			optionsA,
			optionsB,
			theme.getMajorTickGridlineStrokeEnable(),
			theme.getMajorTickGridlineStrokeColor(),
			theme.getMajorTickGridlineStrokeAlpha(),
			theme.getMajorTickGridlineStrokeWidth(),
			theme.getMajorTickGridlineStrokeAlign(),
			theme.getMajorTickGridlineStrokeSide(),
			theme.getMajorTickGridlineStrokeStyle()
		);
	}

	protected toTickMinorStroke(
		theme: DThemeChartAxisBase,
		optionsA?: Partial<EShapeStrokeLike>,
		optionsB?: Partial<EShapeStrokeLike>
	): Partial<EShapeStrokeLike> {
		return this.toStroke(
			optionsA,
			optionsB,
			theme.getMinorTickStrokeEnable(),
			theme.getMinorTickStrokeColor(),
			theme.getMinorTickStrokeAlpha(),
			theme.getMinorTickStrokeWidth(),
			theme.getMinorTickStrokeAlign(),
			theme.getMinorTickStrokeSide(),
			theme.getMinorTickStrokeStyle()
		);
	}

	protected toStroke(
		optionsA: Partial<EShapeStrokeLike> | undefined,
		optionsB: Partial<EShapeStrokeLike> | undefined,
		enable: boolean | undefined,
		color: number | undefined,
		alpha: number | undefined,
		width: number | undefined,
		align: number | undefined,
		side: EShapeStrokeSide | undefined,
		style: EShapeStrokeStyle | undefined
	): Partial<EShapeStrokeLike> {
		if (optionsA) {
			if (optionsB) {
				return {
					enable: optionsA.enable ?? optionsB.enable ?? enable,
					color: optionsA.color ?? optionsB.color ?? color,
					alpha: optionsA.alpha ?? optionsB.alpha ?? alpha,
					width: optionsA.width ?? optionsB.width ?? width,
					align: optionsA.align ?? optionsB.align ?? align,
					side: optionsA.side ?? optionsB.side ?? side,
					style: optionsA.style ?? optionsB.style ?? style
				};
			} else {
				return {
					enable: optionsA.enable ?? enable,
					color: optionsA.color ?? color,
					alpha: optionsA.alpha ?? alpha,
					width: optionsA.width ?? width,
					align: optionsA.align ?? align,
					side: optionsA.side ?? side,
					style: optionsA.style ?? style
				};
			}
		} else if (optionsB) {
			return {
				enable: optionsB.enable ?? enable,
				color: optionsB.color ?? color,
				alpha: optionsB.alpha ?? alpha,
				width: optionsB.width ?? width,
				align: optionsB.align ?? align,
				side: optionsB.side ?? side,
				style: optionsB.style ?? style
			};
		} else {
			return {
				enable,
				color,
				alpha,
				width,
				align,
				side,
				style
			};
		}
	}

	protected toTickMajorFormatter(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickMajorOptions
	): NumberFormatter | undefined {
		const text = options?.text;
		if (text) {
			const format = text.format;
			if (format === null) {
				return undefined;
			} else if (format != null) {
				return NumberFormatters.create(format);
			} else {
				const formatter = text.formatter;
				if (formatter) {
					return {
						format: formatter
					};
				}
			}
		}
		const format = theme.getMajorTickTextFormat();
		if (format != null) {
			return NumberFormatters.create(format);
		}
		return undefined;
	}

	protected toTickMajorText(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickTextOptions
	): DChartAxisBaseTickTextOptions | undefined {
		options = options || {};
		return {
			format: options.format,
			color: this.toTickMajorTextColor(theme, options.color),
			alpha: options.alpha,
			family: options.family,
			size: options.size,
			weight: options.weight,
			align: this.toTickMajorTextAlign(theme, options.align),
			offset: this.toTickMajorTextOffset(theme, options.offset),
			style: options.style,
			outline: this.toTickMajorTextOutline(theme, options.outline),
			spacing: this.toTickMajorTextSpacing(theme, options.spacing),
			direction: this.toTickMajorTextDirection(theme, options.direction),
			padding: this.toTickMajorTextPadding(theme, options.padding),
			clipping: options.clipping
		};
	}

	protected toTickMajorTextOutline(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOutlineLike>
	): Partial<EShapeTextOutlineLike> | undefined {
		if (options) {
			return {
				enable: options.enable,
				color: options.color,
				alpha: options.alpha,
				width: options.width
			};
		}
	}

	protected toTickMajorTextAlign(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextAlignLike>
	): Partial<EShapeTextAlignLike> | undefined {
		const position = this._position;
		return {
			horizontal: options?.horizontal ?? theme.getMajorTickTextAlignHorizontal(position),
			vertical: options?.vertical ?? theme.getMajorTickTextAlignVertical(position)
		};
	}

	protected toTickMajorTextOffset(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> | undefined {
		if (options) {
			return {
				horizontal: options.horizontal,
				vertical: options.vertical
			};
		}
	}

	protected toTickMajorTextSpacing(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> | undefined {
		if (options) {
			return {
				horizontal: options.horizontal,
				vertical: options.vertical
			};
		}
	}

	protected toTickMajorTextPadding(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> {
		return {
			horizontal: options?.horizontal ?? theme.getMajorTickTextPaddingHorizontal(),
			vertical: options?.vertical ?? theme.getMajorTickTextPaddingVertical()
		};
	}

	protected toTickMajorTextDirection(
		theme: DThemeChartAxisBase,
		options?: EShapeTextDirection
	): EShapeTextDirection {
		return options ?? theme.getMajorTickTextDirection();
	}

	protected toTickMajorTextColor(
		theme: DThemeChartAxisBase,
		options?: number
	): number | undefined {
		return options ?? theme.getMajorTickTextColor();
	}

	protected toTickMinorFormatter(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickMinorOptions
	): NumberFormatter | undefined {
		const text = options?.text;
		if (text) {
			const format = text.format;
			if (format === null) {
				return undefined;
			} else if (format != null) {
				return NumberFormatters.create(format);
			} else {
				const formatter = text.formatter;
				if (formatter) {
					return {
						format: formatter
					};
				}
			}
		}
		const format = theme.getMinorTickTextFormat();
		if (format != null) {
			return NumberFormatters.create(format);
		}
		return undefined;
	}

	protected toTickMinorText(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseTickTextOptions
	): DChartAxisBaseTickTextOptions | undefined {
		options = options || {};
		return {
			format: options.format,
			color: this.toTickMinorTextColor(theme, options.color),
			alpha: options.alpha,
			family: options.family,
			size: options.size,
			weight: options.weight,
			align: this.toTickMinorTextAlign(theme, options.align),
			offset: this.toTickMinorTextOffset(theme, options.offset),
			style: options.style,
			outline: this.toTickMinorTextOutline(theme, options.outline),
			spacing: this.toTickMinorTextSpacing(theme, options.spacing),
			direction: this.toTickMinorTextDirection(theme, options.direction),
			padding: this.toTickMinorTextPadding(theme, options.padding),
			clipping: options.clipping
		};
	}

	protected toTickMinorTextOutline(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOutlineLike>
	): Partial<EShapeTextOutlineLike> | undefined {
		if (options) {
			return {
				enable: options.enable,
				color: options.color,
				alpha: options.alpha,
				width: options.width
			};
		}
	}

	protected toTickMinorTextAlign(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextAlignLike>
	): Partial<EShapeTextAlignLike> | undefined {
		const position = this._position;
		return {
			horizontal: options?.horizontal ?? theme.getMinorTickTextAlignHorizontal(position),
			vertical: options?.vertical ?? theme.getMinorTickTextAlignVertical(position)
		};
	}

	protected toTickMinorTextOffset(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> | undefined {
		if (options) {
			return {
				horizontal: options.horizontal,
				vertical: options.vertical
			};
		}
	}

	protected toTickMinorTextSpacing(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> | undefined {
		if (options) {
			return {
				horizontal: options.horizontal,
				vertical: options.vertical
			};
		}
	}

	protected toTickMinorTextPadding(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> {
		return {
			horizontal: options?.horizontal ?? theme.getMinorTickTextPaddingHorizontal(),
			vertical: options?.vertical ?? theme.getMinorTickTextPaddingVertical()
		};
	}

	protected toTickMinorTextDirection(
		theme: DThemeChartAxisBase,
		options?: EShapeTextDirection
	): EShapeTextDirection {
		return options ?? theme.getMinorTickTextDirection();
	}

	protected toTickMinorTextColor(
		theme: DThemeChartAxisBase,
		options?: number
	): number | undefined {
		return options ?? theme.getMinorTickTextColor();
	}

	protected toLabel(
		theme: DThemeChartAxisBase,
		options?: DChartAxisBaseOptions
	): DeepPartial<EShapeTextLike> | undefined {
		const label = options?.label;
		if (label) {
			return {
				value: label.value,
				color: this.toLabelColor(theme, label.color),
				alpha: label.alpha,
				family: label.family,
				size: label.size,
				weight: label.weight,
				align: this.toLabelAlign(theme, label.align),
				offset: this.toLabelOffset(theme, label.offset),
				style: label.style,
				outline: this.toLabelOutline(theme, label.outline),
				spacing: this.toLabelSpacing(theme, label.spacing),
				direction: this.toLabelDirection(theme, label.direction),
				padding: this.toLabelPadding(theme, label.padding),
				clipping: label.clipping
			};
		}
	}

	protected toLabelOutline(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOutlineLike>
	): Partial<EShapeTextOutlineLike> | undefined {
		if (options) {
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
		return {
			horizontal: options?.horizontal ?? theme.getLabelAlignHorizontal(position),
			vertical: options?.vertical ?? theme.getLabelAlignVertical(position)
		};
	}

	protected toLabelOffset(
		theme: DThemeChartAxisBase,
		options?: Partial<EShapeTextOffsetLike>
	): Partial<EShapeTextOffsetLike> | undefined {
		if (options) {
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
		if (options) {
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
			horizontal: options?.horizontal ?? theme.getLabelPaddingHorizontal(),
			vertical: options?.vertical ?? theme.getLabelPaddingVertical()
		};
	}

	protected toLabelDirection(
		theme: DThemeChartAxisBase,
		options?: EShapeTextDirection
	): EShapeTextDirection {
		return options ?? theme.getLabelDirection();
	}

	protected toLabelColor(theme: DThemeChartAxisBase, options?: number): number | undefined {
		return options ?? theme.getLabelColor();
	}
}
