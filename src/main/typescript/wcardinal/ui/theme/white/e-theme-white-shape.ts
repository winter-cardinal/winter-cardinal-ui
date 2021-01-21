import { EThemeShape } from "../../shape/e-shape-defaults";
import { EShapeStrokeSide } from "../../shape/e-shape-stroke-side";

export class EThemeWhiteShape implements EThemeShape {
	getFillColor(): number {
		return 0xffffff;
	}

	getFillAlpha(): number {
		return 0.5;
	}

	getStrokeColor(): number {
		return 0x4f4f4f;
	}

	getStrokeAlpha(): number {
		return 1;
	}

	getStrokeWidth(): number {
		return 2;
	}

	getStrokeAlign(): number {
		return 0;
	}

	getStrokeSide(): EShapeStrokeSide {
		return EShapeStrokeSide.ALL;
	}

	getTextValue(): string {
		return "";
	}

	getTextColor(): number {
		return this.getStrokeColor();
	}

	getTextAlpha(): number {
		return this.getStrokeAlpha();
	}

	getTextFamily(): string {
		return "auto";
	}

	getTextSize(): number {
		return 14;
	}

	getCursor(): string {
		return "";
	}

	getRadius(): number {
		return 0.25;
	}

	getSizeX(): number {
		return 100;
	}

	getSizeY(): number {
		return 100;
	}

	getHighlightColor(): number {
		return 0x1e87f0;
	}
}
