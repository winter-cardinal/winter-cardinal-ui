/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../../theme/d-themes";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionValue, EThemeShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueType } from "./e-shape-action-value-type";

export abstract class EShapeActionValueBase implements EShapeActionValue {
	readonly type: EShapeActionValueType;
	readonly condition: string;

	constructor( type: EShapeActionValueType, condition: string ) {
		this.type = type;
		this.condition = condition;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			this.type === value.type &&
			this.condition === value.condition
		);
	}

	toLabel(): string {
		return DThemes.getInstance().get<EThemeShapeActionValue>( "EShapeActionValue" ).toLabel( this );
	}

	abstract toRuntime(): EShapeActionRuntime;
	abstract serialize( manager: EShapeResourceManagerSerialization ): number;
}
