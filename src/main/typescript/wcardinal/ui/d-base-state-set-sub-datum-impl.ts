import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetSubDatum } from "./d-base-state-set-sub-datum";

export abstract class DBaseStateSetSubDatumImp implements DBaseStateSetSubDatum {
	private _stateToTargets: Map<string, Set<DBaseStateSet>>;
	private _interval: number;
	private _timeoutId?: number;
	private _onTimeBound: () => void;

	constructor(interval: number) {
		this._stateToTargets = new Map<string, Set<DBaseStateSet>>();
		this._interval = interval;
		this._onTimeBound = () => this.onTime();
	}

	get interval(): number {
		return this._interval;
	}

	add(state: string, target: DBaseStateSet): this {
		const stateToTargets = this._stateToTargets;
		let targets = stateToTargets.get(state);
		if (targets == null) {
			targets = new Set<DBaseStateSet>();
			targets.add(target);
			stateToTargets.set(state, targets);
			if (stateToTargets.size <= 1) {
				this.start();
			}
		} else {
			targets.add(target);
		}
		return this;
	}

	remove(state: string, target: DBaseStateSet): this {
		const stateToTargets = this._stateToTargets;
		const targets = stateToTargets.get(state);
		if (targets != null && targets.has(target)) {
			targets.delete(target);
			target.remove(state);
			if (targets.size <= 0) {
				stateToTargets.delete(state);
			}
			if (stateToTargets.size <= 0) {
				this.stop();
			}
		}
		return this;
	}

	protected start(): this {
		if (this._timeoutId == null) {
			this.onTime();
		}
		return this;
	}

	protected stop(): this {
		const timeoutId = this._timeoutId;
		if (timeoutId != null) {
			clearTimeout(timeoutId);
			this._timeoutId = undefined;
		}
		return this;
	}

	protected onTime(): void {
		const now = Date.now();
		const interval = this.interval;
		const value = this.newValue(now, interval);
		const on = this.newOn(now, interval);
		this._stateToTargets.forEach((targets, state) => {
			targets.forEach((target) => {
				target.set(state, value, on);
			});
		});
		this._timeoutId = window.setTimeout(
			this._onTimeBound,
			Math.max(0, interval - (now % interval))
		);
	}

	protected abstract newValue(now: number, interval: number): number | null;
	protected abstract newOn(now: number, interval: number): boolean;
}
