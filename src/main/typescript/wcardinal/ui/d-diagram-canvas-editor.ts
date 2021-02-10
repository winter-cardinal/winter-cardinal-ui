/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DDiagramCanvasBase, DDiagramCanvasBaseOptions, DThemeDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramSerialized, DDiagramSerializedItem, DDiagramSerializedVersion } from "./d-diagram-serialized";
import { EShapeContainer } from "./shape/e-shape-container";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { ESnapper } from "./snapper/e-snapper";
import { ESnapperTargetValueType } from "./snapper/e-snapper-target-value";
import { isNumber } from "./util/is-number";

export interface DDiagramCanvasEditorOptions<
	THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor
> extends DDiagramCanvasBaseOptions<THEME> {
	snapper?: ESnapper;
}

export interface DThemeDiagramCanvasEditor extends DThemeDiagramCanvasBase {

}

export interface DDiagramCanvasEditorThumbnail {
	serialize(): string | undefined;
}

export class DDiagramCanvasEditor<
	THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor,
	OPTIONS extends DDiagramCanvasEditorOptions<THEME> = DDiagramCanvasEditorOptions<THEME>
> extends DDiagramCanvasBase<THEME, OPTIONS> {
	protected _snapper?: ESnapper;
	protected _snapperShapeContainer?: EShapeContainer;

	constructor( options: OPTIONS ) {
		super( options );

		const snapper = options.snapper;
		this._snapper = snapper;
		if( snapper ) {
			const container = new EShapeContainer();
			container.visible = false;
			this.addChildAt( container, this.children.length - 1 );
			this._snapperShapeContainer = container;

			const onSnapperChangeBound = (): void => {
				this.onSnapperChange();
			};
			snapper.grid.on( "change", onSnapperChangeBound );
			snapper.target.on( "change", onSnapperChangeBound );
		}
	}

	protected onSnapperChange(): void {
		this.toDirty();
		DApplications.update( this );
	}

	serialize( id?: number, thumbnail?: DDiagramCanvasEditorThumbnail ): DDiagramSerialized {
		const manager = new EShapeResourceManagerSerialization();
		const items: DDiagramSerializedItem[] = [];
		const background = this._background;
		const backgroundColor = background.color;
		const backgroundAlpha = background.alpha;
		return {
			version: DDiagramSerializedVersion,
			id,
			name: this.name,
			width: this.width,
			height: this.height,
			background: {
				color: isNumber( backgroundColor ) ? backgroundColor : 0xffffff,
				alpha: isNumber( backgroundAlpha ) ? backgroundAlpha : 0
			},
			tile: this._tile.serialize(),
			resources: manager.resources,
			tags: manager.tags,
			pieces: manager.pieces,
			layers: this._layer.serialize( manager, items ),
			items,
			snap: this._snapper?.serialize(),
			thumbnail: thumbnail?.serialize()
		};
	}

	onReflow(): void {
		super.onReflow();

		const snapper = this._snapper;
		const container = this._snapperShapeContainer;
		if( snapper && container ) {
			const grid = snapper.grid;
			const target = snapper.target;
			const gridVisible = grid.visible;
			const targetVisible = target.visible;

			if( gridVisible || targetVisible ) {
				const strokeColorGrid = 0x1e87f0;
				const strokeColorTarget = 0xf36f27;
				const strokeWidth = 2;
				const strokeAlphaTarget = 0.75;
				const strokeAlphaGridMinor = 0.125;
				const strokeAlphaGridMajor = 0.75;
				const width = this.width;
				const height = this.height;
				const w = width;
				const h = height;

				const shapes = container.children as EShapeBar[];
				let index = 0;

				// Grid
				if( gridVisible ) {
					const size = grid.size;
					for( let x = size, ix = 1; x < width; x += size, ix += 1, index += 1 ) {
						const strokeAlpha = ( ix % 10 === 0 ?
							strokeAlphaGridMajor : strokeAlphaGridMinor
						);
						this.setSnapperShapeX(
							container, shapes, index, x, w, h,
							strokeColorGrid, strokeAlpha, strokeWidth
						);
					}
					for( let y = size, iy = 1; y < width; y += size, iy += 1, index += 1 ) {
						const strokeAlpha = ( iy % 10 === 0 ?
							strokeAlphaGridMajor : strokeAlphaGridMinor
						);
						this.setSnapperShapeY(
							container, shapes, index, y, w, h,
							strokeColorGrid, strokeAlpha, strokeWidth
						);
					}
				}

				// Target
				if( targetVisible ) {
					const values = target.values;
					for( let i = 0, imax = values.length; i < imax; i += 1, index += 1 ) {
						const value = values[ i ];
						const valuePosition = value.position;
						if( value.type === ESnapperTargetValueType.VERTICAL ) {
							this.setSnapperShapeX(
								container, shapes, index, valuePosition, w, h,
								strokeColorTarget, strokeAlphaTarget, strokeWidth
							);
						} else {
							this.setSnapperShapeY(
								container, shapes, index, valuePosition, w, h,
								strokeColorTarget, strokeAlphaTarget, strokeWidth
							);
						}
					}
				}

				for( let i = index, imax = shapes.length; i < imax; ++i ) {
					shapes[ i ].visible = false;
				}

				container.visible = true;
			} else {
				container.visible = false;
			}
		}
	}

	protected initSnapperShape( shape: EShapeBar ): void {
		shape.fill.enable = false;
		shape.points.style = EShapePointsStyle.DASHED |
			EShapePointsStyle.NON_EXPANDING_WIDTH |
			EShapePointsStyle.NON_SHRINKING_WIDTH |
			EShapePointsStyle.NON_SCALING_DOT_AND_DASH;
	}

	protected setSnapperShapeX(
		container: EShapeContainer,
		shapes: EShapeBar[], index: number,
		x: number, w: number, h: number,
		strokeColor: number, strokeAlpha: number, strokeWidth: number
	): void {
		let shape = null;
		if( index < shapes.length ) {
			shape = shapes[ index ];
			shape.points.position = EShapeBarPosition.TOP;
		} else {
			shape = new EShapeBar( EShapeBarPosition.TOP, -1, strokeWidth );
			this.initSnapperShape( shape );
			shape.attach( container );
		}
		shape.transform.position.set( x, 0.5 * h );
		shape.stroke.set( true, strokeColor, strokeAlpha );
		shape.size.set( w, h );
	}

	protected setSnapperShapeY(
		container: EShapeContainer,
		shapes: EShapeBar[], index: number,
		y: number, w: number, h: number,
		strokeColor: number, strokeAlpha: number, strokeWidth: number
	): void {
		let shape = null;
		if( index < shapes.length ) {
			shape = shapes[ index ];
			shape.points.position = EShapeBarPosition.LEFT;
		} else {
			shape = new EShapeBar( EShapeBarPosition.LEFT, -1, strokeWidth );
			this.initSnapperShape( shape );
			shape.attach( container );
		}
		shape.transform.position.set( 0.5 * w, y );
		shape.stroke.set( true, strokeColor, strokeAlpha );
		shape.size.set( w, h );
	}

	protected getType(): string {
		return "DDiagramCanvasEditor";
	}
}
