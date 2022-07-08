/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOnInputActions } from "./e-shape-action-value-on-input-actions";
import { EShapeActionValueOpenDialog } from "./e-shape-action-value-open-dialog";

export abstract class EShapeActionRuntimeOpenDialog<
	VALUE = unknown,
	INITIAL = VALUE
> extends EShapeActionRuntimeConditional {
	protected readonly target: EShapeActionExpression<string | null>;
	protected onInputAction: EShapeActionValueOnInputAction;
	protected isOpened: boolean;
	protected abstract initial: EShapeActionExpression<INITIAL>;

	constructor(value: EShapeActionValueOpenDialog) {
		super(value, EShapeRuntimeReset.NONE);
		this.target = EShapeActionExpressions.ofStringOrNull(value.target);
		this.onInputAction = value.onInputAction;
		this.isOpened = false;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (!this.isOpened) {
			if (this.condition(shape, time, EShapeActionEnvironment)) {
				const target = this.target(shape, time, EShapeActionEnvironment);
				if (target != null) {
					const initial = this.initial(shape, time, EShapeActionEnvironment);
					this.isOpened = true;
					setTimeout(() => {
						this.open(shape, target, initial).then(
							(value) => {
								this.isOpened = false;
								EShapeActionValueOnInputActions.execute(
									shape,
									this.onInputAction,
									target,
									value,
									time
								);
							},
							() => {
								this.isOpened = false;
							}
						);
					}, 0);
				}
			}
		}
	}

	protected abstract open(shape: EShape, target: string, initial: INITIAL): Promise<VALUE>;
}
