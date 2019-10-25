/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueChangeColorType {
	FILL,
	STROKE,
	FILL_AND_STROKE,
	TEXT,
	TEXT_OUTLINE,
	ALL
}

export const toShapeActionValueChangeColorLabel = (type: EShapeActionValueChangeColorType): string => {
	switch (type) {
		case EShapeActionValueChangeColorType.FILL:
			return "Fill";
		case EShapeActionValueChangeColorType.STROKE:
			return "Stroke";
		case EShapeActionValueChangeColorType.FILL_AND_STROKE:
			return "Fill and stroke";
		case EShapeActionValueChangeColorType.TEXT:
			return "Text";
		case EShapeActionValueChangeColorType.TEXT_OUTLINE:
			return "Text outline";
		case EShapeActionValueChangeColorType.ALL:
			return "ALL";
		}
	return "Unknown";
};

export enum EShapeActionValueChangeColorTarget {
	COLOR_AND_ALPHA,
	COLOR,
	ALPHA,
	CODE,
	BRIGHTNESS
}

export const toShapeActionValueChangeColorTargetLabel = ( type: EShapeActionValueChangeColorTarget ): string => {
	switch (type) {
		case EShapeActionValueChangeColorTarget.COLOR_AND_ALPHA:
			return "Color";
		case EShapeActionValueChangeColorTarget.COLOR:
			return "RGB";
		case EShapeActionValueChangeColorTarget.ALPHA:
			return "Alpha";
		case EShapeActionValueChangeColorTarget.CODE:
			return "Dynamic color";
		case EShapeActionValueChangeColorTarget.BRIGHTNESS:
			return "Brightness";
		}
	return "Unknown";
};
