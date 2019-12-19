/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisOptions, DChartAxisPosition, DChartAxisTickPosition } from "./d-chart-axis";
import { EShapePointsStyle } from "./shape/e-shape-points";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";
import { EShapeStrokeLike, EShapeStrokeSide } from "./shape/e-shape-stroke";
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

export interface DChartAxisBaseTickMajorGridlineOptions {
	enable?: boolean;
	style?: EShapePointsStyleOption;
	stroke?: Partial<EShapeStrokeLike>;
}

export type DChartAxisTickPositionOption
	= DChartAxisTickPosition | keyof typeof DChartAxisTickPosition;

export interface DChartAxisBaseTickMajorOptions {
	count?: number;
	size?: number;
	position?: DChartAxisTickPositionOption;
	style?: EShapePointsStyleOption;
	stroke?: Partial<EShapeStrokeLike>;
	text?: DChartAxisBaseTickMajorTextOptions;
	gridline?: DChartAxisBaseTickMajorGridlineOptions;
}

export interface DChartAxisBaseTickMinorOptions {
	count?: number;
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

	getLabelAlignHorizontal( position: DChartAxisPosition ): EShapeTextAlignHorizontal;
	getLabelAlignVertical( position: DChartAxisPosition ): EShapeTextAlignVertical;
	getLabelPaddingHorizontal(): number;
	getLabelPaddingVertical(): number;
	getLabelDirection(): EShapeTextDirection;

	getStyle(): EShapePointsStyle;

	getStrokeEnable(): boolean;
	getStrokeColor(): number;
	getStrokeAlpha(): number;
	getStrokeWidth(): number;
	getStrokeAlign(): number;
	getStrokeSide(): EShapeStrokeSide;

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
	getMajorTickStrokeEnable(): boolean;
	getMajorTickStrokeColor(): number;
	getMajorTickStrokeAlpha(): number;
	getMajorTickStrokeWidth(): number;
	getMajorTickStrokeAlign(): number;
	getMajorTickStrokeSide(): EShapeStrokeSide;

	getMajorTickGridlineEnable(): boolean;
	getMajorTickGridlineStyle(): EShapePointsStyle;
	getMajorTickGridlineStrokeEnable(): boolean;
	getMajorTickGridlineStrokeColor(): number;
	getMajorTickGridlineStrokeAlpha(): number;
	getMajorTickGridlineStrokeWidth(): number;
	getMajorTickGridlineStrokeAlign(): number;
	getMajorTickGridlineStrokeSide(): EShapeStrokeSide;

	getMinorTickCount(): number;
	getMinorTickSize(): number;
	getMinorTickPosition(): DChartAxisTickPosition;
	getMinorTickStyle(): EShapePointsStyle;
	getMinorTickStrokeEnable(): boolean;
	getMinorTickStrokeColor(): number;
	getMinorTickStrokeAlpha(): number;
	getMinorTickStrokeWidth(): number;
	getMinorTickStrokeAlign(): number;
	getMinorTickStrokeSide(): EShapeStrokeSide;
}
