import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetSubDatum } from "./d-base-state-set-sub-datum";
import { DBaseStateSetSubImpl } from "./d-base-state-set-sub-impl";
import { DBaseStateSetTicker } from "./d-base-state-set-ticker";
import { DBaseStateSetTickerDatumImpl } from "./d-base-state-set-ticker-datum-impl";

let intervalToDatum: Map<number, DBaseStateSetSubDatum> | undefined;

export class DBaseStateSetTickerImpl extends DBaseStateSetSubImpl implements DBaseStateSetTicker {
	constructor(parent: DBaseStateSet) {
		super(parent, (intervalToDatum ??= new Map<number, DBaseStateSetSubDatum>()));
	}

	protected newDatum(interval: number): DBaseStateSetSubDatum {
		return new DBaseStateSetTickerDatumImpl(interval);
	}
}
