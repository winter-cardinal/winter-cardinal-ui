/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueOpenType {
	FLOW,
	PAGE,
	PAGE_INPLACE
}

export const toShapeActionValueOpenLabel = (type: EShapeActionValueOpenType): string => {
	switch (type) {
		case EShapeActionValueOpenType.FLOW:
			return "Flow";
		case EShapeActionValueOpenType.PAGE:
			return "Page (New window)";
		case EShapeActionValueOpenType.PAGE_INPLACE:
			return "Page (In-place)";
	}
	return "Unknown";
};
