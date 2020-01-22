/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";
import { DChartAxis } from "./d-chart-axis";
import { DChartAxisBaseOptions, DThemeChartAxisBase } from "./d-chart-axis-base-options";
import {
	DChartAxisBaseBar, DChartAxisBaseOptionParser, DChartAxisBaseTickContainer
} from "./d-chart-axis-base-options-parser";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartCoordinate } from "./d-chart-coordinate";
import { EShapeDefaults } from "./shape/e-shape-defaults";
import { EShapeTextLike } from "./shape/e-shape-text";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { DThemes } from "./theme/d-themes";
import { DeepPartial } from "./util/deep-partial";
import { isNaN } from "./util/is-nan";

export class DChartAxisBase implements DChartAxis {
	protected _coordinateIndex: number;
	protected _padding: number;
	protected _position: DChartAxisPosition;
	protected _container?: DChartAxisContainer;
	protected _bar: DChartAxisBaseBar;
	protected _index: number;
	protected _tick: DChartAxisBaseTickContainer;
	protected _majorTicks: Float64Array;
	protected _minorTicks: Float64Array;
	protected _label?: DeepPartial<EShapeTextLike>;
	protected _theme: DThemeChartAxisBase;

	constructor( options?: DChartAxisBaseOptions ) {
		const theme = this.toTheme( options );
		this._theme = theme;
		this._index = 0;

		const parser = new DChartAxisBaseOptionParser( theme, options );
		this._coordinateIndex = parser.coordinateIndex;
		this._padding = parser.padding;
		this._position = parser.position;
		const tick = parser.tick;
		this._tick = tick;
		this._label = parser.label;
		this._bar = parser.bar;
		this._majorTicks = new Float64Array( tick.major.count * 3 );
		this._minorTicks = new Float64Array( (tick.major.count + 1) * tick.minor.count * 3 );
	}

	get position(): DChartAxisPosition {
		return this._position;
	}

	protected updateBar( container: DChartAxisContainer ): void {
		const bar = this._bar;
		const barShape = bar.shape;
		if( barShape ) {
			const plotArea = container.plotArea;
			const plotAreaWidth = plotArea.width;
			const plotAreaHeight = plotArea.height;
			const padding = this._padding * this._index;
			barShape.disallowUploadedUpdate();
			switch( this._position ) {
			case DChartAxisPosition.TOP:
				barShape.transform.position.set( plotAreaWidth * 0.5, 0 - padding );
				barShape.size.set( plotAreaWidth, 0 );
				break;
			case DChartAxisPosition.BOTTOM:
				barShape.transform.position.set( plotAreaWidth * 0.5, plotAreaHeight + padding );
				barShape.size.set( plotAreaWidth, 0 );
				break;
			case DChartAxisPosition.LEFT:
				barShape.transform.position.set( 0 - padding, plotAreaHeight * 0.5 );
				barShape.size.set( 0, plotAreaHeight );
				break;
			case DChartAxisPosition.RIGHT:
				barShape.transform.position.set( plotAreaWidth + padding, plotAreaHeight * 0.5 );
				barShape.size.set( 0, plotAreaHeight );
				break;
			}
			barShape.allowUploadedUpdate();
		}
	}

