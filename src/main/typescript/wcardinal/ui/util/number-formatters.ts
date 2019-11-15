/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { NumberFormatter } from "./number-formatter";
import { NumberFormatterImpl } from "./number-formatter-impl";

/**
 * An number formatter utility class.
 */
export class NumberFormatters {
	/**
	 * Creates a number formatter of the given format.
	 * Please refer to {@link ui/util.NumberFormatter} for format details.
	 *
	 * @return A created number formatter
	 */
	static create( format: string ): NumberFormatter {
		return new NumberFormatterImpl( format );
	}
}
