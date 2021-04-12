/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogDatetime } from "./d-dialog-datetime";

export class DDialogDatetimes {
	protected static INSTANCE?: DDialogDatetime;
	static getInstance(): DDialogDatetime {
		if (DDialogDatetimes.INSTANCE == null) {
			DDialogDatetimes.INSTANCE = new DDialogDatetime();
		}
		return DDialogDatetimes.INSTANCE;
	}
}
