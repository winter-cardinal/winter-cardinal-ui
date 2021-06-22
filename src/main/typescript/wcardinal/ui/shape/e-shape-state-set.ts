import { DBaseStateSet } from "../d-base-state-set";

export interface EShapeStateSet extends DBaseStateSet {
	isClicked: boolean;
	readonly inClicked: boolean;
	readonly onClicked: boolean;
	readonly underClicked: boolean;
	isDown: boolean;
	readonly inDown: boolean;
	readonly onDown: boolean;
	readonly underDown: boolean;
	isUp: boolean;
	readonly inUp: boolean;
	readonly onUp: boolean;
	readonly underUp: boolean;
	isActivated: boolean;
	readonly inActivated: boolean;
	readonly onActivated: boolean;
	readonly underActivated: boolean;
	isDeactivated: boolean;
	readonly inDeactivated: boolean;
	readonly onDeactivated: boolean;
	readonly underDeactivated: boolean;
}
