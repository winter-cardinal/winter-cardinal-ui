import { DThemeDarkLink } from "./d-theme-dark-link";

export class DThemeDarkEnUsLink extends DThemeDarkLink {
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
