/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommandBase } from "./d-command-base";
import { DControllers } from "./d-controllers";

export class DCommandSaveAs extends DCommandBase {
	protected _name: string;

	constructor(name: string) {
		super();
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	override isStorable(): boolean {
		return false;
	}

	override execute(): boolean {
		DControllers.getDocumentController().saveAs(this._name);
		return true;
	}
}
