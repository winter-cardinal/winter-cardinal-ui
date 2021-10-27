/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetImpl } from "./d-base-state-set-impl";
import { DChartSelectionStyle } from "./d-chart-selection";
import {
	DChartSelectionShape,
	DChartSelectionShapeOptions,
	DThemeChartSelectionShape
} from "./d-chart-selection-shape";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { EShape } from "./shape/e-shape";
import { DThemes } from "./theme/d-themes";
import { isString } from "./util/is-string";

export abstract class DChartSelectionShapeBase<CHART extends DBase = DBase>
	implements DChartSelectionShape<CHART>
{
	protected _isEnabled: boolean;
	protected _shape?: EShape;
	protected _style: DChartSelectionStyle<CHART>;
	protected _state: DBaseStateSet;
	protected _theme: DThemeChartSelectionShape;

	constructor(options?: DChartSelectionShapeOptions<CHART>) {
		const theme = this.toTheme(options);
		this._theme = theme;
		const state = new DBaseStateSetImpl().add(options?.state ?? DBaseState.HOVERED);
		this._state = state;
		this._isEnabled = options?.enable ?? theme.isEnabled(state);
		this._shape = options?.shape;
		this._style = options?.style ?? this.setStyle;
	}

	bind(container: DChartSeriesContainer<CHART>): void {
		if (this._isEnabled) {
			const shape = this._shape || this.newShape(this._theme);
			this._shape = shape;
			shape.attach(container.plotArea.axis.container);
			shape.visible = false;
		}
	}

	unbind(): void {
		const shape = this._shape;
		if (shape) {
			shape.detach();
		}
	}

	protected newShape(theme: DThemeChartSelectionShape): EShape {
		return theme.newShape(this._state);
	}

	set(
		container: DChartSeriesContainer<CHART>,
		mappedPosition: IPoint,
		series: DChartSeries<CHART>
	): void {
		this.update(container, mappedPosition);

		const shape = this._shape;
		if (shape) {
			this._style(shape, series);
		}
	}

	protected setStyle(this: unknown, shape: EShape, series: DChartSeries<CHART>): void {
		const seriesShape = series.shape;
		if (seriesShape) {
			shape.stroke.color = seriesShape.stroke.color;
		}
	}

	unset(): void {
		const shape = this._shape;
		if (shape) {
			shape.visible = false;
		}
	}

	abstract update(container: DChartSeriesContainer<CHART>, mappedPosition: IPoint): void;

	protected toTheme(options?: DChartSelectionShapeOptions<CHART>): DThemeChartSelectionShape {
		const theme = options?.theme;
		if (isString(theme)) {
			return this.getTheme(theme);
		} else if (theme != null) {
			return theme;
		} else {
			return this.getTheme(this.getType());
		}
	}

	protected getTheme(type: string): DThemeChartSelectionShape {
		return DThemes.getInstance().get(type);
	}

	protected abstract getType(): string;
}
