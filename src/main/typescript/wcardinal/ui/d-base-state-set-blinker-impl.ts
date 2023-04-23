import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetBlinker } from "./d-base-state-set-blinker";
import { DBaseStateSetBlinkerDatumImpl } from "./d-base-state-set-blinker-datum-impl";
import { DBaseStateSetSubDatum } from "./d-base-state-set-sub-datum";
import { DBaseStateSetSubImpl } from "./d-base-state-set-sub-impl";

let intervalToDatum: Map<number, DBaseStateSetSubDatum> | undefined;

export class DBaseStateSetBlinkerImpl extends DBaseStateSetSubImpl implements DBaseStateSetBlinker {
	constructor(parent: DBaseStateSet) {
		super(parent, (intervalToDatum ??= new Map<number, DBaseStateSetSubDatum>()));
	}

	protected newDatum(interval: number): DBaseStateSetSubDatum {
		return new DBaseStateSetBlinkerDatumImpl(interval);
	}
}
