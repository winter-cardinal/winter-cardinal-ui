/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DCommand } from "./d-command";

export interface DControllerCommand extends utils.EventEmitter {
	push( command: DCommand ): void;

	last(): DCommand | null;

	size(): number;
	clear(): void;

	redo(): void;
	undo(): void;

	isRedoable(): boolean;
	isUndoable(): boolean;
}
