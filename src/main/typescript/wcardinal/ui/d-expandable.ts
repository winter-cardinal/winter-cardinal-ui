/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, DisplayObject } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DBaseStates } from "./d-base-states";
import { DExpandableHeader, DExpandableHeaderOptions } from "./d-expandable-header";
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";

export interface DExpandableOptions<
	THEME extends DThemeExpandable = DThemeExpandable
> extends DLayoutVerticalOptions<THEME> {
	header?: DisplayObject | DExpandableHeaderOptions;
	body: Container;
}

export interface DThemeExpandable extends DThemeLayoutVertical {

}

export class DExpandable<
	THEME extends DThemeExpandable = DThemeExpandable,
	OPTIONS extends DExpandableOptions<THEME> = DExpandableOptions<THEME>
> extends DLayoutVertical<THEME, OPTIONS> {
	protected _header!: DisplayObject;
	protected _body!: Container;

	protected init( options: OPTIONS ) {
		super.init( options );

		// Header
		const theme = this.theme;
		const header = this.toHeader( theme, options );
		this._header = header;
		header.on( "select", (): void => {
			this.toggle();
		});
		this.addChild( header );

		// Body
		const body = this.toBody( theme, options );
		this._body = body;
		this.addChild( body );

		//
		if( this.isActive() ) {
			this.onActivated();
		} else {
			this.onDeactivated();
		}
	}

	protected toHeader( theme: THEME, options?: OPTIONS ): DisplayObject {
		if( options && options.header ) {
			if( options.header instanceof DisplayObject ) {
				return options.header;
			} else {
				return this.newHeader( theme, options.header );
			}
		}
		return this.newHeader( theme );
	}

	protected newHeader( theme: THEME, options?: DExpandableHeaderOptions ): DisplayObject {
		return new DExpandableHeader( options );
	}

	protected toBody( theme: THEME,  options: OPTIONS ): Container {
		return options.body;
	}

	open(): void {
		this.setActive( true );
	}

	close(): void {
		this.setActive( false );
	}

	toggle(): void {
		this.setActive( ! this.isActive() );
	}

	protected onActivated(): void {
		const body = this._body;
		if( body instanceof DBase ) {
			body.show();
		} else {
			body.visible = true;
		}
	}

	protected onDeactivated(): void {
		const body = this._body;
		if( body instanceof DBase ) {
			body.hide();
		} else {
			body.visible = false;
		}
	}

	protected onStateChange( newState: DBaseState, oldState: DBaseState ): void {
		super.onStateChange( newState, oldState );

		if( DBaseStates.isActive( newState ) ) {
			if( ! DBaseStates.isActive( oldState ) ) {
				this.onActivated();
			}
		} else {
			if( DBaseStates.isActive( oldState ) ) {
				this.onDeactivated();
			}
		}
	}

	protected getType(): string {
		return "DExpandable";
	}
}
