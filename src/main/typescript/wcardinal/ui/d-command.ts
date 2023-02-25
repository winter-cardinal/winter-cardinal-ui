/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DCommand {
	isStorable(): boolean;

	isClear(): boolean;

	isClean(): boolean;

	/**
	 * Called to executed this command.
	 *
	 * @return true if executed successfully
	 */
	execute(): boolean;

	/**
	 * Called to merge the target command and this command.
	 * Returns true if merged successfully.
	 *
	 * @param target a command to be merged
	 * @return true if merged successfully
	 */
	merge(target: DCommand): boolean;

	isMerged(): boolean;

	redo(): boolean;
	undo(): boolean;
	destroy(): void;
}
