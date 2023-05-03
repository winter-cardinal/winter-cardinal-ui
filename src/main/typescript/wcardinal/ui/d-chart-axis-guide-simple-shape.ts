import { DBase } from "./d-base";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { DChartAxis } from "./d-chart-axis";
import { EShapeFillLike } from "./shape/e-shape-fill";
import { EShapeTextStyle, EShapeTextWeight } from "./shape/e-shape-text";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";
import { EShapeRectangleRounded } from "./shape/variant/e-shape-rectangle-rounded";
import { EShapeTextOffsetLike } from "./shape/e-shape-text-offset";
import { EShapeTextOutlineLike } from "./shape/e-shape-text-outline";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeTextAlignHorizontal } from "./shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "./shape/e-shape-text-align-vertical";

export interface DChartAxisGuideSimpleShapeStrokeOptions {
	enable?: boolean;
	color?: number;
	alpha?: number;
	width?: number;
	align?: number;
	side?: EShapeStrokeSide | keyof typeof EShapeStrokeSide;
	style?: EShapeStrokeStyle | keyof typeof EShapeStrokeStyle;
}

export interface DChartAxisGuideSimpleShapeTextAlignOptions {
	horizontal?: EShapeTextAlignHorizontal | keyof typeof EShapeTextAlignHorizontal;
	vertical?: EShapeTextAlignVertical | keyof typeof EShapeTextAlignVertical;
}

export interface DChartAxisGuideSimpleShapeTextOptions {
	value?: string;
	color?: number;
	alpha?: number;
	family?: string;
	size?: number;
	weight?: EShapeTextWeight | keyof typeof EShapeTextWeight;
	align?: DChartAxisGuideSimpleShapeTextAlignOptions;
	offset?: Partial<EShapeTextOffsetLike>;
	style?: EShapeTextStyle | keyof typeof EShapeTextStyle;
	outline?: Partial<EShapeTextOutlineLike>;
	spacing?: Partial<EShapeTextOffsetLike>;
	direction?: EShapeTextDirection | keyof typeof EShapeTextDirection;
	padding?: Partial<EShapeTextOffsetLike>;
	clipping?: boolean;
	fitting?: boolean;
}

export interface DChartAxisGuideSimpleShapeBarOptions {
	enable?: boolean;
	stroke?: DChartAxisGuideSimpleShapeStrokeOptions;
	text?: DChartAxisGuideSimpleShapeTextOptions;
}

export interface DChartAxisGuideSimpleShapeLabelOptions {
	enable?: boolean;
	stroke?: DChartAxisGuideSimpleShapeStrokeOptions;
	fill?: Partial<EShapeFillLike>;
	text?: DChartAxisGuideSimpleShapeTextOptions;
	width?: number;
	height?: number;
	margin?: number;
}

export interface DChartAxisGuideSimpleShapeTickOptions {
	enable?: boolean;
	stroke?: DChartAxisGuideSimpleShapeStrokeOptions;
	text?: DChartAxisGuideSimpleShapeTextOptions;
	size?: number;
	margin?: number;
}

export interface DChartAxisGuideSimpleShapeOptions {
	bar?: DChartAxisGuideSimpleShapeBarOptions;
	label?: DChartAxisGuideSimpleShapeLabelOptions;
	tick?: DChartAxisGuideSimpleShapeTickOptions;
}

export interface DChartAxisGuideSimpleShape<CHART extends DBase = DBase> {
	readonly bar: EShapeBar | null;
	readonly label: EShapeRectangleRounded | null;
	readonly tick: EShapeBar | null;

	bind(container: DChartAxisContainer<CHART>, index: number, axis: DChartAxis<CHART>): void;
	unbind(): void;
	update(
		position: DChartAxisPosition,
		x: number,
		y: number,
		visible: boolean,
		width: number,
		height: number,
		offset: number
	): boolean;
	destroy(): void;
}
