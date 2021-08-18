/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture, TextureUvs } from "pixi.js";
import { EShape } from "../e-shape";

export const toTransformLocalId = (shape: EShape): number => {
	shape.updateTransform();
	return shape.transform.getLocalId();
};

export const toTexture = (shape: EShape): Texture => {
	return shape.texture || Texture.WHITE;
};

export const toTextureTransformId = (texture: Texture): number => {
	const textureAny = texture as any;
	if (textureAny._uvs == null) {
		texture.updateUvs();
	}
	return textureAny._updateID;
};

export const toTextureUvs = (texture: Texture): TextureUvs => {
	return (texture as any)._uvs;
};
