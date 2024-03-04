/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../theme/d-themes";
import { eShapePointsFormatterCurve } from "./e-shape-points-formatter-curve";
import { eShapePointsFormatterCurveBezierQuadratic } from "./e-shape-points-formatter-curve-bezier-quadratic";
import { EShapePointsFormatterDatum } from "./e-shape-points-formatter-datum";
import { EShapePointsStyle } from "./e-shape-points-style";

export interface EThemeShapePointsFormatter {
	getCurveSplineLabel(): string;
	getCurveBezierQuadraticLabel(): string;
}

export class EShapePointsFormatters {
	private static data?: Map<number, EShapePointsFormatterDatum>;

	static set(id: number, datum: EShapePointsFormatterDatum): void {
		if (this.data == null) {
			this.data = this.newData();
		}
		this.data.set(id, datum);
	}

	static get(index: number): EShapePointsFormatterDatum | undefined {
		if (this.data == null) {
			this.data = this.newData();
		}
		return this.data.get(index);
	}

	static each(iteratee: (id: number, datum: EShapePointsFormatterDatum) => void): void {
		if (this.data == null) {
			this.data = this.newData();
		}
		this.data.forEach((datum, id) => {
			iteratee(id, datum);
		});
	}

	static find(style: EShapePointsStyle): EShapePointsFormatterDatum | undefined {
		return this.get(
			(style & EShapePointsStyle.FORMATTER_MASK) >> EShapePointsStyle.FORMATTER_SHIFT
		);
	}

	private static newData(): Map<number, EShapePointsFormatterDatum> {
		const result = new Map<number, EShapePointsFormatterDatum>();
		const theme = DThemes.get<EThemeShapePointsFormatter>("EShapePointsFormatter");
		result.set(EShapePointsStyle.FORMATTER_CURVE_SPLINE, {
			label: theme.getCurveSplineLabel(),
			formatter: eShapePointsFormatterCurve
		});
		result.set(EShapePointsStyle.FORMATTER_CURVE_BEZIER_QUADRATIC, {
			label: theme.getCurveBezierQuadraticLabel(),
			formatter: eShapePointsFormatterCurveBezierQuadratic
		});
		return result;
	}
}
