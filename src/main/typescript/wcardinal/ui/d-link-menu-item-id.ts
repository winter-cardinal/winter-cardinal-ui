/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DLinkMenuItemId = {
	OPEN_LINK: 0,
	OPEN_LINK_IN_NEW_WINDOW: 1,
	COPY_LINK_ADDRESS: 2
} as const;

export type DLinkMenuItemId = typeof DLinkMenuItemId[keyof typeof DLinkMenuItemId];
