/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DLinkTarget = {
	AUTO: 0,
	THIS_WINDOW: 1,
	NEW_WINDOW: 2
} as const;

export type DLinkTarget = (typeof DLinkTarget)[keyof typeof DLinkTarget];
