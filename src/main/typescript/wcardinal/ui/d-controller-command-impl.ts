/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DCommand } from "./d-command";
import { DCommandClear } from "./d-command-clear";
import { DControllerCommand } from "./d-controller-command";

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
		const doneLength = done.length;
		if (0 < doneLength) {
			return done[doneLength - 1];
		} else {
			return null;
		}
	}

	push(command: DCommand): void {
		this.merge(command);
		this.execute(command);
	}

	protected merge(command: DCommand): void {
		const done = this._done;
		const isClear = command.isClear();
		const isStorable = command.isStorable();
		if (isClear || isStorable) {
			const size = isClear ? done.length : this._position;
			if (0 < size) {
				this.remove(size);
				this._position = 0;
				this.emit("change", this);
			}
			this.cleanup();
		}
		const doneLength = done.length;
		if (0 < doneLength) {
			command.merge(done[doneLength - 1]);
		}
	}

	protected execute(command: DCommand): void {
		this.emit("executing", command, this);
		if (command.execute()) {
			return this.onSuccess(command);
		} else {
			return this.onFail(command);
		}
	}

	protected onSuccess(command: DCommand): void {
		if (command.isStorable()) {
			if (!command.isMerged()) {
				this._done.push(command);
			}
			if (!command.isClean()) {
				this.emit("dirty", this);
			}
		}
		this.emit("change", this);
		this.emit("executed", command, this);
	}

	protected onFail(command: DCommand): void {
		command.destroy();
		this.emit("change", this);
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
			this.emit("change", this);
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
		if (!redoed.isClean()) {
			this.emit("dirty", this);
		}
		this.emit("change", this);
		this.emit("redoed", redoed, this);
	}

	protected onRedoFail(command: DCommand): void {
		this.emit("change", this);
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
			this.emit("change", this);
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
		if (!undoed.isClean()) {
			this.emit("dirty", this);
		}
		this.emit("change", this);
		this.emit("undoed", undoed, this);
	}

	protected onUndoFail(command: DCommand): void {
		this.emit("change", this);
	}

	isUndoable(): boolean {
		return this._position < this._done.length;
	}
}
