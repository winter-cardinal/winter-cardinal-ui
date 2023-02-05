import { DBaseStateSet } from "../d-base-state-set";

export interface EShapeStateSet extends DBaseStateSet {
	isClicked: boolean;
	readonly inClicked: boolean;
	readonly onClicked: boolean;
	readonly underClicked: boolean;
	isDblClicked: boolean;
	readonly inDblClicked: boolean;
	readonly onDblClicked: boolean;
	readonly underDblClicked: boolean;
	isDown: boolean;
	readonly inDown: boolean;
	readonly onDown: boolean;
	readonly underDown: boolean;
	isUp: boolean;
	readonly inUp: boolean;
	readonly onUp: boolean;
	readonly underUp: boolean;
	isUpOutside: boolean;
	readonly inUpOutside: boolean;
	readonly onUpOutside: boolean;
	readonly underUpOutside: boolean;

	isRightClicked: boolean;
	readonly inRightClicked: boolean;
	readonly onRightClicked: boolean;
	readonly underRightClicked: boolean;
	isRightDown: boolean;
	readonly inRightDown: boolean;
	readonly onRightDown: boolean;
	readonly underRightDown: boolean;
	isRightUp: boolean;
	readonly inRightUp: boolean;
	readonly onRightUp: boolean;
	readonly underRightUp: boolean;
	isRightUpOutside: boolean;
	readonly inRightUpOutside: boolean;
	readonly onRightUpOutside: boolean;
	readonly underRightUpOutside: boolean;
	isRightPressed: boolean;
	readonly inRightPressed: boolean;
	readonly onRightPressed: boolean;
	readonly underRightPressed: boolean;

	isActivated: boolean;
	readonly inActivated: boolean;
	readonly onActivated: boolean;
	readonly underActivated: boolean;
	isDeactivated: boolean;
	readonly inDeactivated: boolean;
	readonly onDeactivated: boolean;
	readonly underDeactivated: boolean;
}
