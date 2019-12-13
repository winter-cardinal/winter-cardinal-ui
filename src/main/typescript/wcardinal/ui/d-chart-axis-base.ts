/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxis, DChartAxisPosition } from "./d-chart-axis";
import {
	DChartAxisBaseOptionParser, DChartAxisBaseOptions, DChartAxisBaseTickContainer, DThemeChartAxisBase
} from "./d-chart-axis-base-options";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartCoordinate } from "./d-chart-coordinate";
import { EShapeDefaults } from "./shape/e-shape-defaults";
import { EShapePointsStyle } from "./shape/e-shape-points";
import { EShapeTextLike } from "./shape/e-shape-text";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { DThemes } from "./theme/d-themes";
import { DeepPartial } from "./util/deep-partial";
import { utilIsNaN } from "./util/util-is-nan";

export class DChartAxisBase implements DChartAxis {
	protected _coordinateIndex: number;
	protected _padding: number;
	protected _position: DChartAxisPosition;
	protected _container?: DChartAxisContainer;
	protected _bar?: EShapeBar;
	protected _index: number;
	protected _tick: DChartAxisBaseTickContainer;
	protected _majorTicks: Float64Array;
	protected _minorTicks: Float64Array;
	protected _label?: DeepPartial<EShapeTextLike>;
	protected _theme: DThemeChartAxisBase;

	constructor( options?: DChartAxisBaseOptions ) {
		const theme = ( options && options.theme ) || this.getThemeDefault();
		this._theme = theme;
		this._index = 0;

		const parser = new DChartAxisBaseOptionParser( theme, options );
		this._coordinateIndex = parser.coordinateIndex;
		this._padding = parser.padding;
		this._position = parser.position;
		const tick = parser.tick;
		this._tick = tick;
		this._label = parser.label;
		this._majorTicks = new Float64Array( tick.major.count * 3 );
		this._minorTicks = new Float64Array( (tick.major.count + 1) * tick.minor.count * 3 );
	}

	get position(): DChartAxisPosition {
		return this._position;
	}

	protected updateBar(): void {
		const position = this._position;
		const container = this._container;
		const bar = this._bar;
		if( container && bar ) {
			const plotArea = container.plotArea;
			const plotAreaWidth = plotArea.width;
			const plotAreaHeight = plotArea.height;
			const padding = this._padding * this._index;
			bar.disallowUploadedUpdate();
			switch( position ) {
			case DChartAxisPosition.TOP:
				bar.transform.position.set( plotAreaWidth * 0.5, 0 - padding );
				bar.size.set( plotAreaWidth, 0 );
				break;
			case DChartAxisPosition.BOTTOM:
				bar.transform.position.set( plotAreaWidth * 0.5, plotAreaHeight + padding );
				bar.size.set( plotAreaWidth, 0 );
				break;
			case DChartAxisPosition.LEFT:
				bar.transform.position.set( 0 - padding, plotAreaHeight * 0.5 );
				bar.size.set( 0, plotAreaHeight );
				break;
			case DChartAxisPosition.RIGHT:
				bar.transform.position.set( plotAreaWidth + padding, plotAreaHeight * 0.5 );
				bar.size.set( 0, plotAreaHeight );
				break;
			}
			bar.allowUploadedUpdate();
		}
	}

	updateTicksX(
		coordinate: DChartCoordinate,
		majorShapes: EShapeBar[], minorShapes: EShapeBar[],
		shapePositionY: number
	): void {
		const tick = this._tick;
		const majorCount = tick.major.count;
		const majorFormatter = tick.major.formatter;
		const minorCountPerMajor = tick.minor.count;
		const minorCount = (majorCount + 1) * minorCountPerMajor;
		const majorTicks = this._majorTicks;
		const minorTicks = this._minorTicks;
		coordinate.ticks( majorCount, minorCountPerMajor, minorCount, majorTicks, minorTicks );

		for( let i = 0; i < majorCount; ++i ) {
			const majorShape = majorShapes[ i ];
			const imajorTick = i * 3;
			const majorTickPosition = majorTicks[ imajorTick + 0 ];
			const majorTickProjectedPosition = majorTicks[ imajorTick + 1 ];
			const majorTickStep = majorTicks[ imajorTick + 2 ];
			if( ! utilIsNaN( majorTickPosition ) ) {
				majorShape.disallowUploadedUpdate();
				majorShape.visible = true;
				majorShape.transform.position.set( majorTickProjectedPosition, shapePositionY );
				majorShape.text.value = majorFormatter.format( majorTickPosition, majorTickStep );
				majorShape.allowUploadedUpdate();
			} else {
				majorShape.visible = false;
			}
		}

		for( let i = 0; i < minorCount; ++i ) {
			const minorShape = minorShapes[ i ];
			const iminorTick = i * 3;
			const minorTickPosition = minorTicks[ iminorTick + 0 ];
			const minorTickProjectedPosition = minorTicks[ iminorTick + 1 ];
			if( ! utilIsNaN( minorTickPosition ) ) {
				minorShape.disallowUploadedUpdate();
				minorShape.visible = true;
				minorShape.transform.position.set( minorTickProjectedPosition, shapePositionY );
				minorShape.allowUploadedUpdate();
			} else {
				minorShape.visible = false;
			}
		}
	}

