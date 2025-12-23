/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Character } from "./character";

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
			if (
				!(Character.SURROGATE.LOW.FROM <= code && code <= Character.SURROGATE.LOW.TO) &&
				!(Character.VARIATION.FROM <= code && code <= Character.VARIATION.TO)
			) {
				return i;
			}
		}
		return iend;
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
