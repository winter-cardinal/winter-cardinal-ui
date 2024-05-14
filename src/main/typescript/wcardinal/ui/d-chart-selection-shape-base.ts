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
import { isFunction } from "./util/is-function";

export abstract class DChartSelectionShapeBase<CHART extends DBase = DBase>
	implements DChartSelectionShape<CHART>
{
	protected _options?: DChartSelectionShapeOptions<CHART>;
	protected _isEnabled: boolean;
	protected _shape?: EShape;
	protected _newShape?: (state: DBaseStateSet) => EShape;
	protected _style: DChartSelectionStyle<CHART>;
	protected _state: DBaseStateSet;
	protected _theme: DThemeChartSelectionShape;

	constructor(options?: DChartSelectionShapeOptions<CHART>) {
		const theme = this.toTheme(options);
		this._theme = theme;
		const state = new DBaseStateSetImpl().add(options?.state ?? DBaseState.HOVERED);
		this._state = state;
		this._isEnabled = options?.enable ?? theme.isEnabled(state);
		if (options != null) {
			const shape = options.shape;
			if (shape != null) {
				if (isFunction(shape)) {
					this._newShape = shape;
				} else {
					this._shape = shape;
				}
			}
		}
		this._style = options?.style ?? this.setStyle;
	}

	bind(container: DChartSeriesContainer<CHART>): void {
		if (this._isEnabled) {
			let shape = this._shape;
			if (shape == null) {
				const state = this._state;
				const newShape = this._newShape;
				if (newShape != null) {
					shape = newShape(state);
				} else {
					shape = this.newShape(state, this._theme);
				}
			}
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

	protected newShape(state: DBaseStateSet, theme: DThemeChartSelectionShape): EShape {
		return theme.newShape(state);
	}

	set(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint,
		series: DChartSeries<CHART>
	): void {
		this.update(container, position, mappedPosition, series);

		const shape = this._shape;
		if (shape) {
			this._style(shape, series);
		}
	}

	protected setStyle(this: unknown, shape: EShape, series: DChartSeries<CHART>): void {
		// DO NOTHING
	}

	unset(): void {
		const shape = this._shape;
		if (shape) {
			shape.visible = false;
		}
	}

	abstract update(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint,
		series: DChartSeries<CHART> | null
	): boolean;

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