	updateTicksY(
		coordinate: DChartCoordinate,
		majorShapes: EShapeBar[], minorShapes: EShapeBar[],
		shapePositionX: number
	): void {
		const tick = this._tick;
		const majorCount = tick.major.count;
		const majorFormatter = tick.major.formatter;
		const minorCountPerMajor = tick.minor.count;
		const minorCount = (majorCount + 1) * minorCountPerMajor;
		const majorTicks = this._majorTicks;
		const minorTicks = this._minorTicks;
		coordinate.ticks( majorCount, minorCountPerMajor, minorCount, majorTicks, minorTicks );

		for( let i = 0; i < majorCount; ++i ) {
			const majorShape = majorShapes[ i ];
			const imajorTick = i * 3;
			const majorTickPosition = majorTicks[ imajorTick + 0 ];
			const majorTickProjectedPosition = majorTicks[ imajorTick + 1 ];
			const majorTickStep = majorTicks[ imajorTick + 2 ];
			if( ! utilIsNaN( majorTickPosition ) ) {
				majorShape.disallowUploadedUpdate();
				majorShape.visible = true;
				majorShape.transform.position.set( shapePositionX, majorTickProjectedPosition );
				majorShape.text.value = majorFormatter.format( majorTickPosition, majorTickStep );
				majorShape.allowUploadedUpdate();
			} else {
				majorShape.visible = false;
			}
		}

		for( let i = 0; i < minorCount; ++i ) {
			const minorShape = minorShapes[ i ];
			const iminorTick = i * 3;
			const minorTickPosition = minorTicks[ iminorTick + 0 ];
			const minorTickProjectedPosition = minorTicks[ iminorTick + 1 ];
			if( ! utilIsNaN( minorTickPosition ) ) {
				minorShape.disallowUploadedUpdate();
				minorShape.visible = true;
				minorShape.transform.position.set( shapePositionX, minorTickProjectedPosition );
				minorShape.allowUploadedUpdate();
			} else {
				minorShape.visible = false;
			}
		}
	}

	protected updateTicks(): void {
		const tick = this._tick;
		const majorShapes = tick.major.shapes;
		const minorShapes = tick.minor.shapes;
		const container = this._container;
		if( majorShapes && minorShapes && container ) {
			const plotArea = container.plotArea;
			const coordinateIndex = this._coordinateIndex;
			let coordinate: DChartCoordinate | null;
			const padding = this._padding * this._index;
			switch( this._position ) {
			case DChartAxisPosition.TOP:
				coordinate = plotArea.coordinate.x.get( coordinateIndex );
				if( coordinate ) {
					this.updateTicksX(
						coordinate,
						majorShapes, minorShapes,
						0 - padding
					);
				}
				break;
			case DChartAxisPosition.BOTTOM:
				coordinate = plotArea.coordinate.x.get( coordinateIndex );
				if( coordinate ) {
					this.updateTicksX(
						coordinate,
						majorShapes, minorShapes,
						plotArea.height + padding
					);
				}
				break;
			case DChartAxisPosition.LEFT:
				coordinate = plotArea.coordinate.y.get( coordinateIndex );
				if( coordinate ) {
					this.updateTicksY(
						coordinate,
						majorShapes, minorShapes,
						0 - padding
					);
				}
				break;
			case DChartAxisPosition.RIGHT:
				coordinate = plotArea.coordinate.y.get( coordinateIndex );
				if( coordinate ) {
					this.updateTicksY(
						coordinate,
						majorShapes, minorShapes,
						plotArea.width + padding
					);
				}
				break;
			}
		}
	}

