/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, Renderer, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DMapCoordinate } from "./d-map-coordinate";
import { DMapTileMapping } from "./d-map-tile-mapping";
import { DMapTileMappingInternal } from "./d-map-tile-mapping-internal";
import { DMapTilePlane } from "./d-map-tile-plane";
import { DMapTilePyramid, DMapTilePyramidOptions } from "./d-map-tile-pyramid";
import { DMapTileUrlBuilder } from "./d-map-tile-url-builder";

export class DMapTilePyramidImpl extends utils.EventEmitter implements DMapTilePyramid {
	protected static WORK_LONLAT: Point = new Point();

	protected readonly _canvas: DBase;
	protected readonly _builder: DMapTileUrlBuilder;
	protected readonly _planes: Array<DMapTilePlane | undefined>;
	protected _z: number;
	protected _tz: number;
	protected _minZ: number;
	protected _maxZ: number;
	protected _mapping: DMapTileMapping;
	protected _mappingInternal: DMapTileMappingInternal;
	protected _coordinate: DMapCoordinate;
	protected _onLoadedBound: () => void;
	protected _fitBound: () => void;
	protected _fitBoundTimeout: number | undefined;
	protected _fitThrottledBound: () => void;
	protected _fitThrottle: number;

	constructor( options: DMapTilePyramidOptions ) {
		super();
		const canvas = this._canvas = options.canvas;
		this._builder = options.builder;
		const mappingLonLat = this._mapping = options.mapping;
		const coordinate = this._coordinate = options.coordinate;
		this._mappingInternal = this.toMapping( canvas, mappingLonLat, coordinate );
		this._z = NaN;
		this._tz = NaN;
		this._minZ = options.plane.min;
		this._maxZ = options.plane.max;
		this._planes = [];
		this._onLoadedBound = (): void => {
			this.onLoaded();
		};
		this._fitBound = (): void => {
			this._fitBoundTimeout = undefined;
			this.fit();
		};
		this._fitThrottle = options.plane.throttle;
		const fitThrottledBound = this._fitThrottledBound = (): void => {
			this.fitThrottled();
		};
		canvas.on( "scale", fitThrottledBound );
		canvas.on( "move", fitThrottledBound );
		canvas.appendRenderable( this, true );
	}

	get coordinate(): DMapCoordinate {
		return this._coordinate;
	}

	protected fitThrottled(): void {
		if( this._fitBoundTimeout == null ) {
			this._fitBoundTimeout = window.setTimeout( this._fitBound, this._fitThrottle );
		}
	}

	protected toMapping( canvas: DBase, mapping: DMapTileMapping, coordinate: DMapCoordinate ): DMapTileMappingInternal {
		const work = DMapTilePyramidImpl.WORK_LONLAT;
		const tileSize = coordinate.getTileSize();

		work.set( mapping.from.lon, mapping.from.lat );
		coordinate.lonLatToPixels( work, 0, tileSize, work );
		const x0 = work.x;
		const y0 = work.y;

		work.set( mapping.to.lon, mapping.to.lat );
		coordinate.lonLatToPixels( work, 0, tileSize, work );
		const x1 = work.x;
		const y1 = work.y;

		const dx = Math.abs(x1 - x0);
		const dy = Math.abs(y1 - y0);
		const dmin = 0.0000001;
		let scale = 1;
		if( dmin < dx ) {
			if( dmin < dy ) {
				scale = Math.max( canvas.width / dx, canvas.height / dy );
			} else {
				scale = canvas.width / dx;
			}
		} else {
			if( dmin < dy ) {
				scale = canvas.height / dy;
			}
		}
		return {
			scale,
			x: 0.5 * (x1 + x0) / tileSize,
			y: 0.5 * (y1 + y0) / tileSize
		};
	}

	get mapping(): DMapTileMapping {
		return this._mapping;
	}

	set mapping( mapping: DMapTileMapping ) {
		const oldMapping = this._mappingInternal;
		const newMapping = this.toMapping( this._canvas, mapping, this._coordinate );
		const threshold = 0.0000001;
		if(
			threshold < Math.abs(oldMapping.scale - newMapping.scale) ||
			threshold < Math.abs(oldMapping.x - newMapping.x) ||
			threshold < Math.abs(oldMapping.y - newMapping.y)
		) {
			this._mappingInternal = newMapping;

			const planes = this._planes;
			for( let i = 0, imax = planes.length; i < imax; ++i ) {
				const plane = planes[ i ];
				if( plane ) {
					plane.mapping = newMapping;
				}
			}
			DApplications.update();

			this._fitThrottledBound();
		}
	}

	protected newPlane( tz: number ): DMapTilePlane {
		return new DMapTilePlane(
			this._canvas,
			this._builder,
			tz,
			this._mappingInternal,
			this._coordinate,
			this._onLoadedBound
		);
	}