	updateTicksX(
		domainMin: number, domainMax: number,
		coordinate: DChartCoordinate,
		majorShapes: EShapeBar[], minorShapes: EShapeBar[], gridlineShapes: EShapeBar[] | undefined,
		shapePositionY: number,
		transform: Matrix, plotAreaHeight: number
	): void {
		const tick = this._tick;
		const majorCount = tick.major.count;
		const majorFormatter = tick.major.formatter;
		const minorCountPerMajor = tick.minor.count;
		const minorCount = (majorCount + 1) * minorCountPerMajor;
		const majorTicks = this._majorTicks;
		const minorTicks = this._minorTicks;
		coordinate.ticks(
			domainMin, domainMax,
			majorCount, minorCountPerMajor, minorCount,
			majorTicks, minorTicks
		);

		const a = transform.a;
		const tx = transform.tx;
		for( let i = 0; i < majorCount; ++i ) {
			const majorShape = majorShapes[ i ];
			const imajorTick = i * 3;
			const majorTickPosition = majorTicks[ imajorTick + 0 ];
			if( ! isNaN( majorTickPosition ) ) {
				const majorTickProjectedPosition = majorTicks[ imajorTick + 1 ];
				const majotTickPositionX = a * majorTickProjectedPosition + tx;
				const majorTickStep = majorTicks[ imajorTick + 2 ];

				majorShape.disallowUploadedUpdate();
				majorShape.visible = true;
				majorShape.transform.position.set( majotTickPositionX, shapePositionY );
				majorShape.text.value = majorFormatter.format( majorTickPosition, majorTickStep );
				majorShape.allowUploadedUpdate();

				if( gridlineShapes ) {
					const gridlineShape = gridlineShapes[ i ];
					gridlineShape.disallowUploadedUpdate();
					gridlineShape.visible = true;
					gridlineShape.transform.position.set( majotTickPositionX, plotAreaHeight * 0.5 );
					gridlineShape.size.set( 0, plotAreaHeight );
					gridlineShape.allowUploadedUpdate();
				}
			} else {
				majorShape.visible = false;
				if( gridlineShapes ) {
					gridlineShapes[ i ].visible = false;
				}
			}
		}

		for( let i = 0; i < minorCount; ++i ) {
			const minorShape = minorShapes[ i ];
			const iminorTick = i * 3;
			const minorTickPosition = minorTicks[ iminorTick + 0 ];
			const minorTickProjectedPosition = minorTicks[ iminorTick + 1 ];
			if( ! isNaN( minorTickPosition ) ) {
				minorShape.disallowUploadedUpdate();
				minorShape.visible = true;
				minorShape.transform.position.set(
					a * minorTickProjectedPosition + tx,
					shapePositionY
				);
				minorShape.allowUploadedUpdate();
			} else {
				minorShape.visible = false;
			}
		}
	}

	updateTicksY(
		domainMin: number, domainMax: number,
		coordinate: DChartCoordinate,
		majorShapes: EShapeBar[], minorShapes: EShapeBar[], gridlineShapes: EShapeBar[] | undefined,
		shapePositionX: number,
		transform: Matrix, plotAreaWidth: number
	): void {
		const tick = this._tick;
		const majorCount = tick.major.count;
		const majorFormatter = tick.major.formatter;
		const minorCountPerMajor = tick.minor.count;
		const minorCount = (majorCount + 1) * minorCountPerMajor;
		const majorTicks = this._majorTicks;
		const minorTicks = this._minorTicks;
		coordinate.ticks(
			domainMin, domainMax,
			majorCount, minorCountPerMajor, minorCount,
			majorTicks, minorTicks
		);

		const d = transform.d;
		const ty = transform.ty;
		for( let i = 0; i < majorCount; ++i ) {
			const majorShape = majorShapes[ i ];
			const imajorTick = i * 3;
			const majorTickPosition = majorTicks[ imajorTick + 0 ];
			if( ! isNaN( majorTickPosition ) ) {
				const majorTickProjectedPosition = majorTicks[ imajorTick + 1 ];
				const majotTickPositionY = d * majorTickProjectedPosition + ty;
				const majorTickStep = majorTicks[ imajorTick + 2 ];

				majorShape.disallowUploadedUpdate();
				majorShape.visible = true;
				majorShape.transform.position.set( shapePositionX, majotTickPositionY );
				majorShape.text.value = majorFormatter.format( majorTickPosition, majorTickStep );
				majorShape.allowUploadedUpdate();

				if( gridlineShapes ) {
					const gridlineShape = gridlineShapes[ i ];
					gridlineShape.disallowUploadedUpdate();
					gridlineShape.visible = true;
					gridlineShape.transform.position.set( plotAreaWidth * 0.5, majotTickPositionY );
					gridlineShape.size.set( plotAreaWidth, 0 );
					gridlineShape.allowUploadedUpdate();
				}
			} else {
				majorShape.visible = false;
				if( gridlineShapes ) {
					gridlineShapes[ i ].visible = false;
				}
			}
		}

		for( let i = 0; i < minorCount; ++i ) {
			const minorShape = minorShapes[ i ];
			const iminorTick = i * 3;
			const minorTickPosition = minorTicks[ iminorTick + 0 ];
			const minorTickProjectedPosition = minorTicks[ iminorTick + 1 ];
			if( ! isNaN( minorTickPosition ) ) {
				minorShape.disallowUploadedUpdate();
				minorShape.visible = true;
				minorShape.transform.position.set(
					shapePositionX,
					d * minorTickProjectedPosition + ty
				);
				minorShape.allowUploadedUpdate();
			} else {
				minorShape.visible = false;
			}
		}
	}

