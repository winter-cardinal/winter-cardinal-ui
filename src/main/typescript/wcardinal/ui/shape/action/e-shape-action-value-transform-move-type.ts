/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueTransformMoveType {
	RELATIVE_X,
	RELATIVE_Y,
	ABSOLUTE_X,
	ABSOLUTE_Y,
	FORWARD_OR_BACKWARD,
	LEFT_OR_RIGHT
}

export const toShapeActionValueTransformMoveLabel = (type: EShapeActionValueTransformMoveType): string => {
	switch (type) {
		case EShapeActionValueTransformMoveType.RELATIVE_X:
			return "Relative X";
		case EShapeActionValueTransformMoveType.RELATIVE_Y:
			return "Relative Y";
		case EShapeActionValueTransformMoveType.ABSOLUTE_X:
			return "Absolute X";
		case EShapeActionValueTransformMoveType.ABSOLUTE_Y:
			return "Absolute Y";
		case EShapeActionValueTransformMoveType.FORWARD_OR_BACKWARD:
			return "Forward / backward";
		case EShapeActionValueTransformMoveType.LEFT_OR_RIGHT:
			return "Left / right";
	}
	return "Unknown";
};
