/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsFormatter } from "./e-shape-points-formatter";
import { eShapePointsFormatterCurve } from "./e-shape-points-formatter-curve";
import { EShapePointsStyle } from "./e-shape-points-style";

export interface EShapePointsFormatterDatum {
	label: string;
	formatter: EShapePointsFormatter;
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

	static find(style: EShapePointsStyle): EShapePointsFormatterDatum | undefined {
		return this.get(
			(style & EShapePointsStyle.FORMATTER_MASK) >> EShapePointsStyle.FORMATTER_SHIFT
		);
	}

	private static newData(): Map<number, EShapePointsFormatterDatum> {
		const result = new Map<number, EShapePointsFormatterDatum>();
		result.set(EShapePointsStyle.FORMATTER_CURVE, {
			label: "Curve",
			formatter: eShapePointsFormatterCurve
		});
		return result;
	}
}
