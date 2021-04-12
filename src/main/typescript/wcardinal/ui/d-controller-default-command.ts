/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DCommand } from "./d-command";
import { DCommandClear } from "./d-command-clear";
import { DCommandFlag } from "./d-command-flag";
import { DCommandRedo } from "./d-command-redo";
import { DCommandUndo } from "./d-command-undo";
import { DControllerCommand } from "./d-controller-command";

const isCommandStorable = (command: DCommand): boolean => {
	return !(command.getFlag() & DCommandFlag.UNSTORABLE);
};

const isCommandClear = (command: DCommand): boolean => {
	return !!(command.getFlag() & DCommandFlag.CLEAR);
};

export class DControllerDefaultCommand extends utils.EventEmitter implements DControllerCommand {
	protected _position: number;
	protected _done: DCommand[];
	protected _waiting: DCommand[];
	protected _executing: Promise<void> | null;

	constructor() {
		super();

		this._position = 0;
		this._done = [];
		this._waiting = [];
		this._executing = null;
	}

	last(): DCommand | null {
		const done = this._done;
		const waiting = this._waiting;

		if (waiting.length <= 0) {
			if (0 < done.length) {
				return done[done.length - 1];
			} else {
				return null;
			}
		} else {
			return waiting[waiting.length - 1];
		}
	}

	push(command: DCommand): void {
		const waiting = this._waiting;
		waiting.push(command);
		this.next();
	}

	next(): void {
		if (this._executing == null) {
			const waiting = this._waiting;
			if (0 < waiting.length) {
				const command = waiting.shift();
				if (command != null) {
					if (command instanceof DCommandUndo) {
						const done = this._done;
						if (this._position < done.length) {
							const current = done[done.length - 1 - this._position];
							this._position += 1;
							this.emit("change", this);
							const result = current.undo();
							if (result === true) {
								this.onSuccess(command);
							} else if (result === false) {
								this.onFail(command);
							} else {
								this._executing = result.then(
									() => {
										this.onSuccess(command);
									},
									() => {
										this.onFail(command);
									}
								);
							}
						}
					} else if (command instanceof DCommandRedo) {
						const done = this._done;
						if (0 < this._position) {
							const current = done[done.length - this._position];
							this._position -= 1;
							this.emit("change", this);
							const result = current.redo();
							if (result === true) {
								this.onSuccess(command);
							} else if (result === false) {
								this.onFail(command);
							} else {
								this._executing = result.then(
									() => {
										this.onSuccess(command);
									},
									() => {
										this.onFail(command);
									}
								);
							}
						}
					} else {
						const isClear = isCommandClear(command);
						const isStorable = isCommandStorable(command);
						if (isClear || isStorable) {
							const size = isClear ? this._done.length : this._position;
							if (0 < size) {
								this.remove(size);
								this._position = 0;
								this.emit("change", this);
							}
							this.cleanup();
						}
						const result = command.execute();
						if (result === true) {
							this.onSuccess(command);
						} else if (result === false) {
							this.onFail(command);
						} else {
							this._executing = result.then(
								() => {
									this.onSuccess(command);
								},
								() => {
									this.onFail(command);
								}
							);
						}
					}
				}
			}
		}
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

	protected onSuccess(command: DCommand): void {
		this._executing = null;
		if (isCommandStorable(command)) {
			this._done.push(command);
			this.emit("dirty", this);
		} else if (command instanceof DCommandUndo || command instanceof DCommandRedo) {
			this.emit("dirty", this);
		}
		this.emit("change", this);
		this.next();
	}

	protected onFail(command: DCommand): void {
		this._executing = null;
		const waiting = this._waiting;
		command.destroy();
		for (let i = 0, imax = waiting.length; i < imax; ++i) {
			waiting[i].destroy();
		}
		waiting.length = 0;
		this.emit("change", this);
	}

	size(): number {
		return this._done.length;
	}

	clear(): void {
		this.push(new DCommandClear());
	}

	redo(): void {
		if (this.isRedoable()) {
			this._waiting.push(new DCommandRedo());
			this.next();
		}
	}

	undo(): void {
		if (this.isUndoable()) {
			this._waiting.push(new DCommandUndo());
			this.next();
		}
	}

	isRedoable(): boolean {
		return 0 < this._position && this._executing == null;
	}

	isUndoable(): boolean {
		return this._position < this._done.length && this._executing == null;
	}
}
