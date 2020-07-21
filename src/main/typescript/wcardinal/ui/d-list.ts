/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, interaction } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DBase, DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DListSelection, DListSelectionOptions } from "./d-list-selection";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DListOptions<
	THEME extends DThemeList = DThemeList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
	selection?: DListSelectionOptions | DListSelection;
}

export interface DThemeList extends DThemePane {

}

export class DList<
	THEME extends DThemeList = DThemeList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DListOptions<THEME, CONTENT_OPTIONS> = DListOptions<THEME, CONTENT_OPTIONS>
> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
	protected _selection!: DListSelection;

	protected init( options?: OPTIONS ) {
		super.init( options );

		const selection = options && options.selection;
		this._selection = ( selection instanceof DListSelection ?
			selection : this.newSelection( selection )
		);

		UtilPointerEvent.onClick( this, ( e: InteractionEvent ): void => {
			const child: DisplayObject | null = this.findItem( e.target );
			if( child instanceof DBase && child.state.isActionable ) {
				this.selection.add( child );
			}
		});
	}

	protected newSelection( options?: DListSelectionOptions ): DListSelection {
		return new DListSelection( this._content, options );
	}

	protected onChildrenDirty(): void {
		const selection = this._selection;
		if( selection != null ) {
			selection.toDirty();
		}
		super.onChildrenDirty();
	}

	get selection(): DListSelection {
		return this._selection;
	}

	protected findItem( target: DisplayObject | null ): DisplayObject | null {
		const content = this.content;
		let current = target;
		while( current != null ) {
			if( current.parent === content ) {
				return current;
			}
			current = current.parent;
		}
		return null;
	}

	onRefit(): void {
		super.onRefit();
		this.updateChildPosition();
		this.updateChildVisibility();
	}

	protected updateChildPosition(): void {
		const content = this.content;
		const items = content.children;
		let y = 0;
		for( let i = 0, imax = items.length; i < imax; ++i ) {
			const item = items[ i ];
			if( item instanceof DBase ) {
				item.y = y;
				y += item.height;
			}
		}
		const scrollLimit = Math.min( 0, -y + this.height );
		if( content.y < scrollLimit ) {
			content.y = scrollLimit;
		}
		content.height = y;
	}

	protected updateChildVisibility(): void {
		const content = this.content;
		const items = content.children;
		const from = -content.y;
		const to = from + this.height;
		for( let i = 0, imax = items.length; i < imax; ++i ) {
			const item = items[ i ];
			if( item instanceof DBase ) {
				const itemY = item.y;
				item.visible = ( from <= itemY + item.height && itemY <= to );
			}
		}
	}

	protected onContentChanged(): void {
		super.onContentChanged();
		this.updateChildVisibility();
	}

	protected getType(): string {
		return "DList";
	}
}
