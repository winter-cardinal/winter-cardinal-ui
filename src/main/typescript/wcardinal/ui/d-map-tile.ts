/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, Renderer, resources, Sprite, Texture } from "pixi.js";

export class DMapTile {
	tx: number;
	ty: number;

	protected _sprite: Sprite;

	constructor(parent: Container, tx: number, ty: number, px: number, py: number, scale: number) {
		this.tx = tx;
		this.ty = ty;
		const sprite = new Sprite(Texture.EMPTY);
		(sprite as any).parent = parent;
		sprite.position.set(px, py);
		sprite.scale.set(scale, scale);
		this._sprite = sprite;
	}

	load(url: string, onLoaded: () => void): void {
		const texture = Texture.from(url, { resolution: 1 });
		this._sprite.texture = texture;
		if (texture.valid) {
			onLoaded();
		} else {
			texture.on("update", onLoaded);
		}
	}

	transform(px: number, py: number, scale: number): void {
		const sprite = this._sprite;
		sprite.position.set(px, py);
		sprite.scale.set(scale, scale);
	}

	get loaded(): boolean {
		return this._sprite.texture.valid;
	}

	render(renderer: Renderer): void {
		const sprite = this._sprite;
		sprite.updateTransform();
		sprite.render(renderer);
	}

	destroy(): void {
		const sprite = this._sprite;
		const texture = sprite.texture;
		const resource = texture.baseTexture.resource;
		let image: HTMLImageElement | null = null;
		if (resource instanceof resources.BaseImageResource) {
			if (resource.source instanceof HTMLImageElement) {
				image = resource.source;
			}
		}
		texture.destroy(true);
		sprite.destroy();
		if (image) {
			image.src = "";
		}
	}
}
