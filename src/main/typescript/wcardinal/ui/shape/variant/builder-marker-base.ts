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
	protected updateColorFill(buffer: BuilderBuffer, shape: EShape): void {
		const points = shape.points;
		if (points == null) {
			return;
		}
		const container = points.getMarker();
		if (container == null) {
			return;
		}
		const marker = this.toMarker(container);
		const fill = marker.fill;
		const isEnabled = shape.visible && fill.enable;
		const color = fill.color;
		const alpha = isEnabled ? fill.alpha : 0;
		const isNotInited = !(this.inited & BuilderFlag.COLOR_FILL);
		if (isNotInited || color !== this.colorFill || alpha !== this.alphaFill) {
			this.inited |= BuilderFlag.COLOR_FILL;
			this.colorFill = color;
			this.alphaFill = alpha;
			buffer.updateColorFills();

			buildColor(color, alpha, this.vertexOffset, this.vertexCount, buffer.colorFills);
		}
	}

	protected abstract toMarker(container: EShapePointsMarkerContainer): EShapePointsMarker;
}
