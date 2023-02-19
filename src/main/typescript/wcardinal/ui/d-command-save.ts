/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommand } from "./d-command";
import { DCommandFlag } from "./d-command-flag";
import { DControllers } from "./d-controllers";

export class DCommandSave implements DCommand {
	execute(): boolean {
		DControllers.getDocumentController().save();
		return true;
	}

	merge(target: DCommand): boolean {
		return false;
	}

	redo(): boolean {
		return true;
	}

	undo(): boolean {
		return true;
	}

	destroy(): void {
		// DO NOTHING
	}

	getFlag(): DCommandFlag {
		return DCommandFlag.UNSTORABLE;
	}
}
