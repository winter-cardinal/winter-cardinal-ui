/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisBar } from "./d-chart-axis-bar";
import { DChartAxisBaseOptionParser } from "./d-chart-axis-base-options-parser";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { EShape } from "./shape/e-shape";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";

export class DChartAxisBaseBar<CHART extends DBase> implements DChartAxisBar<CHART> {
	protected _parser: DChartAxisBaseOptionParser;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _shape?: EShape;

	constructor(parser: DChartAxisBaseOptionParser) {
		this._parser = parser;
		this._index = 0;
	}

	get shape(): EShape {
		let result = this._shape;
		if (result == null) {
			result = this.newShape();
			this._shape = result;
		}
		return result;
	}

	protected newShape(): EShape {
		const parser = this._parser;
		const bar = parser.bar;
		const result = new EShapeBar();
		result.points.position = this.newShapePosition();
		result.points.style = bar.style ?? EShapePointsStyle.NONE;
		result.stroke.copy(bar.stroke);
		result.text.copy(parser.label);
		return result;
	}

	protected newShapePosition(): EShapeBarPosition {
		switch (this._parser.position) {
			case DChartAxisPosition.LEFT:
			case DChartAxisPosition.RIGHT:
				return EShapeBarPosition.TOP;
			default:
				return EShapeBarPosition.LEFT;
		}
	}

	bind(container: DChartAxisContainer<CHART>, index: number): void {
		this._container = container;
		this._index = index;
		this.shape.attach(container.container);
	}

	unbind(): void {
		const shape = this._shape;
		if (shape != null) {
			shape.detach();
		}
		this._index = 0;
		this._container = undefined;
	}

	update(): boolean {
		const container = this._container;
		const index = this._index;
		const shape = this._shape;
		if (shape != null && container != null) {
			const plotArea = container.plotArea;
			const plotAreaWidth = plotArea.width;
			const plotAreaHeight = plotArea.height;
			const offset = this._parser.padding * index;
			shape.disallowUploadedUpdate();
			const position = shape.transform.position;
			const size = shape.size;
			switch (this._parser.position) {
				case DChartAxisPosition.TOP:
					position.set(plotAreaWidth * 0.5, 0 - offset);
					size.set(plotAreaWidth, 0);
					break;
				case DChartAxisPosition.BOTTOM:
					position.set(plotAreaWidth * 0.5, plotAreaHeight + offset);
					size.set(plotAreaWidth, 0);
					break;
				case DChartAxisPosition.LEFT:
					position.set(0 - offset, plotAreaHeight * 0.5);
					size.set(0, plotAreaHeight);
					break;
				case DChartAxisPosition.RIGHT:
					position.set(plotAreaWidth + offset, plotAreaHeight * 0.5);
					size.set(0, plotAreaHeight);
					break;
			}
			shape.allowUploadedUpdate();
			return true;
		}
		return false;
	}

	destroy(): void {
		const shape = this._shape;
		if (shape != null) {
			shape.destroy();
		}
		this._index = 0;
		this._container = undefined;
	}
}
