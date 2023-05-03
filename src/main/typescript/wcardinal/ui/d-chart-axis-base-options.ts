/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisOptions } from "./d-chart-axis";
import { DChartAxisGuide } from "./d-chart-axis-guide";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickPosition } from "./d-chart-axis-tick-position";
import { DChartCoordinateTickMajorStepFunction } from "./d-chart-coordinate-tick-major-step-function";
import { DChartCoordinateTickMinorStepFunction } from "./d-chart-coordinate-tick-minor-step-function";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";
import { EShapeTextStyle, EShapeTextWeight } from "./shape/e-shape-text";
import { EShapeTextAlignLike } from "./shape/e-shape-text-align";
import { EShapeTextAlignHorizontal } from "./shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "./shape/e-shape-text-align-vertical";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeTextOffsetLike } from "./shape/e-shape-text-offset";
import { EShapeTextOutlineLike } from "./shape/e-shape-text-outline";
import { NumberFormatterFunction } from "./util/number-formatter-function";

export type DChartAxisBaseTextWeightOption = EShapeTextWeight | keyof typeof EShapeTextWeight;

export type DChartAxisBaseTextStyleOption = EShapeTextStyle | keyof typeof EShapeTextStyle;

export type DChartAxisBaseTextDirectionOption =
	| EShapeTextDirection
	| keyof typeof EShapeTextDirection;

export interface DChartAxisBaseTickTextOptions {
	/** A format. Please refer to {@link NumberFormatter} for format details. */
	format?: string | null;

	/** A formatter function. */
	formatter?: NumberFormatterFunction;

	color?: number;
	alpha?: number;
	family?: string;
	size?: number;
	weight?: DChartAxisBaseTextWeightOption;
	align?: Partial<EShapeTextAlignLike>;
	offset?: Partial<EShapeTextOffsetLike>;
	style?: DChartAxisBaseTextStyleOption;
	outline?: Partial<EShapeTextOutlineLike>;
	spacing?: Partial<EShapeTextOffsetLike>;
	direction?: DChartAxisBaseTextDirectionOption;
	padding?: Partial<EShapeTextOffsetLike>;
	clipping?: boolean;
}

export interface DChartAxisBaseStrokeOptions {
	enable?: boolean;
	color?: number;
	alpha?: number;
	width?: number;
	align?: number;
	side?: EShapeStrokeSide;
	style?:
		| EShapeStrokeStyle
		| keyof typeof EShapeStrokeStyle
		| Array<keyof typeof EShapeStrokeStyle>;
}

export interface DChartAxisBaseTickMajorGridlineOptions {
	enable?: boolean;
	style?: EShapePointsStyleOption;
	stroke?: DChartAxisBaseStrokeOptions;
}

export type DChartAxisTickPositionOption =
	| DChartAxisTickPosition
	| keyof typeof DChartAxisTickPosition;

export interface DChartAxisBaseTickMajorOptions {
	count?: number;
	capacity?: number;
	step?: number | DChartCoordinateTickMajorStepFunction;
	size?: number;
	position?: DChartAxisTickPositionOption;
	style?: EShapePointsStyleOption;
	stroke?: DChartAxisBaseStrokeOptions;
	text?: DChartAxisBaseTickTextOptions;
	gridline?: DChartAxisBaseTickMajorGridlineOptions;
}

export interface DChartAxisBaseTickMinorOptions {
	count?: number;
	step?: number | DChartCoordinateTickMinorStepFunction;
	size?: number;
	position?: DChartAxisTickPositionOption;
	style?: EShapePointsStyleOption;
	stroke?: DChartAxisBaseStrokeOptions;
	text?: DChartAxisBaseTickTextOptions;
}

export interface DChartAxisBaseTickOptions {
	enable?: boolean;
	position?: DChartAxisTickPositionOption;
	style?: EShapePointsStyleOption;
	stroke?: DChartAxisBaseStrokeOptions;
	major?: DChartAxisBaseTickMajorOptions;
	minor?: DChartAxisBaseTickMinorOptions;
}

export interface DChartAxisBaseLabelOptions {
	value?: string;
	color?: number;
	alpha?: number;
	family?: string;
	size?: number;
	weight?: DChartAxisBaseTextWeightOption;
	align?: Partial<EShapeTextAlignLike>;
	offset?: Partial<EShapeTextOffsetLike>;
	style?: DChartAxisBaseTextStyleOption;
	outline?: Partial<EShapeTextOutlineLike>;
	spacing?: Partial<EShapeTextOffsetLike>;
	direction?: DChartAxisBaseTextDirectionOption;
	padding?: Partial<EShapeTextOffsetLike>;
	clipping?: boolean;
}

