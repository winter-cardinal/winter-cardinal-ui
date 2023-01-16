/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionOpenDialogExtensions } from "./e-shape-action-open-dialog-extensions";
import { EShapeActionOpenDialogOpener } from "./e-shape-action-open-dialog-opener";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueOpenDialogExtension } from "./e-shape-action-value-open-dialog-extension";

export class EShapeActionRuntimeOpenDialogExtension extends EShapeActionRuntimeConditional {
	protected readonly target: EShapeActionExpression<string | null>;
	protected readonly argument: EShapeActionExpression<unknown>;
	protected readonly opener?: EShapeActionOpenDialogOpener;

	constructor(value: EShapeActionValueOpenDialogExtension) {
		super(value, EShapeRuntimeReset.NONE);
		this.target = EShapeActionExpressions.ofStringOrNull(value.target);
		this.argument = EShapeActionExpressions.ofUnknown(value.target);
		const extension = EShapeActionOpenDialogExtensions.get(value.dialogType);
		if (extension) {
			this.opener = extension.opener;
		}
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		const opener = this.opener;
		if (opener) {
			if (this.condition(shape, time, EShapeActionEnvironment)) {
				const target = this.target(shape, time, EShapeActionEnvironment);
				if (target != null) {
					const argument = this.argument(shape, time, EShapeActionEnvironment);
					setTimeout(() => {
						opener(target, argument, shape);
					}, 0);
				}
			}
		}
	}
}