	render( renderer: Renderer ): void {
		const tz = this._tz;
		const planes = this._planes;
		for( let i = 0; i < tz; ++i ) {
			const plane = planes[ i ];
			if( plane != null ) {
				plane.render( renderer );
			}
		}

		for( let i = planes.length - 1; tz < i; --i ) {
			const plane = planes[ i ];
			if( plane != null ) {
				plane.render( renderer );
			}
		}

		const planeTz = planes[ tz ];
		if( planeTz != null ) {
			planeTz.render( renderer );
		}
	}

	protected toTileZ( tz: number ): number {
		return Math.min( this._maxZ, Math.max( this._minZ, Math.floor( tz ) ) );
	}

	updateTransform(): void {
		// DO NOTHING
	}

	protected toZ( scale: number ): number {
		return Math.log( this._mappingInternal.scale * scale ) / Math.log( 2 );
	}

	move( scale: number, lon0: number, lat0: number, lon1: number, lat1: number ): this {
		const planes = this._planes;
		const z = this.toZ( scale );
		if( this._z !== z ) {
			this._z = z;

			const tz = this.toTileZ( z );
			if( this._tz !== tz ) {
				this._tz = tz;

				let newPlane = planes[ tz ];
				if( newPlane == null ) {
					newPlane = this.newPlane( tz );
					planes[ tz ] = newPlane;
				}
			}
		}

		const plane = planes[ this._tz ];
		if( plane != null ) {
			plane.move( lon0, lat0, lon1, lat1 );
		}

		return this;
	}

	fit(): this {
		const canvas = this._canvas;
		if( canvas != null ) {
			const container = canvas.parent;
			if( container != null ) {
				const scale = canvas.scale;
				const scaleX = scale.x;
				const scaleY = scale.y;
				const x = canvas.x;
				const y = canvas.y;
				const coordinate = this._coordinate;
				const mapping = this._mappingInternal;
				const tileSize = coordinate.getTileSize() * mapping.scale;
				const x0 = mapping.x * tileSize - (x / scaleX + 0.5 * canvas.width);
				const x1 = x0 + container.width / scaleX;
				const y0 = mapping.y * tileSize - (y / scaleY + 0.5 * canvas.height);
				const y1 = y0 + container.height / scaleY;

				const work = DMapTilePyramidImpl.WORK_LONLAT;
				work.set( x0, y0 );
				coordinate.pixelsToLonLat( work, 0, tileSize, work );
				const lon0 = work.x;
				const lat0 = work.y;

				work.set( x1, y1 );
				coordinate.pixelsToLonLat( work, 0, tileSize, work );
				const lon1 = work.x;
				const lat1 = work.y;

				this.move( scaleX, lon0, lat0, lon1, lat1 );
			}
		}

		return this;
	}

	protected destroyPlanesBefore( tz: number, planes: Array<DMapTilePlane | undefined> ): void {
		for( let i = 0; i < tz; ++i ) {
			const plane = planes[ i ];
			if( plane ) {
				plane.destroy();
				planes[ i ] = undefined;
			}
		}
	}

	protected destroyPlanesAfter( tz: number, planes: Array<DMapTilePlane | undefined> ): void {
		for( let i = tz + 1, imax = planes.length; i < imax; ++i ) {
			const plane = planes[ i ];
			if( plane ) {
				plane.destroy();
				planes[ i ] = undefined;
			}
		}
	}

	protected cleanup(): void {
		const tz = this._tz;
		const planes = this._planes;
		const planeTz = planes[ tz ];
		if( planeTz && planeTz.loaded ) {
			this.destroyPlanesBefore( tz, planes );
			this.destroyPlanesAfter( tz, planes );
			return;
		}

		for( let i = tz + 1, imax = planes.length; i < imax; ++i ) {
			const plane = planes[ i ];
			if( plane && plane.loaded ) {
				this.destroyPlanesBefore( tz, planes );
				this.destroyPlanesAfter( i, planes );
				return;
			}
		}

		for( let i = tz - 1; 0 <= i; --i ) {
			const plane = planes[ i ];
			if( plane && plane.loaded ) {
				this.destroyPlanesBefore( i, planes );
				return;
			}
		}
	}

	protected onLoaded(): void {
		this.cleanup();
		DApplications.update();
	}

	destroy(): this {
		const planes = this._planes;
		for( let i = 0, imax = planes.length; i < imax; ++i ) {
			const plane = planes[ i ];
			if( plane ) {
				plane.destroy();
				planes[ i ] = undefined;
			}
		}

		const canvas = this._canvas;
		const fitThrottledBound = this._fitThrottledBound;
		canvas.off( "scale", fitThrottledBound );
		canvas.off( "move", fitThrottledBound );
		canvas.removeRenderable( this, true );

		return this;
	}
}
