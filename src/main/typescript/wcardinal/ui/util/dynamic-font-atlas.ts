/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { MIPMAP_MODES, SCALE_MODES, Texture } from "pixi.js";
import { ASCII_CHARACTERS } from "./ascii";
import { DynamicFontAtlasCharacter } from "./dynamic-font-atlas-character";
import { DynamicFontAtlasCharacters } from "./dynamic-font-atlas-characters";
import { DynamicFontAtlasFont } from "./dynamic-font-atlas-font";
import { UtilCharacterIterator } from "./util-character-iterator";

const PADDING = 3;

export class DynamicFontAtlas {
	protected _id: string;
	protected _canvas: HTMLCanvasElement | null;
	protected _context: CanvasRenderingContext2D | null;
	protected _font: DynamicFontAtlasFont;
	protected _characters: DynamicFontAtlasCharacters;
	protected _length: number;
	protected _unrefCount: number;
	protected _width: number;
	protected _height: number;
	protected _revision: number;
	protected _revisionUpdated: number;
	protected _texture: Texture;

	constructor( fontId: string, fontSize: number, fontColor: number, resolution: number ) {
		this._id = fontId;
		this._canvas = document.createElement( "canvas" );
		this._context = null;
		this._font = new DynamicFontAtlasFont( fontId, fontSize, fontColor, PADDING );
		this._characters = {};
		this._length = 0;
		this._unrefCount = 0;
		this._width = 1;
		this._height = 1;
		this._revision = 0;
		this._revisionUpdated = 0;
		this._texture = Texture.from( this._canvas, {
			mipmap: MIPMAP_MODES.OFF,
			resolution,
			scaleMode: SCALE_MODES.NEAREST
		});

		this.add( ASCII_CHARACTERS, true );
		this.add_( "...", this._characters, true );
	}

	get id() {
		return this._id;
	}

	get font(): DynamicFontAtlasFont {
		return this._font;
	}

	get width(): number {
		return this._width;
	}

	get height(): number {
		return this._height;
	}

	get canvas(): HTMLCanvasElement | null {
		return this._canvas;
	}

	get characters(): DynamicFontAtlasCharacters {
		return this._characters;
	}

	get texture(): Texture {
		return this._texture;
	}

	protected add_( character: string, characters: DynamicFontAtlasCharacters, reserved?: boolean ): void {
		if( character !== "\n" ) {
			const data = characters[ character ];
			if( data != null ) {
				if( ! data.reserved ) {
					if( data.ref === 0 ) {
						this._unrefCount -= 1;
					}
					data.ref += 1;
				}
			} else {
				const advance = this.getAdvance( character );
				const width = Math.ceil( PADDING + advance + PADDING );
				const height = this.font.height;
				characters[ character ] = new DynamicFontAtlasCharacter( advance, width, height, !! reserved );
				this._length += 1;
				this._revision += 1;
			}
		}
	}

	protected remove_( character: string, characters: DynamicFontAtlasCharacters ): void {
		if( character !== "\n" ) {
			const data = characters[ character ];
			if( data != null ) {
				if( ! data.reserved && 0 < data.ref ) {
					data.ref -= 1;
					if( data.ref === 0 ) {
						this._unrefCount += 1;
					}
				}
			}
		}
	}

	protected cleanup_(): void {
		if( (this._length >> 1) <= this._unrefCount ) {
			const characters = this._characters;
			for( const character in characters ) {
				if( characters[ character ].ref <= 0 ) {
					delete characters[ character ];
				}
			}
			this._length -= this._unrefCount;
			this._revision += 1;
			this._unrefCount = 0;
		}
	}

	add( targets: string, reserved?: boolean ): void {
		const characters = this._characters;
		const iterator = UtilCharacterIterator.from( targets );
		while( iterator.hasNext() ) {
			this.add_( iterator.next(), characters, reserved );
		}
	}

	remove( targets: string ): void {
		const characters = this._characters;
		const iterator = UtilCharacterIterator.from( targets );
		while( iterator.hasNext() ) {
			this.remove_( iterator.next(), characters );
		}
	}

	get( character: string ): DynamicFontAtlasCharacter | undefined {
		return this._characters[ character ];
	}

	getAdvance( target: string ): number {
		const context = this.getContext();
		if( context != null ) {
			return context.measureText( target ).width;
		}
		return 0;
	}

	getContext(): CanvasRenderingContext2D | null {
		let context = this._context;
		if( context == null ) {
			const canvas = this._canvas;
			if( canvas != null ) {
				context = this._context = canvas.getContext( "2d", { alpha: true } );
				if( context == null ) {
					return null;
				}
			} else {
				return null;
			}
		}

		const font = this._font;
		if( context.font !== font.id ) {
			context.font = font.id;
			font.id = context.font;
			context.textAlign = "left";
			context.textBaseline = "alphabetic";
			context.lineWidth = 0;
			context.lineCap = "round";
			context.lineJoin = "miter";
			context.miterLimit = 0;
			context.fillStyle = font.color;
			context.strokeStyle = "#0000ff";
		}
		return context;
	}

	update(): boolean {
		this.cleanup_();

		if( this._revisionUpdated < this._revision ) {
			this._revisionUpdated = this._revision;

			const canvas = this._canvas;
			if( canvas != null ) {
				const font = this._font;
				const fontHeight = font.height;
				const characters = this._characters;
				const width = this._width = this.toPowerOf2( Math.ceil( Math.sqrt( this._length ) ) * fontHeight );

				const offsetX = PADDING;
				const offsetY = Math.round( (fontHeight - (font.ascent + font.descent)) * 0.5 + font.ascent );
				let x = 0;
				let y = 0;
				for( const key in characters ) {
					const character = characters[ key ];
					if( width <= x + character.width ) {
						x = 0;
						y += fontHeight;
					}

					character.x = x;
					character.y = y;
					character.origin.x = x + offsetX;
					character.origin.y = y + offsetY;

					x += character.width;
				}
				const height = this._height = y + fontHeight;

				// Make a input canvas
				// Here, we need to reset the context because
				// context settings will be lost when we set the width/height.
				const baseTexture = this._texture.baseTexture;
				const resolution = baseTexture.resolution;
				const realWidth = Math.ceil( width * resolution );
				const realHeight = Math.ceil( height * resolution );
				canvas.width = realWidth;
				canvas.height = realHeight;
				const context = this.getContext();
				if( context != null ) {
					context.save();
					context.scale( resolution, resolution );
					context.clearRect( 0, 0, width, height );
					for( const key in characters ) {
						const character = characters[ key ];
						context.fillText( key, character.origin.x, character.origin.y );
					}
					context.restore();
				}
				baseTexture.setRealSize( realWidth, realHeight );

				return true;
			}
		}
		return false;
	}

	getRevision(): number {
		return this._revision;
	}

	getRevisionUpdate(): number {
		return this._revisionUpdated;
	}

	get length(): number {
		return this._length;
	}

	destroy() {
		const canvas = this._canvas;
		if( canvas != null ) {
			this._canvas = null;
		}

		const characters = this._characters;
		for( const character in characters ) {
			delete characters[ character ];
		}
	}

	toPowerOf2( size: number ): number {
		let result = 32;
		while( result < size ) {
			result <<= 1;
		}
		return result;
	}
}
