import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";

export class DThemeWhiteLinks {
	static getMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return {
			sticky: true,
			align: "RIGHT",
			items: [{
				value: DLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW,
				text: {
					value: this.getOpenLinkInNewWindow()
				}
			}, {
				value: DLinkMenuItemId.COPY_LINK_ADDRESS,
				text: {
					value: this.getCopyLinkAddress()
				}
			}]
		};
	}

	protected static getOpenLinkInNewWindow(): string {
		return "Open in new window";
	}

	protected static getCopyLinkAddress(): string {
		return "Copy link address";
	}
}
