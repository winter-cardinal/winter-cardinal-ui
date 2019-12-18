import { DChartCoordinateTransform, DThemeChartCoordinateTransform } from "./d-chart-coordinate-transform";

export class DChartCoordinateTransformImpl implements DChartCoordinateTransform {
	protected _theme: DThemeChartCoordinateTransform;
	protected _id: number;
	protected _translate: number;
	protected _scale: number;
	protected _itranslate: number;
	protected _iscale: number;

	constructor( theme: DThemeChartCoordinateTransform ) {
		this._theme = theme;
		this._id = 0;
		this._translate = 0;
		this._scale = 1;
		this._itranslate = 0;
		this._iscale = 1;
	}

	get id(): number {
		return this._id;
	}

	get translate(): number {
		return this._translate;
	}

	set translate( translate: number ) {
		this.set( translate );
	}

	get scale(): number {
		return this._scale;
	}

	set scale( scale: number ) {
		this.set( undefined, scale );
	}

	set( translate?: number, scale?: number ): void {
		let isChanged = false;

		if( translate != null && this._translate !== translate ) {
			isChanged = true;
			this._translate = translate;
		}

		if( scale != null && this._scale !== scale ) {
			isChanged = true;
			this._scale = scale;
		}

		if( isChanged ) {
			this._id += 1;
			this._iscale = ( this._theme.isZero( this._scale ) ? 0 : 1 / this._scale );
			this._itranslate = - this._translate * this._iscale;
		}
	}

	map( value: number ): number {
		return this._translate + this._scale * value;
	}

	mapAll( values: number[], ifrom: number, iend: number, stride: number, offset: number ): void {
		const translate = this._translate;
		const scale = this._scale;
		for( let i = ifrom + offset; i < iend; i += stride ) {
			values[ i ] = translate + scale * values[ i ];
		}
	}

	unmap( value: number ): number {
		return this._itranslate + this._iscale * value;
	}

	unmapAll( values: number[], ifrom: number, iend: number, stride: number, offset: number ): void {
		const itranslate = this._itranslate;
		const iscale = this._iscale;
		for( let i = ifrom + offset; i < iend; i += stride ) {
			values[ i ] = itranslate + iscale * values[ i ];
		}
	}
}
