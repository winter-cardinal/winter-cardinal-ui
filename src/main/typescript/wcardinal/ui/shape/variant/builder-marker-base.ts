/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapePointsMarker } from "../e-shape-points-marker";
import { EShapePointsMarkerContainer } from "../e-shape-points-marker-container";
import { buildColor } from "./build-color";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";

export abstract class BuilderMarkerBase extends BuilderBase {
	protected override updateColor(buffer: BuilderBuffer, shape: EShape): void {
		let colorFill = 0xffffff;
		let alphaFill = 1;
		const points = shape.points;
		if (points != null) {
			const container = points.getMarker();
			if (container != null) {
				const marker = this.toMarker(container);
				const fill = marker.fill;
				colorFill = fill.color;
				alphaFill = shape.visible && fill.enable ? fill.alpha : 0;
			}
		}
		const stroke = shape.stroke;
		const colorStroke = stroke.color;
		const alphaStroke = shape.visible && stroke.enable && 0 < stroke.width ? stroke.alpha : 0;

		const isNotInited = !(this.inited & BuilderFlag.COLOR);
		if (
			isNotInited ||
			colorFill !== this.colorFill ||
			alphaFill !== this.alphaFill ||
			colorStroke !== this.colorStroke ||
			alphaStroke !== this.alphaStroke
		) {
			this.inited |= BuilderFlag.COLOR;
			this.colorFill = colorFill;
			this.alphaFill = alphaFill;
			this.colorStroke = colorStroke;
			this.alphaStroke = alphaStroke;
			buffer.updateColors();

			buildColor(
				colorFill,
				alphaFill,
				colorStroke,
				alphaStroke,
				this.vertexOffset,
				this.vertexCount,
				buffer.colors
			);
		}
	}

	protected abstract toMarker(container: EShapePointsMarkerContainer): EShapePointsMarker;
}
