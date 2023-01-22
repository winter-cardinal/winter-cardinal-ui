/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DCommand } from "./d-command";
import { DCommandClear } from "./d-command-clear";
import { DCommandFlag } from "./d-command-flag";
import { DControllerCommand } from "./d-controller-command";

const isCommandStorable = (command: DCommand): boolean => {
	return !(command.getFlag() & DCommandFlag.UNSTORABLE);
};

const isCommandClear = (command: DCommand): boolean => {
	return !!(command.getFlag() & DCommandFlag.CLEAR);
};

const isCommandClean = (command: DCommand): boolean => {
	return !!(command.getFlag() & DCommandFlag.CLEAN);
};

export class DControllerCommandImpl extends utils.EventEmitter implements DControllerCommand {
	protected _position: number;
	protected _done: DCommand[];

	constructor() {
		super();
		this._position = 0;
		this._done = [];
	}

	last(): DCommand | null {
		const done = this._done;
		if (0 < done.length) {
			return done[done.length - 1];
		} else {
			return null;
		}
	}

	push(command: DCommand): void {
		this.execute(command);
	}

	protected execute(command: DCommand): void {
		this.emit("executing", command, this);
		const isClear = isCommandClear(command);
		const isStorable = isCommandStorable(command);
		if (isClear || isStorable) {
			const size = isClear ? this._done.length : this._position;
			if (0 < size) {
				this.remove(size);
				this._position = 0;
			}
			this.cleanup();
		}
		const result = command.execute();
		if (result === true) {
			this.onSuccess(command);
		} else {
			this.onFail(command);
		}
	}

	protected onSuccess(command: DCommand): void {
		if (isCommandStorable(command)) {
			this._done.push(command);
			if (!isCommandClean(command)) {
				this.emit("dirty", this);
			}
		}
		this.emit("executed", command, this);
	}

	protected onFail(command: DCommand): void {
		command.destroy();
	}

	protected cleanup(): void {
		const done = this._done;
		const size = done.length - 100;
		if (0 < size) {
			for (let i = 0; i < size; ++i) {
				done[i].destroy();
				done.shift();
			}
		}
	}

	protected remove(size: number): boolean {
		const done = this._done;
		if (0 < size) {
			const ifrom = Math.max(0, done.length - size);
			size = done.length - ifrom;
			if (0 < size) {
				for (let i = ifrom, imax = done.length; i < imax; ++i) {
					done[i].destroy();
				}

				done.splice(ifrom, done.length - ifrom);
				return true;
			}
		}
		return false;
	}

	size(): number {
		return this._done.length;
	}

	clear(): void {
		this.push(new DCommandClear());
	}

	redo(): void {
		if (this.isRedoable()) {
			this.doRedo();
		}
	}

	protected doRedo(): void {
		const done = this._done;
		if (0 < this._position) {
			const current = done[done.length - this._position];
			this._position -= 1;
			this.emit("redoing", current, this);
			const result = current.redo();
			if (result === true) {
				this.onRedoSuccess(current);
			} else {
				this.onRedoFail(current);
			}
		}
	}

	protected onRedoSuccess(redoed: DCommand): void {
		if (!isCommandClean(redoed)) {
			this.emit("dirty", this);
		}
		this.emit("redoed", redoed, this);
	}

	protected onRedoFail(command: DCommand): void {
		// DO NOTHING
	}

	isRedoable(): boolean {
		return 0 < this._position;
	}

	undo(): void {
		if (this.isUndoable()) {
			this.doUndo();
		}
	}

	protected doUndo(): void {
		const done = this._done;
		if (this._position < done.length) {
			const current = done[done.length - 1 - this._position];
			this._position += 1;
			this.emit("undoing", current, this);
			const result = current.undo();
			if (result === true) {
				this.onUndoSuccess(current);
			} else {
				this.onUndoFail(current);
			}
		}
	}

	protected onUndoSuccess(undoed: DCommand): void {
		if (!isCommandClean(undoed)) {
			this.emit("dirty", this);
		}
		this.emit("undoed", undoed, this);
	}

	protected onUndoFail(command: DCommand): void {
		// DO NOTHING
	}

	isUndoable(): boolean {
		return this._position < this._done.length;
	}
}
