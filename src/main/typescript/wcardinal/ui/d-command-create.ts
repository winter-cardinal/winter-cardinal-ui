/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommandBase } from "./d-command-base";
import { DCommandFlag } from "./d-command-flag";

export abstract class DCommandCreate extends DCommandBase {
	abstract execute(): boolean;

	override getFlag(): DCommandFlag {
		return DCommandFlag.UNSTORABLE | DCommandFlag.CLEAR;
	}
}
