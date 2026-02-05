/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EThemeShape } from "../../shape/e-shape-defaults";
import { EShapeFillDirection } from "../../shape/e-shape-fill-direction";
import { EShapeStrokeSide } from "../../shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "../../shape/e-shape-stroke-style";

export class EThemeDarkShape implements EThemeShape {
	getFillColor(): number {
		return 0xffffff;
	}

	getFillAlpha(): number {
		return 0.2;
	}

	getFillDirection(): EShapeFillDirection {
		return EShapeFillDirection.BOTTOM;
	}

	getFillPercent(): number {
		return 1;
	}

	getStrokeColor(): number {
		return 0xdddddd;
	}

	getStrokeAlpha(): number {
		return 1;
	}

	getStrokeWidth(): number {
		return 2;
	}

	getStrokeAlign(): number {
		return 0;
	}

	getStrokeSide(): EShapeStrokeSide {
		return EShapeStrokeSide.ALL;
	}

	getStrokeStyle(): EShapeStrokeStyle {
		return EShapeStrokeStyle.NONE;
	}

	getTextValue(): string {
		return "";
	}

	getTextColor(): number {
		return this.getStrokeColor();
	}

	getTextAlpha(): number {
		return this.getStrokeAlpha();
	}

	getTextFamily(): string {
		return "auto";
	}

	getTextSize(): number {
		return 14;
	}

	getRadius(): number {
		return 0.25;
	}

	getSizeX(): number {
		return 100;
	}

	getSizeY(): number {
		return 100;
	}

	getHighlightColor(): number {
		return 0x1e87f0;
	}

	getCurveSegmentCount(): number {
		return 24;
	}
}
