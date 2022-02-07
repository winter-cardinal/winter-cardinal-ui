/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisOptions } from "./d-chart-axis";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickPosition } from "./d-chart-axis-tick-position";
import { DChartCoordinateTickMajorStepFunction } from "./d-chart-coordinate-tick-major-step-function";
import { DChartCoordinateTickMinorStepFunction } from "./d-chart-coordinate-tick-minor-step-function";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";
import { EShapeStrokeLike } from "./shape/e-shape-stroke";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";
import { EShapeTextLike, EShapeTextStyle, EShapeTextWeight } from "./shape/e-shape-text";
import { EShapeTextAlignLike } from "./shape/e-shape-text-align";
import { EShapeTextAlignHorizontal } from "./shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "./shape/e-shape-text-align-vertical";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeTextOffsetLike } from "./shape/e-shape-text-offset";
import { EShapeTextOutlineLike } from "./shape/e-shape-text-outline";
import { DeepPartial } from "./util/deep-partial";
import { NumberFormatterFunction } from "./util/number-formatter-function";

export interface DChartAxisBaseTickMajorTextOptions {
	/** A format. Please refer to {@link NumberFormatter} for format details. */
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

export interface DChartAxisBaseTickMajorGridlineOptions {
	enable?: boolean;
	style?: EShapePointsStyleOption;
	stroke?: Partial<EShapeStrokeLike>;
}

export type DChartAxisTickPositionOption =
	| DChartAxisTickPosition
	| keyof typeof DChartAxisTickPosition;

export interface DChartAxisBaseTickMajorOptions {
	count?: number;
	step?: number | DChartCoordinateTickMajorStepFunction;
	size?: number;
	position?: DChartAxisTickPositionOption;
	style?: EShapePointsStyleOption;
	stroke?: Partial<EShapeStrokeLike>;
	text?: DChartAxisBaseTickMajorTextOptions;
	gridline?: DChartAxisBaseTickMajorGridlineOptions;
}

export interface DChartAxisBaseTickMinorOptions {
	count?: number;
	step?: number | DChartCoordinateTickMinorStepFunction;
	size?: number;
	position?: DChartAxisTickPositionOption;
	style?: EShapePointsStyleOption;
	stroke?: Partial<EShapeStrokeLike>;
}

export interface DChartAxisBaseTickContainerOptions {
	enable?: boolean;
	position?: DChartAxisTickPositionOption;
	style?: EShapePointsStyleOption;
	stroke?: Partial<EShapeStrokeLike>;
	major?: DChartAxisBaseTickMajorOptions;
	minor?: DChartAxisBaseTickMinorOptions;
}

export interface DChartAxisBaseOptions extends DChartAxisOptions {
	tick?: DChartAxisBaseTickContainerOptions;
	label?: DeepPartial<EShapeTextLike>;
	style?: EShapePointsStyle;
	stroke?: Partial<EShapeStrokeLike>;
	coordinate?: number;
	padding?: number;
	theme?: DThemeChartAxisBase;
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
	getMajorTickStep(): number | DChartCoordinateTickMajorStepFunction | undefined;
	getMajorTickSize(): number;
	getMajorTickPosition(): DChartAxisTickPosition;
	getMajorTickStyle(): EShapePointsStyle | undefined;
	getMajorTickTextAlignHorizontal(position: DChartAxisPosition): EShapeTextAlignHorizontal;
	getMajorTickTextAlignVertical(position: DChartAxisPosition): EShapeTextAlignVertical;
	getMajorTickTextDirection(): EShapeTextDirection;
	getMajorTickTextFormat(): string;
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
	getMinorTickStrokeEnable(): boolean | undefined;
	getMinorTickStrokeColor(): number | undefined;
	getMinorTickStrokeAlpha(): number | undefined;
	getMinorTickStrokeWidth(): number | undefined;
	getMinorTickStrokeAlign(): number | undefined;
	getMinorTickStrokeSide(): EShapeStrokeSide | undefined;
	getMinorTickStrokeStyle(): EShapeStrokeStyle | undefined;
}