	protected updateTicks( container: DChartAxisContainer ): void {
		const tick = this._tick;
		const majorShapes = tick.major.shapes;
		const minorShapes = tick.minor.shapes;
		if( majorShapes && minorShapes ) {
			const plotArea = container.plotArea;
			const bounds = plotArea.getBoundsInContainer();
			const transform = plotArea.container.transform.localTransform;
			const gridlineShapes = tick.major.gridline.shapes;

			const coordinateIndex = this._coordinateIndex;
			const padding = this._padding * this._index;
			let coordinate: DChartCoordinate | null;
			switch( this._position ) {
			case DChartAxisPosition.TOP:
				coordinate = plotArea.coordinate.x.get( coordinateIndex );
				if( coordinate ) {
					const domainFrom = coordinate.unmap(
						coordinate.transform.unmap( bounds.x )
					);
					const domainTo = coordinate.unmap(
						coordinate.transform.unmap( bounds.x + bounds.width )
					);
					const plotAreaHeight = plotArea.height;
					this.updateTicksX(
						domainFrom, domainTo,
						coordinate,
						majorShapes, minorShapes, gridlineShapes,
						0 - padding,
						transform, plotAreaHeight
					);
				}
				break;
			case DChartAxisPosition.BOTTOM:
				coordinate = plotArea.coordinate.x.get( coordinateIndex );
				if( coordinate ) {
					const domainFrom = coordinate.unmap(
						coordinate.transform.unmap( bounds.x )
					);
					const domainTo = coordinate.unmap(
						coordinate.transform.unmap( bounds.x + bounds.width )
					);
					const plotAreaHeight = plotArea.height;
					this.updateTicksX(
						domainFrom, domainTo,
						coordinate,
						majorShapes, minorShapes, gridlineShapes,
						plotAreaHeight + padding,
						transform, plotAreaHeight
					);
				}
				break;
			case DChartAxisPosition.LEFT:
				coordinate = plotArea.coordinate.y.get( coordinateIndex );
				if( coordinate ) {
					const domainFrom = coordinate.unmap(
						coordinate.transform.unmap( bounds.y )
					);
					const domainTo = coordinate.unmap(
						coordinate.transform.unmap( bounds.y + bounds.height )
					);
					const plotAreaWidth = plotArea.width;
					this.updateTicksY(
						domainFrom, domainTo,
						coordinate,
						majorShapes, minorShapes, gridlineShapes,
						0 - padding,
						transform, plotAreaWidth
					);
				}
				break;
			case DChartAxisPosition.RIGHT:
				coordinate = plotArea.coordinate.y.get( coordinateIndex );
				if( coordinate ) {
					const domainFrom = coordinate.unmap(
						coordinate.transform.unmap( bounds.y )
					);
					const domainTo = coordinate.unmap(
						coordinate.transform.unmap( bounds.y + bounds.height )
					);
					const plotAreaWidth = plotArea.width;
					this.updateTicksY(
						domainFrom, domainTo,
						coordinate,
						majorShapes, minorShapes, gridlineShapes,
						plotAreaWidth + padding,
						transform, plotAreaWidth
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
		const bar = this._bar;
		let barShape = bar.shape;
		if( ! barShape ) {
			const position = this._position;
			const barPosition = ( position === DChartAxisPosition.LEFT || position === DChartAxisPosition.RIGHT ?
				EShapeBarPosition.TOP : EShapeBarPosition.LEFT
			);
			barShape = new EShapeBar(
				barPosition,
				-1,
				EShapeDefaults.STROKE_WIDTH,
				bar.style
			);
			barShape.stroke.copy( bar.stroke );
			barShape.text.copy( this._label );
			this._bar.shape = barShape;
		}
		barShape.attach( container.container );

		// Major tick gridline
		const tick = this._tick;
		const tickMajor = tick.major;
		const gridline = tickMajor.gridline;
		let gridlineShapes = gridline.shapes;
		if( ! gridlineShapes && tick.enable && gridline.enable ) {
			gridlineShapes = [];
			gridline.shapes = gridlineShapes;
			const position = this._position;
			const gridlinePosition = ( position === DChartAxisPosition.LEFT || position === DChartAxisPosition.RIGHT ?
				EShapeBarPosition.LEFT : EShapeBarPosition.TOP
			);
			const gridlineCount = tickMajor.count;
			const gridlineStyle = gridline.style;
			for( let i = 0; i < gridlineCount; ++i ) {
				const gridlineShape = new EShapeBar(
					gridlinePosition,
					-1,
					EShapeDefaults.STROKE_WIDTH,
					gridlineStyle
				);
				gridlineShape.stroke.copy( gridline.stroke );
				gridlineShapes.push( gridlineShape );
			}
		}
		if( gridlineShapes ) {
			for( let i = 0, imax = gridlineShapes.length; i < imax; ++i ) {
				gridlineShapes[ i ].attach( tickShapeContainer );
			}
		}

		// Major ticks
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
		const barShape = this._bar.shape;
		if( barShape ) {
			barShape.detach();
		}

		// Major ticks
		const tick = this._tick;
		const tickMajorShapes = tick.major.shapes;
		if( tickMajorShapes ) {
			for( let i = 0, imax = tickMajorShapes.length; i < imax; ++i ) {
				tickMajorShapes[ i ].detach();
			}
		}

		// Major tick gridlines
		const tickMajorGridlineShapes = tick.major.gridline.shapes;
		if( tickMajorGridlineShapes ) {
			for( let i = 0, imax = tickMajorGridlineShapes.length; i < imax; ++i ) {
				tickMajorGridlineShapes[ i ].detach();
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
		const container = this._container;
		if( container ) {
			this.updateBar( container );
			this.updateTicks( container );
		}
	}

	destroy(): void {
		// Bar
		const barShape = this._bar.shape;
		if( barShape ) {
			barShape.destroy();
		}

		// Major ticks
		const tick = this._tick;
		const tickMajorShapes = tick.major.shapes;
		if( tickMajorShapes ) {
			for( let i = 0, imax = tickMajorShapes.length; i < imax; ++i ) {
				tickMajorShapes[ i ].destroy();
			}
		}

		// Major tick gridlines
		const tickMajorGridlineShapes = tick.major.gridline.shapes;
		if( tickMajorGridlineShapes ) {
			for( let i = 0, imax = tickMajorGridlineShapes.length; i < imax; ++i ) {
				tickMajorGridlineShapes[ i ].destroy();
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

	protected toTheme( options?: DChartAxisBaseOptions ): DThemeChartAxisBase {
		return ( options && options.theme ) || this.getThemeDefault();
	}

	protected getThemeDefault(): DThemeChartAxisBase {
		return DThemes.getInstance().get( this.getType() );
	}

	protected getType(): string {
		return "DChartAxisBase";
	}
}
