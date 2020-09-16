import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DInputBooleanButtonOffOptions<
	VALUE = unknown,
	THEME extends DThemeInputBooleanButtonOff = DThemeInputBooleanButtonOff,
	EMITTER = any
> extends DButtonOptions<VALUE, THEME, EMITTER> {

}

export interface DThemeInputBooleanButtonOff extends DThemeButton {

}

export class DInputBooleanButtonOff<
	VALUE = unknown,
	THEME extends DThemeInputBooleanButtonOff = DThemeInputBooleanButtonOff,
	OPTIONS extends DInputBooleanButtonOffOptions<VALUE, THEME> = DInputBooleanButtonOffOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DInputBooleanButtonOff";
	}
}
