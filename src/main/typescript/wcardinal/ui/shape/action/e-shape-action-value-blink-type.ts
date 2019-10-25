/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueBlinkType {
	VISIBILITY,
	BRIGHTEN,
	DARKEN,
	OPACITY,
	COLOR_FILL,
	COLOR_STROKE
}

export const toShapeActionValueBlinkLabel = (type: EShapeActionValueBlinkType): string => {
	switch (type) {
		case EShapeActionValueBlinkType.VISIBILITY:
			return "Visibility";
		case EShapeActionValueBlinkType.BRIGHTEN:
			return "Brighten";
		case EShapeActionValueBlinkType.DARKEN:
			return "Darken";
		case EShapeActionValueBlinkType.OPACITY:
			return "Opacity";
		case EShapeActionValueBlinkType.COLOR_FILL:
			return "Fill";
		case EShapeActionValueBlinkType.COLOR_STROKE:
			return "Stroke";
	}
	return "Unknown";
};
