import { DBaseStateSetSubDatumImp } from "./d-base-state-set-sub-datum-impl";

export class DBaseStateSetTickerDatumImpl extends DBaseStateSetSubDatumImp {
	protected override newValue(now: number, interval: number): number | null {
		return Math.round(now / interval);
	}

	protected override newOn(now: number, interval: number): boolean {
		return true;
	}
}
