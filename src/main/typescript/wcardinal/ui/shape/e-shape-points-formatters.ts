/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsFormatter } from "./e-shape-points-formatter";
import { eShapePointsFormatterCurve } from "./e-shape-points-formatter-curve";
import { EShapePointsStyle } from "./e-shape-points-style";

export class EShapePointsFormatters {
	private static FORMATTERS?: Map<number, EShapePointsFormatter>;

	static set(id: number, formatter: EShapePointsFormatter): void {
		if (this.FORMATTERS == null) {
			this.FORMATTERS = this.newFormatters();
		}
		this.FORMATTERS.set(id, formatter);
	}

	static get(index: number): EShapePointsFormatter | undefined {
		if (this.FORMATTERS == null) {
			this.FORMATTERS = this.newFormatters();
		}
		return this.FORMATTERS.get(index);
	}

	static find(style: EShapePointsStyle): EShapePointsFormatter | undefined {
		return this.get(
			(style & EShapePointsStyle.FORMATTER_MASK) >> EShapePointsStyle.FORMATTER_SHIFT
		);
	}

	private static newFormatters(): Map<number, EShapePointsFormatter> {
		const result = new Map<number, EShapePointsFormatter>();
		result.set(EShapePointsStyle.FORMATTER_CURVE, eShapePointsFormatterCurve);
		return result;
	}
}
