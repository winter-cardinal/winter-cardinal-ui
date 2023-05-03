import { DBase } from "./d-base";
import { DChartAxis } from "./d-chart-axis";
import { DChartAxisContainer } from "./d-chart-axis-container";

export interface DChartAxisGuide<CHART extends DBase = DBase> {
	position: number;

	bind(container: DChartAxisContainer<CHART>, index: number, axis: DChartAxis<CHART>): void;
	unbind(): void;
	show(): this;
	isShown(): boolean;
	hide(): this;
	isHidden(): boolean;
	update(): boolean;
	destroy(): void;
}
