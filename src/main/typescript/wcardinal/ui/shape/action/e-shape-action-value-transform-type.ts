/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueTransformType {
	RESIZE,
	MOVE,
	ROTATE
}

export const toShapeActionValueTransformLabel = (type: EShapeActionValueTransformType): string => {
	switch (type) {
		case EShapeActionValueTransformType.RESIZE:
			return "Resize";
		case EShapeActionValueTransformType.MOVE:
			return "Move";
		case EShapeActionValueTransformType.ROTATE:
			return "Rotate";
	}
	return "Unknown";
};
