/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommandBase } from "./d-command-base";

export abstract class DCommandCreate extends DCommandBase {
	abstract override execute(): boolean;

	override isStorable(): boolean {
		return false;
	}

	override isClear(): boolean {
		return true;
	}
}
