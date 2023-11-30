/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeResourceManagerDeserializationMode = {
	VIEWER: 0,
	EDITOR_DATA_MAPPED: 1,
	EDITOR: 2
} as const;

export type EShapeResourceManagerDeserializationMode =
	(typeof EShapeResourceManagerDeserializationMode)[keyof typeof EShapeResourceManagerDeserializationMode];
