/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueMiscType {
	INPUT
}

export const toShapeActionValueMiscLabel = ( type: EShapeActionValueMiscType ): string => {
	switch( type ) {
		case EShapeActionValueMiscType.INPUT:
			return "Input";
	}
};
