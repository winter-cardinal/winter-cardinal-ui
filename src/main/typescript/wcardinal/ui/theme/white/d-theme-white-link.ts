import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeLink } from "../../d-link";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("link_mark", 24, 24,
	`<g>` +
		`<path fill="none" stroke="#fff" stroke-width="1" ` +
			`d="M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8" />` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export abstract class DThemeWhiteLink implements DThemeLink {
	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.link_mark;
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

	protected abstract getLabelOpenLink(): string;

	protected abstract getLabelOpenLinkInNewWindow(): string;

	protected abstract getLabelCopyLinkAddress(): string;
}
