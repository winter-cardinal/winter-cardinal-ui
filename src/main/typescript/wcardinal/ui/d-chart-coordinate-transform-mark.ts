export interface DChartCoordinateTransformMark {
	oldTranslate: number;
	oldScale: number;
	newTranslate: number;
	newScale: number;
	set( translate?: number, scale?: number ): void;
}

export class DChartCoordinateTransformMarkImpl implements DChartCoordinateTransformMark {
	oldTranslate: number;
	oldScale: number;
	newTranslate: number;
	newScale: number;

	constructor() {
		this.oldTranslate = 0;
		this.oldScale = 1;
		this.newTranslate = 0;
		this.newScale = 1;
	}

	set( translate?: number | undefined, scale?: number | undefined ): void {
		if( translate != null ) {
			this.newTranslate = translate;
		}

		if( scale != null ) {
			this.newScale = scale;
		}
	}
}
