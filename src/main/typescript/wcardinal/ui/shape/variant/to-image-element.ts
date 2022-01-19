/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

interface ImageElements {
	[src: string]: Promise<HTMLImageElement> | HTMLImageElement | undefined;
}

const imageElementCache: ImageElements = {};

export const toImageElement = (dataUrl: string): Promise<HTMLImageElement> => {
	const cachedImageElement = imageElementCache[dataUrl];
	if (cachedImageElement != null) {
		if (cachedImageElement instanceof HTMLImageElement) {
			return Promise.resolve(cachedImageElement);
		} else {
			return cachedImageElement;
		}
	} else {
		const result = new Promise<HTMLImageElement>((resolve, reject): void => {
			const imageElement = document.createElement("img");
			imageElement.onload = () => {
				imageElementCache[dataUrl] = imageElement;
				resolve(imageElement);
			};
			imageElement.onabort = imageElement.onerror = () => {
				reject();
			};
			imageElement.src = dataUrl;
		});
		imageElementCache[dataUrl] = result;
		return result;
	}
};
