import { IPoint, Rectangle } from "pixi.js";
import { DBase } from "./d-base";
import { DChartPlotAreaTwofoldSubPrimary } from "./d-chart-plot-area-twofold-sub-primary";
import { DChartPlotAreaTwofoldSubSecondary } from "./d-chart-plot-area-twofold-sub-secondary";
import { DViewTarget, DViewTargetPoint } from "./d-view-to-target";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";

export interface DChartPlotAreaTwofoldViewTargetParent<CHART extends DBase> {
	readonly primary: DChartPlotAreaTwofoldSubPrimary<CHART>;
	readonly secondary: DChartPlotAreaTwofoldSubSecondary<CHART>;
}

export class DChartPlotAreaTwofoldViewTargetPoint {
	protected _primary: IPoint;
	protected _secondary: IPoint;

	constructor(primary: IPoint, secondary: IPoint) {
		this._primary = primary;
		this._secondary = secondary;
	}

	get x(): number {
		return this._secondary.x;
	}

	set x(x: number) {
		this._primary.x = x;
		this._secondary.x = x;
	}

	get y(): number {
		return this._secondary.y;
	}

	set y(y: number) {
		this._primary.y = y;
		this._secondary.y = y;
	}

	set(x?: number, y?: number): this {
		this._primary.set(x, y);
		this._secondary.set(x, y);
		return this;
	}
}

export class DChartPlotAreaTwofoldViewTarget<CHART extends DBase> implements DViewTarget {
	protected _primary: DChartPlotAreaContainer;
	protected _secondary: DChartPlotAreaContainer;
	protected _scale: DChartPlotAreaTwofoldViewTargetPoint;
	protected _position: DChartPlotAreaTwofoldViewTargetPoint;

	constructor(primary: DChartPlotAreaContainer, secondary: DChartPlotAreaContainer) {
		this._primary = primary;
		this._secondary = secondary;
		this._scale = new DChartPlotAreaTwofoldViewTargetPoint(primary.scale, secondary.scale);
		this._position = new DChartPlotAreaTwofoldViewTargetPoint(
			primary.position,
			secondary.position
		);
	}

	get scale(): DViewTargetPoint {
		return this._scale;
	}

	get position(): DViewTargetPoint {
		return this._position;
	}

	getLocalBounds(rect: Rectangle): Rectangle {
		this._primary.getLocalBounds(rect);
		const x1 = rect.x;
		const y1 = rect.y;
		const w1 = rect.width;
		const h1 = rect.height;
		this._secondary.getLocalBounds(rect);
		const x2 = rect.x;
		const y2 = rect.y;
		const w2 = rect.width;
		const h2 = rect.height;
		const x3 = Math.min(x1, x2);
		const y3 = Math.min(y1, y2);
		const x4 = Math.max(x1 + w1, x2 + w2);
		const y4 = Math.max(y1 + h1, y2 + h2);
		rect.x = x3;
		rect.y = y3;
		rect.width = x4 - x3;
		rect.height = y4 - y3;
		return rect;
	}
}
