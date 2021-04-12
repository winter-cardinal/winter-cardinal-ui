/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogDate } from "./d-dialog-date";

export class DDialogDates {
	protected static INSTANCE?: DDialogDate;
	static getInstance(): DDialogDate {
		if (DDialogDates.INSTANCE == null) {
			DDialogDates.INSTANCE = new DDialogDate();
		}
		return DDialogDates.INSTANCE;
	}
}
