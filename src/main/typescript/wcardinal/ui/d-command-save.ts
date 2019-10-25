/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommand } from "./d-command";
import { DCommandFlag } from "./d-command-flag";
import { DControllers } from "./d-controllers";

export class DCommandSave implements DCommand {
	execute(): Promise<unknown> | boolean {
		return DControllers.getDocumentController().save();
	}

	redo(): Promise<unknown> | boolean {
		return true;
	}

	undo(): Promise<unknown> | boolean {
		return true;
	}

	destroy(): void {
		// DO NOTHING
	}

	getFlag(): DCommandFlag {
		return DCommandFlag.UNSTORABLE;
	}
}
