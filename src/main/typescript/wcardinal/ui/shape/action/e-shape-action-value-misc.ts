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
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscSerialized = [
	EShapeActionValueType.MISC, number, EShapeActionValueMiscType
];

export class EShapeActionValueMisc extends EShapeActionValueSubtyped<EShapeActionValueMiscType> {
	constructor( subtype: EShapeActionValueMiscType, condition: string ) {
		super( EShapeActionValueType.MISC, condition, subtype );
	}

	toRuntime( shape: EShape ): EShapeActionRuntime {
		switch( this.subtype ) {
		case EShapeActionValueMiscType.INPUT:
			return new EShapeActionRuntimeMiscInput();
		}
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		return manager.add( `[${this.type},${conditionId},${this.subtype}]` );
	}

	static deserialize(
		serialized: EShapeActionValueMiscSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMisc {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		return new EShapeActionValueMisc( serialized[ 2 ], condition );
	}
}