export interface DChartAxisBaseGuideOptions {
	list?: DChartAxisGuide[];
}

export interface DChartAxisBaseOptions<THEME extends DThemeChartAxisBase = DThemeChartAxisBase>
	extends DChartAxisOptions {
	tick?: DChartAxisBaseTickOptions;
	label?: DChartAxisBaseLabelOptions;
	style?: EShapePointsStyle;
	stroke?: DChartAxisBaseStrokeOptions;
	coordinate?: number;
	padding?: number;
	theme?: THEME;
	guide?: DChartAxisBaseGuideOptions;
}

export interface DThemeChartAxisBase {
	getPosition(): DChartAxisPosition;
	getPadding(): number;

	getLabelAlignHorizontal(position: DChartAxisPosition): EShapeTextAlignHorizontal;
	getLabelAlignVertical(position: DChartAxisPosition): EShapeTextAlignVertical;
	getLabelPaddingHorizontal(): number;
	getLabelPaddingVertical(): number;
	getLabelDirection(): EShapeTextDirection;
	getLabelColor(): number | undefined;

	getStyle(): EShapePointsStyle | undefined;

	getStrokeEnable(): boolean | undefined;
	getStrokeColor(): number | undefined;
	getStrokeAlpha(): number | undefined;
	getStrokeWidth(): number | undefined;
	getStrokeAlign(): number | undefined;
	getStrokeSide(): EShapeStrokeSide | undefined;
	getStrokeStyle(): EShapeStrokeStyle | undefined;

	getTickEnable(): boolean;

	getMajorTickCount(): number;
	getMajorTickCapacity(count: number): number;
	getMajorTickStep(): number | DChartCoordinateTickMajorStepFunction | undefined;
	getMajorTickSize(): number;
	getMajorTickPosition(): DChartAxisTickPosition;
	getMajorTickStyle(): EShapePointsStyle | undefined;
	getMajorTickTextAlignHorizontal(position: DChartAxisPosition): EShapeTextAlignHorizontal;
	getMajorTickTextAlignVertical(position: DChartAxisPosition): EShapeTextAlignVertical;
	getMajorTickTextDirection(): EShapeTextDirection;
	getMajorTickTextFormat(): string | undefined;
	getMajorTickTextColor(): number | undefined;
	getMajorTickTextPaddingHorizontal(): number;
	getMajorTickTextPaddingVertical(): number;
	getMajorTickStrokeEnable(): boolean | undefined;
	getMajorTickStrokeColor(): number | undefined;
	getMajorTickStrokeAlpha(): number | undefined;
	getMajorTickStrokeWidth(): number | undefined;
	getMajorTickStrokeAlign(): number | undefined;
	getMajorTickStrokeSide(): EShapeStrokeSide | undefined;
	getMajorTickStrokeStyle(): EShapeStrokeStyle | undefined;

	getMajorTickGridlineEnable(): boolean;
	getMajorTickGridlineStyle(): EShapePointsStyle | undefined;
	getMajorTickGridlineStrokeEnable(): boolean | undefined;
	getMajorTickGridlineStrokeColor(): number | undefined;
	getMajorTickGridlineStrokeAlpha(): number | undefined;
	getMajorTickGridlineStrokeWidth(): number | undefined;
	getMajorTickGridlineStrokeAlign(): number | undefined;
	getMajorTickGridlineStrokeSide(): EShapeStrokeSide | undefined;
	getMajorTickGridlineStrokeStyle(): EShapeStrokeStyle | undefined;

	getMinorTickCount(): number;
	getMinorTickStep(): number | DChartCoordinateTickMinorStepFunction | undefined;
	getMinorTickSize(): number;
	getMinorTickPosition(): DChartAxisTickPosition;
	getMinorTickStyle(): EShapePointsStyle | undefined;
	getMinorTickTextAlignHorizontal(position: DChartAxisPosition): EShapeTextAlignHorizontal;
	getMinorTickTextAlignVertical(position: DChartAxisPosition): EShapeTextAlignVertical;
	getMinorTickTextDirection(): EShapeTextDirection;
	getMinorTickTextFormat(): string | undefined;
	getMinorTickTextColor(): number | undefined;
	getMinorTickTextPaddingHorizontal(): number;
	getMinorTickTextPaddingVertical(): number;
	getMinorTickStrokeEnable(): boolean | undefined;
	getMinorTickStrokeColor(): number | undefined;
	getMinorTickStrokeAlpha(): number | undefined;
	getMinorTickStrokeWidth(): number | undefined;
	getMinorTickStrokeAlign(): number | undefined;
	getMinorTickStrokeSide(): EShapeStrokeSide | undefined;
	getMinorTickStrokeStyle(): EShapeStrokeStyle | undefined;
}
