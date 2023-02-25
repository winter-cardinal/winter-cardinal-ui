/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommandBase } from "./d-command-base";
import { DControllers } from "./d-controllers";

export class DCommandSave extends DCommandBase {
	override isStorable(): boolean {
		return false;
	}

	override execute(): boolean {
		DControllers.getDocumentController().save();
		return true;
	}
}
