/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { toPadded } from "./util/to-padded";

export class DPickerDates {
	static format( date: Date ): string {
		const y = toPadded( String( date.getFullYear() ), 4, "0" );
		const M = toPadded( String( date.getMonth() + 1 ), 2, "0");
		const S = toPadded( String( date.getDate() ), 2, "0" );
		return `${y}/${M}/${S}`;
	}
}
