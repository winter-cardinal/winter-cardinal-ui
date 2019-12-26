import { DThemeDefaultConfiguration } from "./d-theme-default-configuration";
import { DThemeDefaultConfigurationWhite } from "./d-theme-default-configuration-white";

export class DThemeDefaultConfigurations {
	private static DEFAULT_CLASS: (new () => DThemeDefaultConfiguration) | null = null;
	private static INSTANCE: DThemeDefaultConfiguration;

	/**
	 * Get instance of theme configuration class.
	 * @returns DThemeDefaultConfiguration class.
	 */
	static getInstance(): DThemeDefaultConfiguration {
		let result = this.INSTANCE;
		if(result == null) {
			result = new ( this.DEFAULT_CLASS || DThemeDefaultConfigurationWhite)();
			this.INSTANCE = result;
		}
		return result;
	}

	/**
	 * Set default class for theme configuration.
	 * @param defaultClass theme configuration.
	 */
	static setDefaultClass(defaultClass: (new () => DThemeDefaultConfiguration)): void {
		this.DEFAULT_CLASS = defaultClass;
		this.INSTANCE = new ( this.DEFAULT_CLASS || DThemeDefaultConfigurationWhite)();
	}
}
