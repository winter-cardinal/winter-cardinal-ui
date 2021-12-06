import { DisplayObject, Texture } from "pixi.js";
import { DThemeLink } from "../..";
import { DBaseStateSet } from "../../d-base-state-set";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";

/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("link_mark", 24, 24,
	`<g>` +
		`<path fill="none" stroke="#fff" stroke-width="1" ` +
			`d="M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8" />` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeDarkLink implements DThemeLink {
	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.link_mark;
	}

	getMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return {
			sticky: true,
			align: "RIGHT",
			items: [
				{
					value: DLinkMenuItemId.OPEN_LINK,
					text: {
						value: this.getLabelOpenLink()
					}
				},
				{
					value: DLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW,
					text: {
						value: this.getLabelOpenLinkInNewWindow()
					}
				},
				{
					value: DLinkMenuItemId.COPY_LINK_ADDRESS,
					text: {
						value: this.getLabelCopyLinkAddress()
					}
				}
			]
		};
	}

	protected getLabelOpenLink(): string {
		return "Open";
	}

	protected getLabelOpenLinkInNewWindow(): string {
		return "Open in new window";
	}

	protected getLabelCopyLinkAddress(): string {
		return "Copy link address";
	}
}
