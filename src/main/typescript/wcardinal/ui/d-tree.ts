/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	EventBus
} from 'event-bus-station';
import {
	DTreeItemOptions, DTreeItem
} from "./d-tree-item";
import { DPaneOptions, DThemePane, DPane } from './d-pane';
import { DBaseOptions } from './d-base';
import { DContentOptions } from './d-content';

export interface DTreeOptions <
THEME extends DThemeTree = DThemeTree,
CONTENT_OPTIONS extends DBaseOptions = DContentOptions > extends DPaneOptions < THEME, CONTENT_OPTIONS> {
	value: Array < Object >
}

export interface DThemeTree extends DThemePane {

}


export class DTree <
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTreeOptions < THEME, CONTENT_OPTIONS > = DTreeOptions < THEME, CONTENT_OPTIONS>
	>
	extends DPane < THEME,CONTENT_OPTIONS, OPTIONS > {

		protected _itemOptions!: Array < DTreeItemOptions >
		protected _value!: any
		protected _bus!: EventBus
		protected _itemIndexMappedStart!: number
		protected _itemIndexMappedEnd!: number

		protected init(options ? : OPTIONS) {
			super.init(options)

			this._bus = new EventBus()
			this._itemOptions = []
			this._itemIndexMappedStart = 0
			this._itemIndexMappedEnd = 0

			if (options && options.value) {
				this._value = options.value
				const parentPosition: number[] = []
				this.mapped(parentPosition, this._value)
			}
			this._content.on( "move", (): void => {
				this.update();
			});
			this._content.on( "resize", (): void => {
				// this.update();
			});

			this.update()
		}

		protected update() {
			const content = this._content
			let items = []
			items = this.content.children as Array<DTreeItem>;
			const height = this.height
			const itemHeight: number = 30

			const oldItemIndexMappedStart = this._itemIndexMappedStart;
			let oldItemIndexMappedEnd = this._itemIndexMappedEnd;
			let oldItemCount = oldItemIndexMappedEnd - oldItemIndexMappedStart;

			const newHeight = this._itemOptions.length * itemHeight;

			const newContentHeight = Math.max( height, newHeight );
			const newContentY = Math.max( height - newContentHeight, content.position.y );
			content.position.y = newContentY;
			content.height = newContentHeight;

			const newItemIndexMappedLowerBound = Math.floor( (0 - newContentY) / itemHeight );
			const newItemIndexMappedUpperBound = Math.floor( (height - newContentY) / itemHeight );
			let newItemIndexMappedStart = newItemIndexMappedLowerBound - ( newItemIndexMappedLowerBound % 2 === 0 ? 2 : 1 );
			let newItemIndexMappedEnd = newItemIndexMappedUpperBound +
				((newItemIndexMappedUpperBound - newItemIndexMappedStart + 1) % 2 === 0 ? 3 : 2);
			let newItemCount = newItemIndexMappedEnd - newItemIndexMappedStart;
			if( newItemCount < oldItemCount && oldItemCount - 2 <= newItemCount ) {
				newItemCount = oldItemCount;
				newItemIndexMappedEnd = newItemIndexMappedStart + newItemCount;
			}

			//on init/resize Tree widget
			if( oldItemCount < newItemCount ) {
				for (let i = oldItemCount; i < newItemCount; ++i) {
					const treeItem = new DTreeItem(this._itemOptions[i])
					treeItem.position.y = i * itemHeight
					content.addChild(treeItem)
				}
				oldItemCount = newItemCount;
				oldItemIndexMappedEnd = oldItemIndexMappedStart + oldItemCount;
			} else if( newItemCount < oldItemCount ) {
				for( let i = oldItemCount - 1; newItemCount <= i; --i ) {
					content.removeChild( items[ i ] );
				}
				oldItemCount = newItemCount;
				oldItemIndexMappedEnd = oldItemIndexMappedStart + oldItemCount;
			}

			this._itemIndexMappedStart = newItemIndexMappedStart;
			this._itemIndexMappedEnd = newItemIndexMappedEnd;

			const itemIndexMappedStartDelta = newItemIndexMappedStart - oldItemIndexMappedStart;
			const itemIndexMappedStartDeltaAbs = Math.abs(itemIndexMappedStartDelta);
			const updateLength = Math.abs(newItemIndexMappedEnd - newItemIndexMappedStart);
			if( 0 < itemIndexMappedStartDeltaAbs && itemIndexMappedStartDeltaAbs < items.length ) {
				const work: Array<DTreeItem> = []
				if( 0 < itemIndexMappedStartDelta ) {
					//scroll down
					for( let i = 0; i < itemIndexMappedStartDeltaAbs; ++i ) {
						const treeItemOptions = this._itemOptions[oldItemIndexMappedEnd + i]
						work.push(items[i].updateItem(treeItemOptions))
					}
					for( let i = itemIndexMappedStartDeltaAbs; i < updateLength; ++i ) {
						items[ i - itemIndexMappedStartDeltaAbs ] = items[ i ];
					}
					for( let i = 0; i < itemIndexMappedStartDeltaAbs; ++i ) {
						items[ updateLength - itemIndexMappedStartDeltaAbs + i ] = work[ i ];
					}
				} else {
					//scroll up
					for( let i = 0; i < itemIndexMappedStartDeltaAbs; ++i ) {
						const treeItemOptions = (oldItemIndexMappedStart - itemIndexMappedStartDeltaAbs + i >= 0) ?
						this._itemOptions[oldItemIndexMappedStart - itemIndexMappedStartDeltaAbs + i]
						: null
						work.push(items[items.length - i - 1].updateItem(treeItemOptions))
					}
					for( let i = updateLength - itemIndexMappedStartDeltaAbs - 1; 0 <= i; --i ) {
						items[ i + itemIndexMappedStartDeltaAbs ] = items[ i ];
					}
					for( let i = 0; i < itemIndexMappedStartDeltaAbs; ++i ) {
						items[ i ] = work[ i ];
					}
				}
				//reset work array
				work.length = 0;
				//update position of all shown item
				for (let i = newItemIndexMappedStart; i < newItemIndexMappedEnd; i++) {
					if(i >= 0) {
						const itemTree = items[i - newItemIndexMappedStart]
						if(itemTree) {
							itemTree.position.y = i * itemHeight
						}
					}
				}
			}
		}
		protected mapped(parentPosition: number[], items: Array < any > ) {
			for (let i = 0; i < items.length; i++) {
				const item = items[i];
				if (item) {
					const itemPosition: number[] = parentPosition.concat([i])

					let paddingValue: number = itemPosition.length * 25
					const isParent: boolean = item.items && (item.items.length > 0)
					paddingValue = isParent ? paddingValue - 20 : paddingValue
					const itemName = item.name ? item.name : null
					this._itemOptions.push({
						itemPosition: itemPosition,
						bus: this._bus,
						text: {
							value: itemName
						},
						isParent: isParent,
						isExpand: true,
						padding: {
							left: paddingValue
						}
					})
					if (item && item.items) {
						this.mapped(itemPosition, item.items)
					}
				}
			}
		}
	}
