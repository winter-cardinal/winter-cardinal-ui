export class UtilExtractorCanvas {
	protected _element: HTMLCanvasElement | null;
	protected _context: CanvasRenderingContext2D | null;

	constructor(width: number, height: number) {
		const element = document.createElement("canvas");
		this._element = element;
		const context = this._element.getContext("2d", {
			willReadFrequently: true
		});
		this._context = context;
		element.width = width;
		element.height = height;
	}

	get element(): HTMLCanvasElement {
		const result = this._element;
		if (result != null) {
			return result;
		}
		throw new Error("No Element Available");
	}

	getElement(): HTMLCanvasElement | null {
		return this._element;
	}

	get canvas(): HTMLCanvasElement {
		return this.element;
	}

	get context(): CanvasRenderingContext2D {
		const result = this._context;
		if (result != null) {
			return result;
		}
		throw new Error("No Context Available");
	}

	getContext(): CanvasRenderingContext2D | null {
		return this._context;
	}

	get resolution(): number {
		return 1;
	}

	get width(): number {
		const element = this._element;
		if (element != null) {
			return element.width;
		}
		return 0;
	}

	set width(width: number) {
		const element = this._element;
		if (element != null) {
			element.width = width;
		}
	}

	get height(): number {
		const element = this._element;
		if (element != null) {
			return element.height;
		}
		return 0;
	}

	set height(height: number) {
		const element = this._element;
		if (element != null) {
			element.height = height;
		}
	}

	clear(): void {
		const element = this._element;
		const context = this._context;
		if (element != null && context != null) {
			context.setTransform(1, 0, 0, 1, 0, 0);
			context.clearRect(0, 0, element.width, element.height);
		}
	}

	resize(width: number, height: number): void {
		const element = this._element;
		if (element != null) {
			element.width = width;
			element.height = height;
		}
	}

	destroy(): void {
		this._context = null;
		this._element = null;
	}
}
