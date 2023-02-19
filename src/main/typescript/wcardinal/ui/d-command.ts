/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommandFlag } from "./d-command-flag";

export interface DCommand {
	/**
	 * Called to executed this command.
	 */
	execute(): boolean;

	merge(target: DCommand): boolean;

	redo(): boolean;
	undo(): boolean;
	destroy(): void;
	getFlag(): DCommandFlag;
}
