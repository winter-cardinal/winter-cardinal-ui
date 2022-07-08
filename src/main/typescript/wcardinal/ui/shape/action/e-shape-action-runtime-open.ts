/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseControllerOpenType } from "../../d-diagram-base-controller";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionRuntimes } from "./e-shape-action-runtimes";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";
import { EShapeActionValueOpenExtension } from "./e-shape-action-value-open-extension";

export class EShapeActionRuntimeOpen extends EShapeActionRuntimeConditional {
	protected subtype: number;
	protected readonly target: EShapeActionExpression<string | null>;
	protected inNewWindow: boolean;

	constructor(
		value: EShapeActionValueOpen | EShapeActionValueOpenExtension,
		subtype: DDiagramBaseControllerOpenType
	) {
		super(value, EShapeRuntimeReset.NONE);
		this.subtype = subtype;
		this.target = EShapeActionExpressions.ofStringOrNull(value.target);
		this.inNewWindow = value.inNewWindow;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const target = this.target(shape, time, EShapeActionEnvironment);
			if (target != null) {
				EShapeActionRuntimes.open(shape, this.subtype, target, this.inNewWindow);
			}
		}
	}
}
