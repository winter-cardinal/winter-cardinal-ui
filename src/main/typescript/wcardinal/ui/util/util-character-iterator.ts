/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class UtilCharacterIterator {
	protected static _instance: UtilCharacterIterator | null = null;
	target: string;
	position: number;

	constructor() {
		this.target = "";
		this.position = 0;
	}

	init(target: string): void {
		this.target = target;
		this.position = 0;
	}

	hasNext(): boolean {
		return this.position < this.target.length;
	}

	protected findNextBreak(target: string, istart: number): number {
		const iend = target.length;
		for (let i = istart; i < iend; ++i) {
			const code = target.charCodeAt(i);
			if (!this.isLowSurrogate(code) && !this.isVariationSelector(code)) {
				return i;
			}
		}
		return iend;
	}

	protected isHighSurrogate(code: number): boolean {
		return 0xd800 <= code && code <= 0xdbff;
	}

	protected isLowSurrogate(code: number): boolean {
		return 0xdc00 <= code && code <= 0xdfff;
	}

	protected isVariationSelector(code: number): boolean {
		return 0xfe00 <= code && code <= 0xfe0f;
	}

	next(): string {
		const target = this.target;
		const position = this.position;
		const nextBreak = this.findNextBreak(target, position + 1);
		const result = target.substring(position, nextBreak);
		this.position = nextBreak;
		return result;
	}

	/**
	 * Advances the position if the next character is not equal to
	 * the given `except`.
	 *
	 * @param except
	 * @return true if the position is advanced
	 */
	advance(except?: string): boolean {
		const target = this.target;
		const position = this.position;
		const nextBreak = this.findNextBreak(target, position + 1);
		if (target.substring(position, nextBreak) !== except) {
			this.position = nextBreak;
			return true;
		}
		return false;
	}

	/**
	 * Closes this iterator.
	 *
	 * @returns true if closed.
	 */
	close(): boolean {
		const length = this.target.length;
		if (this.position < length) {
			this.position = length;
			return true;
		}
		return false;
	}

	static from(target: string): UtilCharacterIterator {
		if (UtilCharacterIterator._instance == null) {
			UtilCharacterIterator._instance = new UtilCharacterIterator();
		}
		const instance = UtilCharacterIterator._instance;
		instance.init(target);
		return instance;
	}
}
