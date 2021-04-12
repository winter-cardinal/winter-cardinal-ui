/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogTime } from "./d-dialog-time";

export class DDialogTimes {
	protected static INSTANCE?: DDialogTime;
	static getInstance(): DDialogTime {
		if (DDialogTimes.INSTANCE == null) {
			DDialogTimes.INSTANCE = new DDialogTime();
		}
		return DDialogTimes.INSTANCE;
	}
}
