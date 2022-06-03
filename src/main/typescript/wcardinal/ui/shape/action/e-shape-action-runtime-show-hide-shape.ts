/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueShowHideShape } from "./e-shape-action-value-show-hide-shape";

export interface EShapeActionRuntimeShowHideShapeData {
	condition: boolean | null;
}

export class EShapeActionRuntimeShowHideShape extends EShapeActionRuntimeConditional {
	protected _data: Map<EShape, EShapeActionRuntimeShowHideShapeData>;

	constructor(value: EShapeActionValueShowHideShape) {
		super(value, EShapeRuntimeReset.VISIBILITY);
		this._data = new Map<EShape, EShapeActionRuntimeShowHideShapeData>();
	}

	initialize(shape: EShape, runtime: EShapeRuntime): void {
		super.initialize(shape, runtime);
		let data = this._data.get(shape);
		if (data == null) {
			data = this.newData(shape);
			if (data != null) {
				this._data.set(shape, data);
			}
		}
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		const data = this._data.get(shape);
		if (data) {
			const newCondition = this.condition(shape, time);
			if (data.condition !== newCondition) {
				data.condition = newCondition;
				shape.visible = newCondition;
				runtime.written |= this.reset;
			}
		}
	}

	protected newData(shape: EShape): EShapeActionRuntimeShowHideShapeData | undefined {
		return {
			condition: null
		};
	}
}
