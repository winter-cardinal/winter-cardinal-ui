/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueTransformResizeType {
	RELATIVE_SIZE,
	RELATIVE_HEIGHT,
	RELATIVE_WIDTH,
	ABSOLUTE_SIZE,
	ABSOLUTE_HEIGHT,
	ABSOLUTE_WIDTH
}

export const toShapeActionValueTransformResizeLabel = (type: EShapeActionValueTransformResizeType): string => {
	switch (type) {
		case EShapeActionValueTransformResizeType.ABSOLUTE_SIZE:
			return "Height & width";
		case EShapeActionValueTransformResizeType.RELATIVE_SIZE:
			return "Height & width (%)";
		case EShapeActionValueTransformResizeType.ABSOLUTE_HEIGHT:
			return "Height";
		case EShapeActionValueTransformResizeType.RELATIVE_HEIGHT:
			return "Height (%)";
		case EShapeActionValueTransformResizeType.ABSOLUTE_WIDTH:
			return "Width";
		case EShapeActionValueTransformResizeType.RELATIVE_WIDTH:
			return "Width (%)";
	}
	return "Unknown";
};
