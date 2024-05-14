/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOnOptions } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DChartSelection, DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionSub, DChartSelectionSubOptions } from "./d-chart-selection-sub";
import { DChartSelectionSubImpl } from "./d-chart-selection-sub-impl";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { toEnum } from "./util/to-enum";
import { UtilGestureModifiers } from "./util/util-gesture-modifiers";
import { UtilGestureModifier } from "./util/util-gesture-modifier";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DChartSelectionSimpleDismissOptions {
	enable?: boolean;
	modifier?: keyof typeof UtilGestureModifier | UtilGestureModifier;
}

export interface DChartSelectionSimpleOptions<CHART extends DBase = DBase, EMITTER = any> {
	selected?: DChartSelectionSubOptions<CHART>;
	hovered?: DChartSelectionSubOptions<CHART>;
	point?: DChartSelectionPoint | keyof typeof DChartSelectionPoint;
	on?: DBaseOnOptions<EMITTER>;
	dismiss?: DChartSelectionSimpleDismissOptions;
}

export class DChartSelectionSimple<CHART extends DBase = DBase>
	extends utils.EventEmitter
	implements DChartSelection<CHART>
{
	protected static WORK_SELECT: DChartSeriesHitResult = new DChartSeriesHitResult();

	protected _container: DChartSeriesContainer<CHART> | null;
	protected _selected: DChartSelectionSub<CHART>;
	protected _hovered: DChartSelectionSub<CHART>;
	protected _dismiss?: UtilGestureModifier;

	protected _onMoveBound: (e: InteractionEvent) => void;
	protected _onTapBound: (target: unknown, e: InteractionEvent) => void;

	constructor(options?: DChartSelectionSimpleOptions<CHART>) {
		super();

		this._container = null;
		const point = toEnum(options?.point ?? DChartSelectionPoint.CLOSER, DChartSelectionPoint);
		this._selected = this.newSelected(point, options?.selected);
		this._hovered = this.newHovered(point, options?.hovered);
		this._dismiss = this.toDismiss(options);

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
		this._onMoveBound = (e: InteractionEvent): void => {
			this.onMove(e);
		};
		this._onTapBound = (target: unknown, e: InteractionEvent): void => {
			this.onTap(e);
		};
	}

	protected toDismiss(
		options?: DChartSelectionSimpleOptions<CHART>
	): UtilGestureModifier | undefined {
		if (options != null) {
			const dismiss = options.dismiss;
			if (dismiss != null) {
				if (dismiss.enable === false) {
					return undefined;
				}
				return toEnum(
					dismiss.modifier ?? UtilGestureModifier.NOT_NONE,
					UtilGestureModifier
				);
			}
		}
		return UtilGestureModifier.NOT_NONE;
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

	protected onTap(e: InteractionEvent): void {
		const container = this._container;
		if (container == null) {
			return;
		}
		const dismiss = this._dismiss;
		const selected = this._selected;
		if (dismiss != null && UtilGestureModifiers.match(e, dismiss)) {
			selected.unset();
		} else {
			const result = DChartSelectionSimple.WORK_SELECT;
			const global = e.data.global;
			const series = container.calcHitPoint(global.x, global.y, result);
			if (series != null) {
				selected.set(series, result);
			} else {
				selected.unset();
			}
		}
	}

	protected onMove(e: InteractionEvent): void {
		const container = this._container;
		if (container == null) {
			return;
		}
		const plotArea = container.plotArea;
		if (plotArea.state.isGesturing) {
			return;
		}
		const hovered = this._hovered;
		if (e.target === container.plotArea) {
			const result = DChartSelectionSimple.WORK_SELECT;
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

	bind(container: DChartSeriesContainer<CHART>): void {
		this._container = container;
		this._selected.bind(container);
		this._hovered.bind(container);
		const plotArea = container.plotArea;
		plotArea.on(UtilPointerEvent.move, this._onMoveBound);
		plotArea.view.on("gesturetap", this._onTapBound);
	}

	unbind(): void {
		const container = this._container;
		this._container = null;
		if (container != null) {
			const plotArea = container.plotArea;
			plotArea.off(UtilPointerEvent.move, this._onMoveBound);
			plotArea.view.off("gesturetap", this._onTapBound);
		}

		this._selected.unbind();
		this._hovered.unbind();
	}

	get selected(): DChartSelectionSub<CHART> {
		return this._selected;
	}

	get hovered(): DChartSelectionSub<CHART> {
		return this._hovered;
	}

	update(): void {
		const isSelectedUpdated = this._selected.update();
		const isHoveredUpdated = this._hovered.update();
		if (isSelectedUpdated || isHoveredUpdated) {
			const container = this._container;
			if (container != null) {
				DApplications.update(container.plotArea);
			}
		}
	}

	onRender(): void {
		this._selected.update();
		this._hovered.update();
	}
}
