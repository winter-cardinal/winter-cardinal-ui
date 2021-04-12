/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, Renderer } from "pixi.js";
import { DBase } from "./d-base";
import { DMapCoordinate } from "./d-map-coordinate";
import { DMapTile } from "./d-map-tile";
import { DMapTileMappingInternal } from "./d-map-tile-mapping-internal";
import { DMapTileUrlBuilder } from "./d-map-tile-url-builder";

export class DMapTilePlane {
	protected static WORK: Point = new Point();

	protected readonly _parent: DBase;
	protected readonly _builder: DMapTileUrlBuilder;
	protected readonly _tz: number;
	protected _lon0: number;
	protected _lat0: number;
	protected _lon1: number;
	protected _lat1: number;
	protected readonly _tiles: Map<number, DMapTile>;
	protected _renderer?: Renderer;
	protected readonly _renderTileBound: (tile: DMapTile) => void;
	protected _txmin: number;
	protected _txmax: number;
	protected _tymin: number;
	protected _tymax: number;
	protected readonly _deleteTileBound: (
		tile: DMapTile,
		tileCode: number,
		tiles: Map<number, DMapTile>
	) => void;
	protected readonly _destroyTileBound: (tile: DMapTile) => void;
	protected _tileCount: number;
	protected _tileScale: number;
	protected _tileScaleRelative: number;
	protected _tileSize: number;
	protected _mapping: DMapTileMappingInternal;
	protected _coordinate: DMapCoordinate;
	protected _isLoaded: boolean;
	protected readonly _updateLoadingStateForEach: (tile: DMapTile) => void;
	protected readonly _onLoaded: () => void;
	protected readonly _onLoadedBound: () => void;
	protected _isOnLoadedCalled: boolean;
	protected _isOnLoadedAllowed: boolean;

	constructor(
		parent: DBase,
		builder: DMapTileUrlBuilder,
		tz: number,
		mapping: DMapTileMappingInternal,
		coordinate: DMapCoordinate,
		onLoaded: () => void
	) {
		this._parent = parent;
		this._builder = builder;
		this._onLoaded = onLoaded;
		this._isOnLoadedCalled = false;
		this._isOnLoadedAllowed = true;
		this._onLoadedBound = (): void => {
			this.onLoaded();
		};
		this._tz = tz;
		this._lon0 = NaN;
		this._lat0 = NaN;
		this._lon1 = NaN;
		this._lat1 = NaN;
		this._tiles = new Map<number, DMapTile>();
		this._renderTileBound = (tile: DMapTile): void => {
			this.renderTile(tile);
		};
		this._txmin = NaN;
		this._txmax = NaN;
		this._tymin = NaN;
		this._tymax = NaN;
		this._deleteTileBound = (
			tile: DMapTile,
			tileCode: number,
			tiles: Map<number, DMapTile>
		): void => {
			this.deleteTile(tile, tileCode, tiles);
		};
		this._destroyTileBound = (tile: DMapTile): void => {
			this.destroyTile(tile);
		};
		this._updateLoadingStateForEach = (tile: DMapTile): void => {
			if (!tile.loaded) {
				this._isLoaded = false;
			}
		};
		this._tileCount = coordinate.toTileCount(tz);
		this._tileScaleRelative = 1 / this._tileCount;
		this._tileScale = mapping.scale * this._tileScaleRelative;
		this._tileSize = coordinate.getTileSize() * mapping.scale;
		this._mapping = mapping;
		this._coordinate = coordinate;
		this._isLoaded = true;
	}

	protected newTile(tx: number, ty: number, px: number, py: number, scale: number): DMapTile {
		return new DMapTile(this._parent, tx, ty, px, py, scale);
	}

	protected renderTile(tile: DMapTile): void {
		tile.render(this._renderer!);
	}

	get tz(): number {
		return this._tz;
	}

	render(renderer: Renderer): void {
		this._renderer = renderer;
		this._tiles.forEach(this._renderTileBound);
	}

