/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionMiscExtension } from "./e-shape-action-misc-extension";
import { EShapeActionMiscExtensions } from "./e-shape-action-misc-extensions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueMiscExtension } from "./e-shape-action-value-misc-extension";
import { EShapeActions } from "./e-shape-actions";

export class EShapeActionRuntimeMiscExtension extends EShapeActionRuntimeConditional {
	protected extension?: EShapeActionMiscExtension;
	protected argument: EShapeActionExpression<unknown>;

	constructor(value: EShapeActionValueMiscExtension) {
		super(value, EShapeRuntimeReset.NONE);
		this.argument = EShapeActionExpressions.ofUnknown(value.argument);
		this.extension = EShapeActionMiscExtensions.get(value.subtype);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		const extension = this.extension;
		if (extension != null && this.condition(shape, time, EShapeActionEnvironment)) {
			const diagram = EShapeActions.toDiagram(shape);
			if (diagram != null) {
				extension.executor(
					this.argument(shape, time, EShapeActionEnvironment),
					shape,
					diagram
				);
			}
		}
	}
}
