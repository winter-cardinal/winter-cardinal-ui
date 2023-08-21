/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommandBase } from "./d-command-base";
import { DControllers } from "./d-controllers";

export class DCommandSecretSave extends DCommandBase {
	protected _standard: boolean;

	constructor(standard: boolean) {
		super();
		this._standard = standard;
	}

	get standard(): boolean {
		return this._standard;
	}

	override isStorable(): boolean {
		return false;
	}

	override execute(): boolean {
		DControllers.getDocumentController().secretSave(this.standard);
		return true;
	}
}
