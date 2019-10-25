/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueChangeTextType {
	TEXT,
	NUMBER
}

export const toShapeActionValueChangeTextLabel = (type: EShapeActionValueChangeTextType): string => {
	switch (type) {
		case EShapeActionValueChangeTextType.TEXT:
			return "Text";
		case EShapeActionValueChangeTextType.NUMBER:
			return "Number";
	}
	return "Unknown";
};
