import { DBase } from "./d-base";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisGuide } from "./d-chart-axis-guide";

export interface DChartAxisGuideContainer<CHART extends DBase = DBase> {
	add(guide: DChartAxisGuide<CHART>): this;
	get(index: number): DChartAxisGuide<CHART> | null;
	indexOf(guide: DChartAxisGuide<CHART>): number;
	clear(): this;
	size(): number;

	bind(container: DChartAxisContainer<CHART>, index: number): void;
	unbind(): void;
	update(): boolean;
	destroy(): void;
}
