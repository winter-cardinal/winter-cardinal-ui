/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueType {
	SHOW_HIDE,
	BLINK,
	TRANSFORM,
	OPEN,
	EMIT_EVENT,
	CHANGE_COLOR,
	CHANGE_TEXT,
	CHANGE_CURSOR,
	MISC
}

export const toShapeActionValueLabel = ( type: EShapeActionValueType ): string => {
	switch( type ) {
	case EShapeActionValueType.SHOW_HIDE:
		return "Show / hide";
	case EShapeActionValueType.BLINK:
		return "Blink";
	case EShapeActionValueType.TRANSFORM:
		return "Transform";
	case EShapeActionValueType.OPEN:
		return "Open";
	case EShapeActionValueType.CHANGE_COLOR:
		return "Change color";
	case EShapeActionValueType.CHANGE_TEXT:
		return "Change text";
	case EShapeActionValueType.CHANGE_CURSOR:
		return "Change cursor";
	case EShapeActionValueType.EMIT_EVENT:
		return "Emit an event";
	case EShapeActionValueType.MISC:
		return "Misc.";
	}
	return "Unknown";
};
