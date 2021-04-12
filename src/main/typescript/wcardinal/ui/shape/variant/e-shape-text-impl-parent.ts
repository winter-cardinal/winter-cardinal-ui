/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EShapeTextImplParent {
	uploaded?: { isCompatible(parent: unknown): boolean };
	toDirty(): void;
	updateUploaded(): void;
}
