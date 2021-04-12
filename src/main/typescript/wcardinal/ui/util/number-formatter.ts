/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Formats numbers with the specified format.
 *
 * #### Datetime format specifiers
 *
 * * %Y full year
 * * %y short year: [0, 99]
 * * %M month: [1, 12]
 * * %D day of the month: [1, 31]
 * * %H 24-hour clock: [0, 23]
 * * %h 12-hour clock: [1, 12]
 * * %m minute: [0, 59]
 * * %mi milliseconds: [0, 999]
 * * %a am or pm
 * * %A AM or PM
 * * %s seconds: [0, 61]
 * * %z time zone
 * * %% a % literal
 * * %sdt Step-based adaptive datetime format
 *
 * ##### Syntax sugers for Datetime format
 *
 * * %YM  shortened form of %Y/%M
 * * %YMD shortened form of %Y/%M/%D
 * * %yM  shortened form of %y/%M
 * * %yMD shortened form of %y/%M/%D
 * * %MD  shortened form of %M/%D
 * * %Hm  shortened form of %H:%m
 * * %Hms shortened form of %H:%m:%s
 * * %hm  shortened form of %H:%m
 * * %hms shortened form of %H:%m:%s
 * * %ms  shortened form of %m:%s
 *
 * ##### Datetime format modifiers
 *
 * * 0 zero padding
 * * - no padding
 * * _ space padding
 *
 * #### Number format specifiers
 *
 * * %f fixed point notation
 * * %e exponent notation
 * * %g %f or %e depending on given numbers
 * * %rd rounded decimal notation
 * * %d decimal notation
 * * %P percent notation (Multiplied by 100)
 * * %p percent notation (Not multiplied by 100)
 * * %RP rounded percent notation (Multiplied by 100)
 * * %rp rounded percent notation (Not multiplied by 100)
 * * %fsi fixed point notation with a SI prefix
 *     * y: yocto, 10^-24
 *     * z: zepto, 10^-21
 *     * a: atto,  10^-18
 *     * f: femto, 10^-15
 *     * p: pico,  10^-12
 *     * n: nano,  10^- 9
 *     * μ: micro, 10^- 6
 *     * m: milli, 10^- 3
 *     *  : none,  10^  0
 *     * k: kilo,  10^+ 3
 *     * M: mega,  10^+ 6
 *     * G: giga,  10^+ 9
 *     * T: tera,  10^+12
 *     * P: peta,  10^+15
 *     * E: exa,   10^+18
 *     * Z: zetta, 10^+21
 *     * Y: yotta, 10^+24
 * * %ssi step-based fixed point notation with a SI prefix
 *
 * ##### Number format modifiers
 *
 * * - Minus sign for negative numbers. Nothing for the others.
 * * + Minus sign for negative numbers. Plus sign for the others.
 * * ( Parentheses for negative numbers. Nothing for the others.
 * * _ Minus sign for negative numbers. Space for the others.
 * * .N Number of digits after the fractional point.
 */
export interface NumberFormatter {
	/**
	 * Formats the given number `target`.
	 *
	 * @param target A format target
	 * @param step A step of numbers
	 */
	format(target: number, step: number): string;
}
