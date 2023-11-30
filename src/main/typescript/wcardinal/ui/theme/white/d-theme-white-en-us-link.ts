import { DThemeWhiteLink } from "./d-theme-white-link";

export class DThemeWhiteEnUsLink extends DThemeWhiteLink {
	protected override getLabelOpenLink(): string {
		return "Open";
	}

	protected override getLabelOpenLinkInNewWindow(): string {
		return "Open in New Window";
	}

	protected override getLabelCopyLinkAddress(): string {
		return "Copy Link Address";
	}
}