	move(lon0: number, lat0: number, lon1: number, lat1: number): void {
		const oldLon0 = this._lon0;
		const oldLat0 = this._lat0;
		const oldLon1 = this._lon1;
		const oldLat1 = this._lat1;
		if (oldLon0 !== lon0 || oldLat0 !== lat0 || oldLon1 !== lon1 || oldLat1 !== lat1) {
			this._lon0 = lon0;
			this._lat0 = lat0;
			this._lon1 = lon1;
			this._lat1 = lat1;

			const tz = this._tz;
			const coordinate = this._coordinate;

			const work = DMapTilePlane.WORK;
			work.set(lon0, lat0);
			coordinate.lonLatToTile(work, tz, work);
			const tx0 = work.x;
			const ty0 = work.y;

			work.set(lon1, lat1);
			coordinate.lonLatToTile(work, tz, work);
			const tx1 = work.x;
			const ty1 = work.y;

			const tileCount = this._tileCount;
			let txmin = Math.max(0, tx0);
			let txmax = Math.min(tileCount - 1, tx1);
			let tymin = Math.max(0, ty0);
			let tymax = Math.min(tileCount - 1, ty1);
			const dtxmin = txmin - this._txmin;
			const dtxmax = txmax - this._txmax;
			const dtymin = tymin - this._tymin;
			const dtymax = tymax - this._tymax;

			const isTxMinChanged = dtxmin !== dtxmin || dtxmin < 0 || 1 < dtxmin;
			const isTxMaxChanged = dtxmax !== dtxmax || 0 < dtxmax || dtxmax < -1;
			const isTyMinChanged = dtymin !== dtymin || dtymin < 0 || 1 < dtymin;
			const isTyMaxChanged = dtymax !== dtymax || 0 < dtymax || dtymax < -1;
			if (isTxMinChanged || isTxMaxChanged || isTyMinChanged || isTyMaxChanged) {
				if (isTxMinChanged) {
					this._txmin = txmin;
				} else {
					txmin = this._txmin;
				}
				if (isTxMaxChanged) {
					this._txmax = txmax;
				} else {
					txmax = this._txmax;
				}
				if (isTyMinChanged) {
					this._tymin = tymin;
				} else {
					tymin = this._tymin;
				}
				if (isTyMaxChanged) {
					this._tymax = tymax;
				} else {
					tymax = this._tymax;
				}

				const tiles = this._tiles;
				tiles.forEach(this._deleteTileBound);

				const ctx = (txmin + txmax) >> 1;
				const cty = (tymin + tymax) >> 1;
				const ltx = Math.max(ctx - txmin, txmax - ctx);
				const lty = Math.max(cty - tymin, tymax - cty);
				const lt = Math.max(ltx, lty);

				this.toOffset(work);
				const offsetX = work.x;
				const offsetY = work.y;

				this._isOnLoadedCalled = false;
				this._isOnLoadedAllowed = false;
				this.loadTile(tz, ctx, cty, offsetX, offsetY, work);
				for (let it = 1; it <= lt; ++it) {
					const txa = ctx - it;
					if (txmin <= txa) {
						this.loadTilesY(tz, txa, cty, it, tymin, tymax, offsetX, offsetY, work);
					}
					const txb = ctx + it;
					if (txb <= txmax) {
						this.loadTilesY(tz, txb, cty, it, tymin, tymax, offsetX, offsetY, work);
					}
					const tya = cty - it;
					if (tymin <= tya) {
						this.loadTilesX(tz, ctx, it - 1, txmin, txmax, tya, offsetX, offsetY, work);
					}
					const tyb = cty + it;
					if (tyb <= tymax) {
						this.loadTilesX(tz, ctx, it - 1, txmin, txmax, tyb, offsetX, offsetY, work);
					}
				}
				this._isOnLoadedAllowed = true;
				if (this._isOnLoadedCalled) {
					this.onLoaded();
				}
			}
		}
	}

