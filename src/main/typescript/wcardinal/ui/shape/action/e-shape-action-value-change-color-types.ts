/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueChangeColorTypeLegacy } from "./e-shape-action-value-change-color-type-legacy";
import { EShapeActionValueType } from "./e-shape-action-value-type";

export interface EShapeActionValueChangeColorTypesSerialized {
	[ 0 ]: EShapeActionValueType.CHANGE_COLOR;
	[ 2 ]: EShapeActionValueChangeColorType;
}

export interface EShapeActionValueChangeColorTypesSerializedLegacy {
	[ 0 ]: EShapeActionValueType.CHANGE_COLOR_LEGACY;
	[ 2 ]: EShapeActionValueChangeColorTypeLegacy;
}

export class EShapeActionValueChangeColorTypes {
	static from(
		serialized: EShapeActionValueChangeColorTypesSerialized | EShapeActionValueChangeColorTypesSerializedLegacy
	): EShapeActionValueChangeColorType {
		if( serialized[ 0 ] === EShapeActionValueType.CHANGE_COLOR ) {
			return serialized[ 2 ];
		}
		switch( serialized[ 2 ] ) {
		case EShapeActionValueChangeColorTypeLegacy.FILL:
			return EShapeActionValueChangeColorType.FILL;
		case EShapeActionValueChangeColorTypeLegacy.STROKE:
			return EShapeActionValueChangeColorType.STROKE;
		case EShapeActionValueChangeColorTypeLegacy.FILL_AND_STROKE:
			return EShapeActionValueChangeColorType.FILL_AND_STROKE;
		case EShapeActionValueChangeColorTypeLegacy.TEXT:
			return EShapeActionValueChangeColorType.TEXT;
		case EShapeActionValueChangeColorTypeLegacy.TEXT_OUTLINE:
			return EShapeActionValueChangeColorType.TEXT_OUTLINE;
		case EShapeActionValueChangeColorTypeLegacy.ALL:
			return EShapeActionValueChangeColorType.ALL;
		}
	}
}
