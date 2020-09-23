/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscInput } from "./e-shape-action-runtime-misc-input";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscSerialized = [
	EShapeActionValueType.MISC, number, EShapeActionValueMiscType, number, EShapeActionValueOnInputAction
];

export class EShapeActionValueMisc extends EShapeActionValueSubtyped<EShapeActionValueMiscType> {
	readonly onInputAction: EShapeActionValueOnInputAction;
	readonly target: string;

	constructor(
		subtype: EShapeActionValueMiscType,
		condition: string,
		target: string,
		onInputType: EShapeActionValueOnInputAction
	) {
		super( EShapeActionValueType.MISC, condition, subtype );
		this.target = target;
		this.onInputAction = onInputType;
	}

	toRuntime( shape: EShape ): EShapeActionRuntime {
		switch( this.subtype ) {
		case EShapeActionValueMiscType.INPUT:
			return new EShapeActionRuntimeMiscInput( this );
		}
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.addResource(this.condition);
		const targetId = manager.addResource(this.target);
		return manager.addResource( `[${this.type},${conditionId},${this.subtype},${targetId},${this.onInputAction}]` );
	}

	static deserialize(
		serialized: EShapeActionValueMiscSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMisc {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const target = EShapeActionValues.toResource( 3, serialized, manager.resources );
		return new EShapeActionValueMisc( serialized[ 2 ], condition, target, serialized[ 3 ] );
	}
}
