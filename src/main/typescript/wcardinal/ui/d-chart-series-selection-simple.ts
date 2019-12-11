import { interaction, utils } from "pixi.js";
import { DBaseOnOptions } from "./d-base";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesSelection, DChartSeriesSelectionPoint } from "./d-chart-series-selection";
import {
	DChartSeriesSelectionSimpleSub, DChartSeriesSelectionSimpleSubOptions
} from "./d-chart-series-selection-simple-sub";
import { DChartSeriesSelectionSimpleSubHovered } from "./d-chart-series-selection-simple-sub-hovered";
import { DChartSeriesSelectionSimpleSubSelected } from "./d-chart-series-selection-simple-sub-selected";
import { utilIsString } from "./util/util-is-string";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DChartSeriesSelectionSimpleOptions {
	selected?: DChartSeriesSelectionSimpleSubOptions;
	hovered?: DChartSeriesSelectionSimpleSubOptions;
	point?: DChartSeriesSelectionPoint | (keyof typeof DChartSeriesSelectionPoint);
	on?: DBaseOnOptions;
}

export class DChartSeriesSelectionSimple extends utils.EventEmitter implements DChartSeriesSelection {
	protected static WORK_SELECT: DChartSeriesHitResult = new DChartSeriesHitResult();

	protected _container: DChartSeriesContainer | null;
	protected _selected: DChartSeriesSelectionSimpleSub;
	protected _hovered: DChartSeriesSelectionSimpleSub;

	protected _onClickBound!: ( e: interaction.InteractionEvent ) => void;
	protected _onMoveBound!: ( e: interaction.InteractionEvent ) => void;

	constructor( options?: DChartSeriesSelectionSimpleOptions ) {
		super();

		this._container = null;
		const point = ( options && options.point != null ?
			( utilIsString( options.point ) ? DChartSeriesSelectionPoint[ options.point ] : options.point ) :
			DChartSeriesSelectionPoint.CLOSER
		);

		this._selected = this.newSelected( point, options && options.selected );
		this._hovered = this.newHovered( point, options && options.hovered );

		// Events
		if( options ) {
			const on = options.on;
			if( on != null ) {
				for( const name in on ) {
					this.on( name, on[ name ] );
				}
			}
		}

		//
		this._onMoveBound = ( e: interaction.InteractionEvent ): void => {
			this.onMove( e );
		};

		this._onClickBound = ( e: interaction.InteractionEvent ): void => {
			this.onClick( e );
		};
	}

	protected newSelected(
		point: DChartSeriesSelectionPoint,
		options?: DChartSeriesSelectionSimpleSubOptions
	): DChartSeriesSelectionSimpleSub {
		return new DChartSeriesSelectionSimpleSubSelected( point, options );
	}

	protected newHovered(
		point: DChartSeriesSelectionPoint,
		options?: DChartSeriesSelectionSimpleSubOptions
	): DChartSeriesSelectionSimpleSub {
		return new DChartSeriesSelectionSimpleSubHovered( point, options );
	}

	protected onClick( e: interaction.InteractionEvent ): void {
		const container = this._container;
		if( container && e.target === container.plotArea.chart ) {
			const hovered = this._hovered;
			const series = hovered.series;
			const selected = this._selected;
			if( series ) {
				selected.set( series, hovered.position );
			} else {
				selected.unset();
			}
		}
	}

	protected onMove( e: interaction.InteractionEvent ): void {
		const container = this._container;
		if( container ) {
			const hovered = this._hovered;
			if( e.target === container.plotArea.chart ) {
				const result = DChartSeriesSelectionSimple.WORK_SELECT;
				const series = container.calcHitPoint( e.data.global, this.toThreshold, result );
				if( series ) {
					hovered.set( series, result );
				} else {
					hovered.unset();
				}
			} else {
				hovered.unset();
			}
		}
	}

	protected toThreshold( this: unknown, shape: unknown, threshold: number ): number {
		return Math.max( threshold * 2, 12 );
	}

	bind( container: DChartSeriesContainer ): void {
		this._container = container;
		this._selected.bind( container );
		this._hovered.bind( container );
		const chart = container.plotArea.chart;
		chart.on( UtilPointerEvent.move, this._onMoveBound );
		UtilPointerEvent.onClick( chart, this._onClickBound );
	}

	unbind(): void {
		const container = this._container;
		this._container = null;
		if( container ) {
			const chart = container.plotArea.chart;
			chart.off( UtilPointerEvent.move, this._onMoveBound );
		}

		this._selected.unbind();
		this._hovered.unbind();
	}

	get selected(): DChartSeriesSelectionSimpleSub {
		return this._selected;
	}

	get hovered(): DChartSeriesSelectionSimpleSub {
		return this._hovered;
	}

	update(): void {
		this._selected.update();
		this._hovered.update();
	}
}
