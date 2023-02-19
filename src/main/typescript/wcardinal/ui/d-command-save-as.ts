/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommand } from "./d-command";
import { DCommandFlag } from "./d-command-flag";
import { DControllers } from "./d-controllers";

export class DCommandSaveAs implements DCommand {
	protected _name: string;

	constructor(name: string) {
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	execute(): boolean {
		DControllers.getDocumentController().saveAs(this._name);
		return true;
	}

	marge(target: DCommand): boolean {
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
