/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseControllerOpenType } from "../../d-diagram-base-controller";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActions } from "./e-shape-actions";
import { EShapeActionValueOpenExtension } from "./e-shape-action-value-open-extension";
import { EShapeActionValueAlignmentType } from "./e-shape-action-value-alignment-type";

export class EShapeActionRuntimeOpenExtension extends EShapeActionRuntimeConditional {
	protected subtype: number;
	protected readonly target: EShapeActionExpression<unknown>;
	protected alignment: EShapeActionValueAlignmentType;
	protected inNewWindow: boolean;

	constructor(value: EShapeActionValueOpenExtension, subtype: DDiagramBaseControllerOpenType) {
		super(value, EShapeRuntimeReset.NONE);
		this.subtype = subtype;
		this.target = EShapeActionExpressions.ofUnknown(value.target);
		this.alignment = value.alignment;
		this.inNewWindow = value.inNewWindow;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const target = this.target(shape, time, EShapeActionEnvironment);
			if (target != null) {
				EShapeActions.open(shape, this.subtype, target, this.alignment, this.inNewWindow);
			}
		}
	}
}
