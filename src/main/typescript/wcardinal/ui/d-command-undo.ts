/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommand } from "./d-command";
import { DCommandFlag } from "./d-command-flag";

export class DCommandUndo implements DCommand {
	execute(): Promise<void> | boolean {
		throw new Error("Not supported");
	}

	redo(): Promise<void> | boolean {
		throw new Error("Not supported");
	}

	undo(): Promise<void> | boolean {
		throw new Error("Not supported");
	}

	destroy(): void {
		// DO NOTHING
	}

	getFlag(): DCommandFlag {
		return DCommandFlag.UNSTORABLE;
	}
}