	bind( container: DChartAxisContainer, index: number ): void {
		this._container = container;
		this._index = index;
		const tickShapeContainer = container.container;

		// Bar
		let bar = this._bar;
		if( ! bar ) {
			const position = this._position;
			const barPosition = ( position === DChartAxisPosition.LEFT || position === DChartAxisPosition.RIGHT ?
				EShapeBarPosition.TOP : EShapeBarPosition.LEFT
			);
			bar = new EShapeBar( barPosition, -1, EShapeDefaults.STROKE_WIDTH, EShapePointsStyle.NONE );
			bar.text.copy( this._label );
			this._bar = bar;
		}
		bar.attach( container.container );

		// Major ticks
		const tick = this._tick;
		const tickMajor = tick.major;
		let tickMajorShapes = tickMajor.shapes;
		if( ! tickMajorShapes && tick.enable ) {
			tickMajorShapes = [];
			tickMajor.shapes = tickMajorShapes;
			const tickMajorCount = tickMajor.count;
			const tickMajorSize = tickMajor.size;
			const tickMajorPosition = tickMajor.position;
			const tickMajorStyle = tickMajor.style;
			for( let i = 0; i < tickMajorCount; ++i ) {
				const tickMajorShape = new EShapeBar(
					tickMajorPosition,
					tickMajorSize,
					EShapeDefaults.STROKE_WIDTH,
					tickMajorStyle
				);
				tickMajorShape.stroke.copy( tickMajor.stroke );
				tickMajorShape.text.copy( tickMajor.text );
				tickMajorShape.size.set( 0, 0 );
				tickMajorShapes.push( tickMajorShape );
			}
		}
		if( tickMajorShapes ) {
			for( let i = 0, imax = tickMajorShapes.length; i < imax; ++i ) {
				tickMajorShapes[ i ].attach( tickShapeContainer );
			}
		}

		// Minor ticks
		const tickMinor = tick.minor;
		let tickMinorShapes = tickMinor.shapes;
		if( ! tickMinorShapes && tick.enable ) {
			tickMinorShapes = [];
			tickMinor.shapes = tickMinorShapes;
			const tickMinorCount = tickMinor.count;
			const tickMinorSize = tickMinor.size;
			const tickMinorPosition = tickMinor.position;
			const tickMinorStyle = tickMinor.style;
			for( let i = 0, imax = ( tickMajor.count + 1 ) * tickMinorCount; i < imax; ++i ) {
				const tickMinorShape = new EShapeBar(
					tickMinorPosition,
					tickMinorSize,
					EShapeDefaults.STROKE_WIDTH,
					tickMinorStyle
				);
				tickMinorShape.stroke.copy( tickMinor.stroke );
				tickMinorShape.size.set( 0, 0 );
				tickMinorShapes.push( tickMinorShape );
			}
		}
		if( tickMinorShapes ) {
			for( let i = 0, imax = tickMinorShapes.length; i < imax; ++i ) {
				tickMinorShapes[ i ].attach( tickShapeContainer );
			}
		}
	}

	unbind(): void {
		// Bar
		const bar = this._bar;
		if( bar ) {
			bar.detach();
		}

		// Major ticks
		const tick = this._tick;
		const tickMajorShapes = tick.major.shapes;
		if( tickMajorShapes ) {
			for( let i = 0, imax = tickMajorShapes.length; i < imax; ++i ) {
				tickMajorShapes[ i ].detach();
			}
		}

		// Minor ticks
		const tickMinorShapes = tick.minor.shapes;
		if( tickMinorShapes ) {
			for( let i = 0, imax = tickMinorShapes.length; i < imax; ++i ) {
				tickMinorShapes[ i ].detach();
			}
		}

		//
		this._container = undefined;
	}

	update(): void {
		this.updateBar();
		this.updateTicks();
	}

	destroy(): void {
		// Bar
		const bar = this._bar;
		if( bar ) {
			bar.destroy();
		}

		// Major ticks
		const tick = this._tick;
		const tickMajorShapes = tick.major.shapes;
		if( tickMajorShapes ) {
			for( let i = 0, imax = tickMajorShapes.length; i < imax; ++i ) {
				tickMajorShapes[ i ].destroy();
			}
		}

		// Minor ticks
		const tickMinorShapes = tick.minor.shapes;
		if( tickMinorShapes ) {
			for( let i = 0, imax = tickMinorShapes.length; i < imax; ++i ) {
				tickMinorShapes[ i ].destroy();
			}
		}

		//
		this._container = undefined;
	}

	protected getThemeDefault(): DThemeChartAxisBase {
		return DThemes.getInstance().get( this.getType() );
	}

	protected getType(): string {
		return "DChartAxisBase";
	}
}
