/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommand } from "./d-command";

export class DCommandBase implements DCommand {
	isStorable(): boolean {
		return true;
	}

	isClear(): boolean {
		return false;
	}

	isClean(): boolean {
		return false;
	}

	execute(): boolean {
		return true;
	}

	merge(target: DCommand): boolean {
		return false;
	}

	isMerged(): boolean {
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
}
