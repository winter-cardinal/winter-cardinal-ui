/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { NumberFormatter } from "./number-formatter";
import { NumberFormatterImpl } from "./number-formatter-impl";

export class NumberFormatters {
	static create( format: string ): NumberFormatter {
		return new NumberFormatterImpl( format );
	}
}
