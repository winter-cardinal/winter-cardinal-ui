import { DBase } from "../d-base";

export class UtilStateBlinker {
	protected _targets: Set<DBase>;
	protected _state: string;
	protected _delay: number;
	protected _interval: number;
	protected _timeout: number | null;
	protected _updateBound: () => void;

	constructor(state: string, delay: number, interval: number) {
		this._targets = new Set();
		this._state = state;
		this._delay = delay;
		this._interval = interval;
		this._timeout = null;
		this._updateBound = (): void => {
			this.update();
		};
	}

	start(): this {
		if (this._timeout == null) {
			this._timeout = window.setTimeout(this._updateBound, this._delay);
		}
		return this;
	}

	stop(): this {
		const timeout = this._timeout;
		if (timeout != null) {
			this._timeout = null;
			clearTimeout(timeout);
		}
		return this;
	}

	add(target: DBase): this {
		this._targets.add(target);
		target.state.set(this._state, this.isOn(Date.now()));
		return this;
	}

	remove(target: DBase): boolean {
		if (this._targets.delete(target)) {
			target.state.remove(this._state);
			return true;
		}
		return false;
	}

	contains(target: DBase): boolean {
		return this._targets.has(target);
	}

	clear(): this {
		this._targets.clear();
		return this;
	}

	isOn(time: number): boolean {
		return Math.floor(time / this._interval) % 2 === 0;
	}

	update(): this {
		const now = Date.now();
		const isOn = this.isOn(now);
		const state = this._state;
		this._targets.forEach((target: DBase): void => {
			target.state.set(state, isOn);
		});
		const interval = this._interval;
		this._timeout = window.setTimeout(this._updateBound, interval - (now % interval));
		return this;
	}
}
