import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeEmbeddedLayer } from "./e-shape-embedded-layer";

export class EShapeEmbeddedLayerContainer implements EShapeLayerContainer {
	children: EShapeEmbeddedLayer[];
	protected _x: number;
	protected _y: number;
	protected _width: number;
	protected _height: number;
	protected _isEditMode: boolean;

	constructor(width: number, height: number, isEditMode: boolean) {
		this.children = [];
		this._x = -width * 0.5;
		this._y = -height * 0.5;
		this._width = width;
		this._height = height;
		this._isEditMode = isEditMode;
	}

	create(name: string): EShapeEmbeddedLayer {
		const result = new EShapeEmbeddedLayer(name, this._isEditMode);
		result.transform.position.set(this._x, this._y);
		result.size.set(this._width, this._height).init();
		this.children.push(result);
		return result;
	}
}
