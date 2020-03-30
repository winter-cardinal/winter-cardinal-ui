/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DisplayObject, interaction, Texture } from "pixi.js";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DTreeItemRawData } from "./d-tree";
import { DTreeItemState } from "./d-tree-item-state";
import { DTreeItemTextAndImage } from "./d-tree-item-text-and-image";
import { DTreeItemToggleIcon} from "./d-tree-item-toggle-icon";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTreeItemOptions<
	THEME extends DThemeTreeItem = DThemeTreeItem
> extends DLayoutHorizontalOptions <THEME> {
	text: string;
	isParent: boolean;
	expanded: boolean;
	rawData: DTreeItemRawData;
	y: number;
	level: number;
	showable?: boolean;
	image?: DisplayObject | Texture | null;
}

export interface DThemeTreeItem extends DThemeLayoutHorizontal {
	getPaddingByLevel( level: number ): number;
}

const toText = ( options?: DTreeItemOptions ): string => {
	if ( options ) {
		return options.text;
	}
	return "";
};

const isParent = ( options?: DTreeItemOptions ): boolean => {
	return !! ( options && options.isParent );
};

const isExpanded = ( options?: DTreeItemOptions ): boolean => {
	return !! ( options && options.expanded );
};

const toImage = ( options?: DTreeItemOptions ): DisplayObject | Texture | null => {
	return options && options.image ? options.image : null;
};

const toYCoordinate = ( options?: DTreeItemOptions ): number => {
	return options ? options.y : 0;
};

const toRawData = ( options?: DTreeItemOptions ): DTreeItemRawData => {
	return options ? options.rawData : {
		text: "",
		children: []
	};
};

const toPaddingLeft = <THEME extends DThemeTreeItem>(
	theme: DThemeTreeItem,
	options?: DTreeItemOptions<THEME>
): number => {
	const level = options ? options.level : 0;
	return theme.getPaddingByLevel( level );
};

const toTreeItemTextAndImage = ( options?: DTreeItemOptions ): DTreeItemTextAndImage => {
	return new DTreeItemTextAndImage({
		text: {
			value: toText( options )
		},
		image: {
			source: toImage( options )
		}
	});
};

export class DTreeItem<
	THEME extends DThemeTreeItem = DThemeTreeItem,
	OPTIONS extends DTreeItemOptions <THEME> = DTreeItemOptions <THEME>
> extends DLayoutHorizontal < THEME, OPTIONS > {
	protected _isParent!: boolean;
	protected _isExpanded!: boolean;
	protected _rawData!: DTreeItemRawData;
	protected _textAndImage!: DTreeItemTextAndImage;
	protected _icon!: DTreeItemToggleIcon;

	protected init( options ?: OPTIONS ) {
		super.init( options );
		// get isParent option
		this._isParent = isParent( options );
		// get isExpand option
		this._isExpanded = isExpanded( options );
		// get raw data
		this._rawData = toRawData( options );

		this._icon = new DTreeItemToggleIcon();
		this._textAndImage = toTreeItemTextAndImage( options );

		this.addChild( this._icon );
		this.addChild( this._textAndImage );

		this._icon.on( UtilPointerEvent.down, (): void => {
			this.onToggle();
		});
		this._textAndImage.on( UtilPointerEvent.down, ( e: interaction.InteractionEvent ): void => {
			this.onSelect( e );
		});

		// update states
		this.updateStates( false );
	}

	protected onSelect( e: interaction.InteractionEvent ): void {
		this.emit( "select", e );
	}

	public onToggle(): void {
		this.emit( "toggle" );
	}

	public isExpanded(): boolean {
		return this._isExpanded;
	}

	public isParent(): boolean {
		return this._isParent;
	}

	public getRawData(): DTreeItemRawData {
		return this._rawData;
	}

	public update( options: OPTIONS, isActive: boolean ) {
		this._textAndImage.text = toText( options );
		this._textAndImage.image = toImage( options );
		this._rawData = toRawData( options );
		this._padding.left = toPaddingLeft( this.theme, options );
		this.position.y = toYCoordinate( options );
		this._isParent = isParent( options );
		this._isExpanded = isExpanded( options );
		this.updateStates( isActive );
		return this;
	}

	public updateActiveState( isActive: boolean ) {
		this.setActive( isActive );
		this._icon.setState( DTreeItemState.SELECTED, isActive );
		this._textAndImage.setState( DTreeItemState.SELECTED, isActive );
	}

	protected updateStates( isActive: boolean ): void {
		this.updateActiveState( isActive );
		this._icon.setState( DTreeItemState.COLLAPSED, !this._isExpanded && this._isParent );
		this._icon.setState( DTreeItemState.EXPANDED, !!this._isExpanded && this._isParent );
	}

	protected getType(): string {
		return "DTreeItem";
	}
}
