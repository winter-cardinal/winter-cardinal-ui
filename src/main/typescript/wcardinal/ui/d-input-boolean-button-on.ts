import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DInputBooleanButtonOnOptions<
	VALUE = unknown,
	THEME extends DThemeInputBooleanButtonOn = DThemeInputBooleanButtonOn,
	EMITTER = any
> extends DButtonOptions<VALUE, THEME, EMITTER> {

}

export interface DThemeInputBooleanButtonOn extends DThemeButton {

}

export class DInputBooleanButtonOn<
	VALUE = unknown,
	THEME extends DThemeInputBooleanButtonOn = DThemeInputBooleanButtonOn,
	OPTIONS extends DInputBooleanButtonOnOptions<VALUE, THEME> = DInputBooleanButtonOnOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DInputBooleanButtonOn";
	}
}
