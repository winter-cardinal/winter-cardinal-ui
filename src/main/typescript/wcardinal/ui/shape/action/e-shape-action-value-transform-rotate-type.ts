/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueTransformRotateType {
	RELATIVE,
	ABSOLUTE
}

export const toShapeActionValueTransformRotateLabel = (type: EShapeActionValueTransformRotateType): string => {
	switch (type) {
		case EShapeActionValueTransformRotateType.RELATIVE:
			return "Relative";
		case EShapeActionValueTransformRotateType.ABSOLUTE:
			return "Absolute";
	}
	return "Unknown";
};
