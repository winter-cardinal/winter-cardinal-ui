/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utilPad } from "./util/util-pad";

export class DPickerDates {
	static format( date: Date ): string {
		const y = utilPad( String( date.getFullYear() ), 4, "0" );
		const M = utilPad( String( date.getMonth() + 1 ), 2, "0");
		const S = utilPad( String( date.getDate() ), 2, "0" );
		return `${y}/${M}/${S}`;
	}
}
