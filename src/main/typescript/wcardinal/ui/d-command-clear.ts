/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommand } from "./d-command";
import { DCommandFlag } from "./d-command-flag";

export class DCommandClear implements DCommand {
	execute(): boolean {
		return true;
	}

	merge(target: DCommand): boolean {
		return false;
	}

	redo(): boolean {
		throw new Error("Method not implemented.");
	}

	undo(): boolean {
		throw new Error("Method not implemented.");
	}

	destroy(): void {
		// DO NOTHING
	}

	getFlag(): DCommandFlag {
		return DCommandFlag.UNSTORABLE | DCommandFlag.CLEAR;
	}
}
