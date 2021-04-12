export class EShapeImageElements {
	static imageElements: {
		[src: string]: Promise<HTMLImageElement> | HTMLImageElement | undefined;
	} = {};

	static toImageElement(dataUrl: string): Promise<HTMLImageElement> {
		const imageElements = EShapeImageElements.imageElements;
		const cachedImageElement = imageElements[dataUrl];
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
					imageElements[dataUrl] = imageElement;
					resolve(imageElement);
				};
				imageElement.onabort = imageElement.onerror = () => {
					reject();
				};
				imageElement.src = dataUrl;
			});
			imageElements[dataUrl] = result;
			return result;
		}
	}
}
