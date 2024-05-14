import { DApplicationTarget } from "../d-application-like";
import { DBaseStateSet } from "../d-base-state-set";

export interface UtilGestureTarget extends DApplicationTarget {
	state: DBaseStateSet;
}
