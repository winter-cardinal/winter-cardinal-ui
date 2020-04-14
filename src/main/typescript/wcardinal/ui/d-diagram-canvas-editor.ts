/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseBackgroundOptions } from "./d-base";
import { DDiagramCanvasBase, DDiagramCanvasBaseOptions, DThemeDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramCanvasEditorBackground } from "./d-diagram-canvas-editor-background";
import { DDiagramSerialized, DDiagramSerializedItem, DDiagramSerializedVersion } from "./d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";
import { ESnapper } from "./snapper/e-snapper";
import { ESnapperTargetValueType } from "./snapper/e-snapper-target-value";
import { isNumber } from "./util/is-number";

export interface DDiagramCanvasEditorBackgroundOptions extends DBaseBackgroundOptions {
	base?: number | null;
}

export interface DDiagramCanvasEditorOptions<
	THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor
> extends DDiagramCanvasBaseOptions<THEME> {
	snapper: ESnapper;
	background?: DDiagramCanvasEditorBackgroundOptions;
}

export interface DThemeDiagramCanvasEditor extends DThemeDiagramCanvasBase {
	getBackgroundBase(): number | null;
}

export class DDiagramCanvasEditor<
	THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor,
	OPTIONS extends DDiagramCanvasEditorOptions<THEME> = DDiagramCanvasEditorOptions<THEME>
> extends DDiagramCanvasBase<THEME, OPTIONS> {
	protected _snapper: ESnapper;
	protected _snapperGraphics: Graphics;

	constructor( options: OPTIONS ) {
		super( options );

		this._background = new DDiagramCanvasEditorBackground(
			this._background,
			this.toBackgroundColorBase( this.theme, options )
		);

		this.shadow = this.theme.newShadowWeak();

		const snapperGraphics = new Graphics();
		snapperGraphics.visible = false;
		this.addChildAt( snapperGraphics, this.children.length - 1 );
		this._snapperGraphics = snapperGraphics;

		const snapper = options.snapper;
		snapper.target.on( "change", (): void => {
			this.toDirty();
			DApplications.update( this );
		});
		this._snapper = snapper;
	}

	protected toBackgroundColorBase( theme: THEME, options: OPTIONS ): number | null {
		const background = options.background;
		const backgroundBase = background && background.base;
		return ( backgroundBase != null ? backgroundBase : theme.getBackgroundBase() );
	}

	serialize( id: number | undefined ): DDiagramSerialized {
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
			snap: this._snapper.serialize()
		};
	}

	onReflow(): void {
		super.onReflow();

		const snapperGraphics = this._snapperGraphics;
		const target = this._snapper.target;
		if( target.visible ) {
			const borderColor = 0x1e87f0;
			const borderWidth = 1;
			const borderAlpha = 0.5;
			const width = this.width + 0.5;
			const height = this.height + 0.5;
			const values = target.values;
			snapperGraphics.clear();
			snapperGraphics.lineStyle( 0, 0, 0, 0 );
			snapperGraphics.beginFill( borderColor, borderAlpha );
			for( let i = 0, imax = values.length; i < imax; ++i ) {
				const value = values[ i ];
				if( value.type === ESnapperTargetValueType.VERTICAL ) {
					snapperGraphics.drawRect( value.position, 0, borderWidth, height );
				} else {
					snapperGraphics.drawRect( 0, value.position, width, borderWidth );
				}
			}
			snapperGraphics.endFill();
			snapperGraphics.visible = true;
		} else {
			snapperGraphics.visible = false;
		}
	}

	protected getType(): string {
		return "DDiagramCanvasEditor";
	}
}
