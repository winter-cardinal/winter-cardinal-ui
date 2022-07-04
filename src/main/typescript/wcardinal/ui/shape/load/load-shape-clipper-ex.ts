/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

let _isShapeClipperExLoaded: boolean = false;

export const loadShapeClipperEx = (): void => {
	_isShapeClipperExLoaded = true;
};

export const isShapeClipperExLoaded = (): boolean => {
	return _isShapeClipperExLoaded;
};