	protected loadTilesX(
		tz: number,
		ctx: number,
		ltx: number,
		txmin: number,
		txmax: number,
		ty: number,
		ox: number,
		oy: number,
		work: Point
	): void {
		this.loadTile(tz, ctx, ty, ox, oy, work);
		for (let i = 1; i <= ltx; ++i) {
			const txa = ctx - i;
			if (txmin <= txa) {
				this.loadTile(tz, txa, ty, ox, oy, work);
			}
			const txb = ctx + i;
			if (txb <= txmax) {
				this.loadTile(tz, txb, ty, ox, oy, work);
			}
		}
	}

	protected loadTilesY(
		tz: number,
		tx: number,
		cty: number,
		lty: number,
		tymin: number,
		tymax: number,
		ox: number,
		oy: number,
		work: Point
	): void {
		this.loadTile(tz, tx, cty, ox, oy, work);
		for (let i = 1; i <= lty; ++i) {
			const tya = cty - i;
			if (tymin <= tya) {
				this.loadTile(tz, tx, tya, ox, oy, work);
			}
			const tyb = cty + i;
			if (tyb <= tymax) {
				this.loadTile(tz, tx, tyb, ox, oy, work);
			}
		}
	}

	protected loadTile(
		tz: number,
		tx: number,
		ty: number,
		ox: number,
		oy: number,
		work: Point
	): void {
		const coordinate = this._coordinate;
		const tileCode = coordinate.toTileCode(tz, tx, ty);
		const tiles = this._tiles;
		let tile = tiles.get(tileCode);
		if (tile == null) {
			this.toTilePosition(tx, ty, ox, oy, work);
			tile = this.newTile(tx, ty, work.x, work.y, this._tileScale);
			tiles.set(tileCode, tile);
			tile.load(this._builder(tz, tx, ty), this._onLoadedBound);
			this._isLoaded = false;
		}
	}

	protected toTilePosition(tx: number, ty: number, ox: number, oy: number, result: Point): Point {
		const tileSize = this._tileSize;
		const tileScaleRelative = this._tileScaleRelative;
		result.set(tx, ty);
		this._coordinate.tileToPixels(result, tileSize, result);
		result.set(result.x * tileScaleRelative + ox, result.y * tileScaleRelative + oy);
		return result;
	}

	protected toOffset(result: Point): Point {
		const parent = this._parent;
		const mapping = this._mapping;
		const tileSize = this._tileSize;
		result.set(
			-mapping.x * tileSize + parent.width * 0.5,
			-mapping.y * tileSize + parent.height * 0.5
		);
		return result;
	}

	protected deleteTile(tile: DMapTile, tileCode: number, tiles: Map<number, DMapTile>): void {
		const tx = tile.tx;
		const ty = tile.ty;
		if (tx < this._txmin || this._txmax < tx || ty < this._tymin || this._tymax < ty) {
			tiles.delete(tileCode);
			tile.destroy();
		}
	}

	destroy(): void {
		const tiles = this._tiles;
		tiles.forEach(this._destroyTileBound);
		tiles.clear();
	}

	protected destroyTile(tile: DMapTile): void {
		tile.destroy();
	}

	protected updateLoadingState(): void {
		this._isLoaded = true;
		this._tiles.forEach(this._updateLoadingStateForEach);
	}

	protected onLoaded(): void {
		if (this._isOnLoadedAllowed) {
			this._onLoaded();
		} else {
			this._isOnLoadedCalled = true;
		}
	}

	get loaded(): boolean {
		if (!this._isLoaded) {
			this.updateLoadingState();
		}
		return this._isLoaded;
	}

	get mapping(): DMapTileMappingInternal {
		return this._mapping;
	}

	set mapping(mapping: DMapTileMappingInternal) {
		const coordinate = this._coordinate;
		const tileScale = mapping.scale * this._tileScaleRelative;
		const tileSize = coordinate.getTileSize() * mapping.scale;
		this._tileScale = tileScale;
		this._tileSize = tileSize;
		this._mapping = mapping;

		const work = DMapTilePlane.WORK;
		this.toOffset(work);
		const offsetX = work.x;
		const offsetY = work.y;

		this._tiles.forEach((tile: DMapTile): void => {
			this.toTilePosition(tile.tx, tile.ty, offsetX, offsetY, work);
			tile.transform(work.x, work.y, tileScale);
		});
	}
}
