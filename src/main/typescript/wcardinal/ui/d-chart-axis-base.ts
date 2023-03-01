/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DChartAxis } from "./d-chart-axis";
import { DChartAxisBar } from "./d-chart-axis-bar";
import { DChartAxisBaseBar } from "./d-chart-axis-base-bar";
import { DChartAxisBaseOptions, DThemeChartAxisBase } from "./d-chart-axis-base-options";
import { DChartAxisBaseOptionParser } from "./d-chart-axis-base-options-parser";
import { DChartAxisBaseTickContainer } from "./d-chart-axis-base-tick-container";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickContainer } from "./d-chart-axis-tick-container";
import { DThemes } from "./theme/d-themes";

export class DChartAxisBase<
	CHART extends DBase = DBase,
	OPTIONS extends DChartAxisBaseOptions = DChartAxisBaseOptions
> implements DChartAxis<CHART>
{
	protected _theme: DThemeChartAxisBase;
	protected _parser: DChartAxisBaseOptionParser;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _bar: DChartAxisBaseBar<CHART>;
	protected _tick: DChartAxisBaseTickContainer<CHART>;

	constructor(options?: OPTIONS) {
		const theme = this.toTheme(options);
		this._theme = theme;
		const parser = new DChartAxisBaseOptionParser(theme, options);
		this._parser = parser;
		this._index = 0;
		this._bar = new DChartAxisBaseBar(parser);
		this._tick = new DChartAxisBaseTickContainer(parser);
	}

	get position(): DChartAxisPosition {
		return this._parser.position;
	}

	get bar(): DChartAxisBar<CHART> {
		return this._bar;
	}

	get tick(): DChartAxisTickContainer<CHART> {
		return this._tick;
	}

	bind(container: DChartAxisContainer<CHART>, index: number): void {
		this._container = container;
		this._index = index;
		this._bar.bind(container, index);
		this._tick.bind(container, index);
	}

	unbind(): void {
		this._tick.unbind();
		this._bar.unbind();
		this._index = 0;
		this._container = undefined;
	}

	update(): void {
		const isBarUpdated = this._bar.update();
		const isTicksUpdated = this._tick.update();
		if (isBarUpdated || isTicksUpdated) {
			const container = this._container;
			if (container) {
				DApplications.update(container.plotArea);
			}
		}
	}

	onRender(): void {
		this._bar.update();
		this._tick.update();
	}

	destroy(): void {
		this._bar.destroy();
		this._tick.destroy();
		this._container = undefined;
	}

	protected toTheme(options?: DChartAxisBaseOptions): DThemeChartAxisBase {
		return (options && options.theme) || this.getThemeDefault();
	}

	protected getThemeDefault(): DThemeChartAxisBase {
		return DThemes.getInstance().get(this.getType());
	}

	protected getType(): string {
		return "DChartAxisBase";
	}
}
