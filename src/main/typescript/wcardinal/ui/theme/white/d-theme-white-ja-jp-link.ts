import { DThemeWhiteLink } from "./d-theme-white-link";

export class DThemeWhiteJaJpLink extends DThemeWhiteLink {
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
