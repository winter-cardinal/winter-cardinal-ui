import { DBaseStateSetSubDatumImp } from "./d-base-state-set-sub-datum-impl";

export class DBaseStateSetBlinkerDatumImpl extends DBaseStateSetSubDatumImp {
	protected override newValue(now: number, interval: number): number | null {
		return null;
	}

	protected override newOn(now: number, interval: number): boolean {
		return Math.round(now / interval) % 2 === 0;
	}
}
