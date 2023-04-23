import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetSub } from "./d-base-state-set-sub";
import { DBaseStateSetSubDatum } from "./d-base-state-set-sub-datum";

export abstract class DBaseStateSetSubImpl implements DBaseStateSetSub {
	protected readonly _parent: DBaseStateSet;
	protected readonly _stateToInterval: Map<string, number>;
	protected readonly _intervalToDatum: Map<number, DBaseStateSetSubDatum>;

	constructor(parent: DBaseStateSet, intervalToDatum: Map<number, DBaseStateSetSubDatum>) {
		this._parent = parent;
		this._stateToInterval = new Map<string, number>();
		this._intervalToDatum = intervalToDatum;
	}

	add(state: string, interval: number): this {
		// Check if the interval is not same
		const stateToInterval = this._stateToInterval;
		const oldInterval = stateToInterval.get(state);
		if (oldInterval === interval) {
			return this;
		}

		// Remove the existing one
		if (oldInterval != null) {
			stateToInterval.delete(state);
			const datum = this._intervalToDatum.get(oldInterval);
			if (datum != null) {
				datum.remove(state, this._parent);
			}
		}

		// Add a new one
		stateToInterval.set(state, interval);
		let datum = this._intervalToDatum.get(interval);
		if (datum == null) {
			datum = this.newDatum(interval);
			this._intervalToDatum.set(interval, datum);
		}
		datum.add(state, this._parent);

		// Done
		return this;
	}

	protected abstract newDatum(interval: number): DBaseStateSetSubDatum;

	remove(state: string): this {
		const interval = this._stateToInterval.get(state);
		if (interval == null) {
			return this;
		}
		this._stateToInterval.delete(state);
		const datum = this._intervalToDatum.get(interval);
		if (datum == null) {
			return this;
		}
		datum.remove(state, this._parent);
		return this;
	}

	set(state: string, interval: number, on: boolean): this {
		if (on) {
			return this.add(state, interval);
		} else {
			return this.remove(state);
		}
	}

	has(state: string): boolean {
		return this._stateToInterval.has(state);
	}

	clear(): this {
		const parent = this._parent;
		const stateToInterval = this._stateToInterval;
		stateToInterval.forEach((interval, state) => {
			const datum = this._intervalToDatum.get(interval);
			if (datum != null) {
				datum.remove(state, parent);
			}
		});
		stateToInterval.clear();
		return this;
	}
}
