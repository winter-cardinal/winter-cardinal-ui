/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommand } from "./d-command";
import { DCommandFlag } from "./d-command-flag";
import { DControllers } from "./d-controllers";

export class DCommandSaveAs implements DCommand {
	protected _name: string;

	constructor( name: string ) {
		this._name = name;
	}

	execute(): Promise<unknown> | boolean {
		return DControllers.getDocumentController().saveAs( this._name );
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
