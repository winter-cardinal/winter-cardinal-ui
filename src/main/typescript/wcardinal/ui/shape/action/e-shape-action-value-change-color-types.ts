/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueChangeColorTypeLegacy } from "./e-shape-action-value-change-color-type-legacy";
import { EShapeActionValueType } from "./e-shape-action-value-type";

export interface EShapeActionValueChangeColorTypesSerialized {
	[0]: EShapeActionValueType.CHANGE_COLOR;
	[2]: EShapeActionValueChangeColorType;
}

export interface EShapeActionValueChangeColorTypesSerializedLegacy {
	[0]: EShapeActionValueType.CHANGE_COLOR_LEGACY;
	[2]: EShapeActionValueChangeColorTypeLegacy;
}

export class EShapeActionValueChangeColorTypes {
	static from(
		serialized:
			| EShapeActionValueChangeColorTypesSerialized
			| EShapeActionValueChangeColorTypesSerializedLegacy
	): EShapeActionValueChangeColorType {
		if (serialized[0] === EShapeActionValueType.CHANGE_COLOR) {
			return serialized[2];
		}
		switch (serialized[2]) {
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

	static unpack(type: EShapeActionValueChangeColorType): EShapeActionValueChangeColorType[] {
		const result: EShapeActionValueChangeColorType[] = [];
		if (type & EShapeActionValueChangeColorType.FILL) {
			result.push(EShapeActionValueChangeColorType.FILL);
		}
		if (type & EShapeActionValueChangeColorType.STROKE) {
			result.push(EShapeActionValueChangeColorType.STROKE);
		}
		if (type & EShapeActionValueChangeColorType.TEXT) {
			result.push(EShapeActionValueChangeColorType.TEXT);
		}
		if (type & EShapeActionValueChangeColorType.TEXT_OUTLINE) {
			result.push(EShapeActionValueChangeColorType.TEXT_OUTLINE);
		}
		return result;
	}

	static pack(types: EShapeActionValueChangeColorType[]): EShapeActionValueChangeColorType {
		let result = EShapeActionValueChangeColorType.NONE;
		for (let i = 0, imax = types.length; i < imax; ++i) {
			result |= types[i];
		}
		return result;
	}
}
