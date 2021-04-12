import { DBase } from "../d-base";

export class UtilStateBlinker {
	protected _isOn: boolean;
	protected _targets: Set<DBase>;
	protected _state: string;
	protected _delay: number;
	protected _interval: number;
	protected _timeout: number | null;
	protected _updateBound: () => void;

	constructor(state: string, delay: number, interval: number) {
		this._isOn = true;
		this._targets = new Set();
		this._state = state;
		this._delay = delay;
		this._interval = interval;
		this._timeout = null;

		const updateBound = (): void => {
			this.advance();
			this.update();
			this._timeout = window.setTimeout(updateBound, interval);
		};
		this._updateBound = updateBound;
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
		target.state.set(this._state, this.isOn());
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

	isOn(): boolean {
		return this._isOn;
	}

	isOff(): boolean {
		return !this._isOn;
	}

	advance(): this {
		this._isOn = !this._isOn;
		return this;
	}

	update(): this {
		const isOn = this.isOn();
		const state = this._state;
		this._targets.forEach((target: DBase): void => {
			target.state.set(state, isOn);
		});
		return this;
	}
}
