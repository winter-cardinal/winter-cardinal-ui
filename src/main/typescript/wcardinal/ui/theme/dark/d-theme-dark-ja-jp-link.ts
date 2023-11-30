import { DThemeDarkLink } from "./d-theme-dark-link";

export class DThemeDarkJaJpLink extends DThemeDarkLink {
	protected override getLabelOpenLink(): string {
		return "開く";
	}

	protected override getLabelOpenLinkInNewWindow(): string {
		return "新しいウィンドウで開く";
	}

	protected override getLabelCopyLinkAddress(): string {
		return "アドレスをコピーする";
	}
}
