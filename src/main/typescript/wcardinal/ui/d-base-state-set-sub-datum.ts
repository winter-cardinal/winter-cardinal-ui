import { DBaseStateSet } from "./d-base-state-set";

export interface DBaseStateSetSubDatum {
	readonly interval: number;
	add(state: string, target: DBaseStateSet): this;
	remove(state: string, target: DBaseStateSet): this;
}
