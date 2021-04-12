/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "../d-base";

export class Lazy<INSTANCE, OPTIONS> {
	instance: INSTANCE | null;
	newInstance: new (options: OPTIONS) => INSTANCE;
	options: OPTIONS;

	constructor(newInstance: new (options: OPTIONS) => INSTANCE, options: OPTIONS, base?: DBase) {
		this.instance = null;
		this.newInstance = newInstance;
		this.options = options;

		if (base != null) {
			if (base.state.isActive) {
				setTimeout((): void => {
					this.get();
				}, 0);
			}

			base.on("active", (): void => {
				this.get();
			});
		}
	}

	get(): INSTANCE {
		let result = this.instance;
		if (result == null) {
			result = new this.newInstance(this.options);
			this.instance = result;
		}
		return result;
	}
}
