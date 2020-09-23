/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscEmitEvent } from "./e-shape-action-runtime-misc-emit-event";
import { EShapeActionRuntimeMiscInputInteger } from "./e-shape-action-runtime-misc-input-integer";
import { EShapeActionRuntimeMiscInputReal } from "./e-shape-action-runtime-misc-input-real";
import { EShapeActionRuntimeMiscInputText } from "./e-shape-action-runtime-misc-input-text";
import { EShapeActionRuntimeMiscWriteBoth } from "./e-shape-action-runtime-misc-write-both";
import { EShapeActionRuntimeMiscWriteLocal } from "./e-shape-action-runtime-misc-write-local";
import { EShapeActionRuntimeMiscWriteRemote } from "./e-shape-action-runtime-misc-write-remote";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscSerialized = [
	EShapeActionValueType.MISC, number, EShapeActionValueMiscType, number, EShapeActionValueOnInputAction, number
];

export class EShapeActionValueMisc extends EShapeActionValueSubtyped<EShapeActionValueMiscType> {
	readonly target: string;
	readonly onInputAction: EShapeActionValueOnInputAction;
	readonly value: string;

	constructor(
		subtype: EShapeActionValueMiscType,
		condition: string,
		target: string,
		onInputType: EShapeActionValueOnInputAction,
		value: string
	) {
		super( EShapeActionValueType.MISC, condition, subtype );
		this.target = target;
		this.onInputAction = onInputType;
		this.value = value;
	}

	toRuntime( shape: EShape ): EShapeActionRuntime {
		switch( this.subtype ) {
		case EShapeActionValueMiscType.INPUT_TEXT:
			return new EShapeActionRuntimeMiscInputText( this );
		case EShapeActionValueMiscType.INPUT_INTEGER:
			return new EShapeActionRuntimeMiscInputInteger( this );
		case EShapeActionValueMiscType.INPUT_REAL:
			return new EShapeActionRuntimeMiscInputReal( this );
		case EShapeActionValueMiscType.EMIT_EVENT:
			return new EShapeActionRuntimeMiscEmitEvent( this );
		case EShapeActionValueMiscType.WRITE_BOTH:
			return new EShapeActionRuntimeMiscWriteBoth( this );
		case EShapeActionValueMiscType.WRITE_LOCAL:
			return new EShapeActionRuntimeMiscWriteLocal( this );
		case EShapeActionValueMiscType.WRITE_REMOTE:
			return new EShapeActionRuntimeMiscWriteRemote( this );
		}
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.addResource(this.condition);
		const targetId = manager.addResource(this.target);
		const valueId = manager.addResource(this.value);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${targetId},${this.onInputAction},${valueId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueMiscSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMisc {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const target = EShapeActionValues.toResource( 3, serialized, manager.resources );
		const value = EShapeActionValues.toResource( 5, serialized, manager.resources );
		return new EShapeActionValueMisc( serialized[ 2 ], condition, target, serialized[ 4 ], value );
	}
}
