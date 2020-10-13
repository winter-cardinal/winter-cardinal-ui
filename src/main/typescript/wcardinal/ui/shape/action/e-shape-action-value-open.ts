/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionRuntimeOpenDialogBoolean } from "./e-shape-action-runtime-open-dialog-boolean";
import { EShapeActionRuntimeOpenDialogInteger } from "./e-shape-action-runtime-open-dialog-integer";
import { EShapeActionRuntimeOpenDialogReal } from "./e-shape-action-runtime-open-dialog-real";
import { EShapeActionRuntimeOpenDialogText } from "./e-shape-action-runtime-open-dialog-text";
import { EShapeActionRuntimeOpenDiagram } from "./e-shape-action-runtime-open-diagram";
import { EShapeActionRuntimeOpenPage } from "./e-shape-action-runtime-open-page";
import { EShapeActionRuntimeOpenPageInplace } from "./e-shape-action-runtime-open-page-inplace";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueOpenSerialized = [
	EShapeActionValueType.OPEN, number, EShapeActionValueOpenType, number, EShapeActionValueOnInputAction, number
];

export class EShapeActionValueOpen extends EShapeActionValueSubtyped<EShapeActionValueOpenType> {
	readonly target: string;
	readonly onInputAction: EShapeActionValueOnInputAction;
	readonly initial: string;

	constructor(
		subtype: EShapeActionValueOpenType,
		condition: string,
		target: string,
		onInputAction: EShapeActionValueOnInputAction,
		initial: string
	) {
		super( EShapeActionValueType.OPEN, condition, subtype );
		this.target = target;
		this.onInputAction = onInputAction;
		this.initial = initial;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			super.isEquals( value ) &&
			(value instanceof EShapeActionValueOpen) &&
			this.target === value.target
		);
	}

	toRuntime(): EShapeActionRuntimeOpen {
		switch( this.subtype ) {
		case EShapeActionValueOpenType.DIAGRAM:
			return new EShapeActionRuntimeOpenDiagram( this );
		case EShapeActionValueOpenType.PAGE:
			return new EShapeActionRuntimeOpenPage( this );
		case EShapeActionValueOpenType.PAGE_INPLACE:
			return new EShapeActionRuntimeOpenPageInplace( this );
		case EShapeActionValueOpenType.DIALOG_TEXT:
			return new EShapeActionRuntimeOpenDialogText( this );
		case EShapeActionValueOpenType.DIALOG_INTEGER:
			return new EShapeActionRuntimeOpenDialogInteger( this );
		case EShapeActionValueOpenType.DIALOG_REAL:
			return new EShapeActionRuntimeOpenDialogReal( this );
		case EShapeActionValueOpenType.DIALOG_BOOLEAN:
			return new EShapeActionRuntimeOpenDialogBoolean( this );
		}
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.addResource(this.condition);
		const targetId = manager.addResource(this.target);
		const initialId = manager.addResource(this.initial);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${targetId},${this.onInputAction},${initialId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueOpenSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueOpen {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const target = EShapeActionValues.toResource( 3, serialized, manager.resources );
		const initial = EShapeActionValues.toResource( 5, serialized, manager.resources );
		return new EShapeActionValueOpen( serialized[ 2 ], condition, target, serialized[ 4 ], initial );
	}
}
