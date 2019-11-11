import { Container, Renderer } from "pixi.js";
import { DApplicationLayer } from "./d-application-layer";
import { DApplicationLayerOptions } from "./d-application-layer-options";
import { DApplicationLike } from "./d-application-like";
import { DApplications } from "./d-applications";
import { utilIsString } from "./util";

export interface DApplicationOptions {
	/**
	 * A root element selector or a root element.
	 * `HTMLCanvasElement` and other DOM elements are created in this element.
	 * The default root element is `document.body`.
	 */
	root?: string | HTMLElement;

	/**
	 * Padding settings.
	 */
	padding?: number | {
		top?: number;
		right?: number;
		bottom?: number;
		left?: number;
	};

	/**
	 * A canvas width.
	 */
	width?: number;

	/**
	 * A canvas height.
	 */
	height?: number;

	/**
	 * A background setting.
	 */
	background?: {
		color?: number;
	};

	/**
	 * An antialias setting.
	 */
	antialias?: boolean;

	/**
	 * A resolution.
	 * The default value is `devicePixelRatio`.
	 */
	resolution?: number;

	/**
	 * An overlay layer setting.
	 * The overlay layer is used by modal UI elements including DDialog
	 * to provide the better interoperability with DOM-based UI elements
	 * and WebGL-based UI elements.
	 * However, an extra layer requires extra memory.
	 * Set to true to enable the overlay layer.
	 * The default value is false.
	 */
	overlay?: boolean;
}

export class DApplication implements DApplicationLike {
	protected _options?: DApplicationOptions;
	protected _root: HTMLElement;
	protected _base: DApplicationLayer;
	protected _overlay?: DApplicationLayer;
	protected _resolution: number;
	protected _isOverlayEnabled: boolean;

	constructor( options?: DApplicationOptions ) {
		DApplications.add( this );

		// Root
		this._root = this.toRootElement( options );

		// Resolution
		const resolution = ( options && options.resolution != null ?
			options.resolution : (window.devicePixelRatio || 1)
		);
		this._resolution = resolution;

		// Remove the accessibility plugin
		delete (Renderer as any).__plugins.accessibility;

		// Options
		this._options = options;

		// Base layer
		const base = this._base = this.newLayerBase( options );

		// Overlay layer
		this._isOverlayEnabled = !! ( options && options.overlay );
		if( ! this._isOverlayEnabled ) {
			this._overlay = base;
		}
	}

	get stage(): Container {
		return this._base.stage;
	}

	getRootElement(): HTMLElement {
		return this._root;
	}

	getResolution(): number {
		return this._resolution;
	}

	protected toRootElement( options?: DApplicationOptions ): HTMLElement {
		const root = options && options.root;
		if( root != null ) {
			if( utilIsString( root ) ) {
				const found = document.querySelector<HTMLElement>( root );
				if( found ) {
					return found;
				}
			} else {
				return root;
			}
		}
		return document.body;
	}

	protected toLayerBaseOptions( options?: DApplicationOptions ): DApplicationLayerOptions {
		const root = this._root;
		const resolution = this._resolution;
		if( options ) {
			return new DApplicationLayerOptions({
				root,
				padding: options.padding,
				width: options.width,
				height: options.height,
				background: options.background,
				resolution,
				antialias: options.antialias,
				overlay: false
			});
		}
		return new DApplicationLayerOptions({
			root,
			resolution,
			overlay: false
		});
	}

	protected newLayerBase( options?: DApplicationOptions ): DApplicationLayer {
		return new DApplicationLayer( this, this.toLayerBaseOptions( options ) );
	}

	getLayerBase(): DApplicationLayer {
		return  this._base;
	}

	protected toLayerOverlayOptions( options?: DApplicationOptions ): DApplicationLayerOptions {
		const root = this._root;
		const resolution = this._resolution;
		if( options ) {
			return new DApplicationLayerOptions({
				root,
				padding: options.padding,
				width: options.width,
				height: options.height,
				background: {
					color: null
				},
				resolution,
				antialias: options.antialias,
				overlay: true
			});
		}
		return new DApplicationLayerOptions({
			root,
			resolution,
			overlay: true
		});
	}

	protected newLayerOverlay( options?: DApplicationOptions ): DApplicationLayer {
		return new DApplicationLayer( this, this.toLayerOverlayOptions( options ) );
	}

	getLayerOverlay(): DApplicationLayer {
		if( this._isOverlayEnabled ) {
			if( this._overlay == null ) {
				this._overlay = this.newLayerOverlay( this._options );
			}
			return this._overlay;
		} else {
			return this._base;
		}
	}

	update(): void {
		if( this._isOverlayEnabled ) {
			const base = this._base;
			base.update();

			const overlay = this._overlay;
			if( overlay ) {
				overlay.update();
			}
		} else {
			return this._base.update();
		}
	}

	render(): void {
		if( this._isOverlayEnabled ) {
			const base = this._base;
			base.render();

			const overlay = this._overlay;
			if( overlay ) {
				overlay.render();
			}
		} else {
			return this._base.render();
		}
	}
}
