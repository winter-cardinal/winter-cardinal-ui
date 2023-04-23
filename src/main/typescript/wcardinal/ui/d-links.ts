/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateOptions } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DLinkTarget } from "./d-link-target";
import { isArray } from "./util/is-array";
import { isString } from "./util/is-string";

export interface DLinksStateOptions {
	state?: string | string[] | DBaseStateOptions;
}

export class DLinks {
	static toStateOptions<OPTIONS extends DLinksStateOptions>(
		target?: DLinkTarget | keyof typeof DLinkTarget,
		options?: OPTIONS
	): OPTIONS | undefined {
		if (options) {
			if (target === DLinkTarget.NEW_WINDOW || target === "NEW_WINDOW") {
				const state = options.state;
				if (state == null) {
					options.state = DBaseState.NEW_WINDOW;
				} else if (isString(state)) {
					if (state !== DBaseState.NEW_WINDOW) {
						options.state = [state, DBaseState.NEW_WINDOW];
					}
				} else if (isArray(state)) {
					if (state.indexOf(DBaseState.NEW_WINDOW) < 0) {
						state.push(DBaseState.NEW_WINDOW);
					}
				} else {
					const values = state.values;
					if (values == null) {
						state.values = DBaseState.NEW_WINDOW;
					} else if (isString(values)) {
						if (values !== DBaseState.NEW_WINDOW) {
							state.values = [values, DBaseState.NEW_WINDOW];
						}
					} else {
						if (values.indexOf(DBaseState.NEW_WINDOW) < 0) {
							values.push(DBaseState.NEW_WINDOW);
						}
					}
				}
			}
		}
		return options;
	}
}
