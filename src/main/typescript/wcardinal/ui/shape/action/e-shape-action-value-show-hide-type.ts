/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueShowHideType {
	SHOW,
	HIDE
}

export const toShapeActionValueShowHideLabel = (type: EShapeActionValueShowHideType): string => {
	switch (type) {
		case EShapeActionValueShowHideType.SHOW:
			return "Show";
		case EShapeActionValueShowHideType.HIDE:
			return "Hide";
	}
	return "Unknown";
};
