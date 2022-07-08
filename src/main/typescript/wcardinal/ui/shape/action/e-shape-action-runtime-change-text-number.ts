/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { NumberFormatter } from "../../util/number-formatter";
import { NumberFormatters } from "../../util/number-formatters";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueChangeText } from "./e-shape-action-value-change-text";

export class EShapeActionRuntimeChangeTextNumber extends EShapeActionRuntimeConditional {
	protected number: EShapeActionExpression<number>;
	protected formatters: Map<string, NumberFormatter | null>;

	constructor(value: EShapeActionValueChangeText) {
		super(value, EShapeRuntimeReset.TEXT);

		this.number = EShapeActionExpressions.ofNumber(value.value);
		this.formatters = new Map<string, NumberFormatter | null>();
	}

	protected getFormatter(shape: EShape, runtime: EShapeRuntime): NumberFormatter | null {
		const formatters = this.formatters;
		const text = runtime.text.value;
		let result = formatters.get(text);
		if (result === undefined) {
			result = this.newFormatter(text);
			formatters.set(text, result);
		}
		return result;
	}

	protected newFormatter(format: string): NumberFormatter | null {
		format = format.trim();
		if (0 < format.length) {
			return NumberFormatters.create(format);
		}
		return null;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const value = this.number(shape, time, EShapeActionEnvironment);
			const formatter = this.getFormatter(shape, runtime);
			shape.text.value = formatter != null ? formatter.format(value, 0) : String(value);
			runtime.written |= this.reset;
		}
	}
}
