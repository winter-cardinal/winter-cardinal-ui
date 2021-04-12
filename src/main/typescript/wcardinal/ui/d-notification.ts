/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DNotificationOptions<THEME extends DThemeNotification>
	extends DBaseOptions<THEME> {}

export interface DThemeNotification extends DThemeBase {}

export class DNotification<
	THEME extends DThemeNotification = DThemeNotification,
	OPTIONS extends DNotificationOptions<THEME> = DNotificationOptions<THEME>
> extends DBase<THEME, OPTIONS> {}
