/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOnOptions } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DChartSelection, DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionSub, DChartSelectionSubOptions } from "./d-chart-selection-sub";
import { DChartSelectionSubImpl } from "./d-chart-selection-sub-impl";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { toEnum } from "./util/to-enum";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DChartSelectionMultileOptions<CHART extends DBase = DBase, EMITTER = any> {
	selected?: DChartSelectionSubOptions<CHART>;
	hovered?: DChartSelectionSubOptions<CHART>;
	point?: DChartSelectionPoint | keyof typeof DChartSelectionPoint;
	on?: DBaseOnOptions<EMITTER>;
}

export class DChartSelectionMultiple<CHART extends DBase = DBase>
	extends utils.EventEmitter
	implements DChartSelection<CHART>
{
	protected static WORK_SELECT: DChartSeriesHitResult = new DChartSeriesHitResult();

	protected _container: DChartSeriesContainer<CHART> | null;
	protected _selected: DChartSelectionSub<CHART>[];
	protected _hovered: DChartSelectionSub<CHART>;

	protected _options: DChartSelectionMultileOptions<CHART> | undefined;
	protected _point: DChartSelectionPoint;

	protected _onClickBound!: (e: interaction.InteractionEvent) => void;
	protected _onMoveBound!: (e: interaction.InteractionEvent) => void;

	constructor(options?: DChartSelectionMultileOptions<CHART>) {
		super();

		this._container = null;
		this._options = options;
		this._point = toEnum(options?.point ?? DChartSelectionPoint.CLOSER, DChartSelectionPoint);
		this._selected = [];
		this._hovered = this.newHovered(this._point, options?.hovered);

		// Events
		const on = options?.on;
		if (on != null) {
			for (const name in on) {
				const handler = on[name];
				if (handler) {
					this.on(name, handler);
				}
			}
		}

		//
		this._onMoveBound = (e: interaction.InteractionEvent): void => {
			this.onMove(e);
		};

		this._onClickBound = (e: interaction.InteractionEvent): void => {
			this.onClick(e);
		};
	}

	protected newSelected(
		point: DChartSelectionPoint,
		options?: DChartSelectionSubOptions<CHART>
	): DChartSelectionSub<CHART> {
		return new DChartSelectionSubImpl(this.toSelectedOptions(point, options));
	}

	protected newHovered(
		point: DChartSelectionPoint,
		options?: DChartSelectionSubOptions<CHART>
	): DChartSelectionSub<CHART> {
		return new DChartSelectionSubImpl(this.toHoveredOptions(point, options));
	}

	protected toSelectedOptions(
		point: DChartSelectionPoint,
		options?: DChartSelectionSubOptions<CHART>
	): DChartSelectionSubOptions<CHART> {
		return this.toSubOptions(point, options, DBaseState.ACTIVE);
	}

	protected toHoveredOptions(
		point: DChartSelectionPoint,
		options?: DChartSelectionSubOptions<CHART>
	): DChartSelectionSubOptions<CHART> {
		return this.toSubOptions(point, options, DBaseState.HOVERED);
	}

	protected toSubOptions(
		point: DChartSelectionPoint,
		options: DChartSelectionSubOptions<CHART> | undefined,
		state: string
	): DChartSelectionSubOptions<CHART> {
		options = options || {};

		if (options.point == null) {
			options.point = point;
		}

		if (options.state == null) {
			options.state = state;
		}

		const gridline = (options.gridline ??= {});
		const gridlineX = (gridline.x ??= {});
		if (gridlineX.state == null) {
			gridlineX.state = state;
		}

		const gridlineY = (gridline.y ??= {});
		if (gridlineY.state == null) {
			gridlineY.state = state;
		}

		const marker = (options.marker ??= {});
		if (marker.state == null) {
			marker.state = state;
		}

		const label = (options.label ??= {});
		const labelX = (label.x ??= {});
		if (labelX.state == null) {
			labelX.state = state;
		}

		const labelY = (label.y ??= {});
		if (labelY.state == null) {
			labelY.state = state;
		}

		return options;
	}

	protected onClick(e: interaction.InteractionEvent): void {
		const container = this._container;
		if (container && e.target === container.plotArea) {
			const result = DChartSelectionMultiple.WORK_SELECT;
			const global = e.data.global;
			const series = container.calcHitPoint(global.x, global.y, result);
			const selected = this._selected;
			if (series) {
				selected[series.index].set(series, result);
			} else {
				selected.forEach((s) => {
					s.unset();
				});
			}
		}
	}

	protected onMove(e: interaction.InteractionEvent): void {
		const container = this._container;
		if (container) {
			const hovered = this._hovered;
			if (e.target === container.plotArea) {
				const result = DChartSelectionMultiple.WORK_SELECT;
				const global = e.data.global;
				const series = container.calcHitPoint(global.x, global.y, result);
				if (series) {
					hovered.set(series, result);
				} else {
					hovered.unset();
				}
			} else {
				hovered.unset();
			}
		}
	}

	bind(container: DChartSeriesContainer<CHART>): void {
		this._container = container;
		for (let i = 0, imax = container.size(); i < imax; i++) {
			const s = this.newSelected(this._point, this._options?.selected);
			s.bind(container);
			this._selected.push(s);
		}
		this._hovered.bind(container);
		const plotArea = container.plotArea;
		plotArea.on(UtilPointerEvent.move, this._onMoveBound);
		plotArea.on(UtilPointerEvent.tap, this._onClickBound);
	}

	unbind(): void {
		const container = this._container;
		this._container = null;
		if (container) {
			const plotArea = container.plotArea;
			plotArea.off(UtilPointerEvent.move, this._onMoveBound);
		}
		this._selected.forEach((s) => {
			s.unbind();
		});
		this._hovered.unbind();
	}

	get selected(): DChartSelectionSub<CHART>[] {
		return this._selected;
	}

	get hovered(): DChartSelectionSub<CHART> {
		return this._hovered;
	}

	update(): void {
		let isSelectedUpdated = false;
		this._selected.forEach((s) => {
			isSelectedUpdated = s.update() || isSelectedUpdated;
		});
		const isHoveredUpdated = this._hovered.update();
		if (isSelectedUpdated || isHoveredUpdated) {
			const container = this._container;
			if (container != null) {
				DApplications.update(container.plotArea);
			}
		}
	}

	onRender(): void {
		this._selected.forEach((s) => {
			s.update();
		});
		this._hovered.update();
	}
}
