import { IPoint } from "pixi.js";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeFill } from "../e-shape-fill";
import { EShapeGradientLike } from "../e-shape-gradient";
import { EShapePoints } from "../e-shape-points";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeTag } from "../e-shape-tag";
import { EShapeText } from "../e-shape-text";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeGroupFillViewer } from "./e-shape-group-fill-viewer";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeEditor } from "./e-shape-group-size-editor";
import { EShapeGroupSizeViewer } from "./e-shape-group-size-viewer";
import { EShapeGroupStrokeViewer } from "./e-shape-group-stroke-viewer";
import { EShapeGroupTextViewer } from "./e-shape-group-text-viewer";
import { EShapeTagImpl } from "./e-shape-tag-impl";

export abstract class EShapeGroupViewer extends EShapeBase {
	size: EShapeGroupSize;
	fill: EShapeFill;
	stroke: EShapeStroke;
	tag: EShapeTag;
	text: EShapeText;

	constructor( type: EShapeType ) {
		super( type );
		this.tag = this.newTag();
		this.size = this.newGroupSize();
		this.fill = this.newGroupFill();
		this.stroke = this.newGroupStroke();
		this.text = this.newGroupText();
	}

	protected newGroupSize(): EShapeGroupSize {
		if( EShapeDefaults.IS_EDIT_MODE ) {
			return new EShapeGroupSizeEditor(
				this,
				EShapeDefaults.SIZE_X,
				EShapeDefaults.SIZE_Y
			);
		} else {
			const result = new EShapeGroupSizeViewer(
				() => {
					const base = result.base;
					this.transform.scale.set(
						result.x / base.x,
						result.y / base.y
					);
				},
				EShapeDefaults.SIZE_X,
				EShapeDefaults.SIZE_Y
			);
			return result;
		}
	}

	protected newTag(): EShapeTag {
		return new EShapeTagImpl();
	}

	protected newGroupFill(): EShapeFill {
		return new EShapeGroupFillViewer();
	}

	protected newGroupStroke(): EShapeStroke {
		return new EShapeGroupStrokeViewer();
	}

	protected newGroupText(): EShapeText {
		return new EShapeGroupTextViewer();
	}

	protected getBoundsSize(): IPoint {
		const size = this.size;
		if( size instanceof EShapeGroupSizeViewer ) {
			return size.base;
		} else {
			return size;
		}
	}

	onChildTransformChange(): void {
		super.onChildTransformChange();
		this.size.fit();
	}

	get corner(): EShapeCorner {
		return EShapeCorner.NONE;
	}

	set corner( corner: EShapeCorner ) {
		// DO NOTHING
	}

	get cursor(): string {
		return "";
	}

	set cursor( cursor: string ) {
		// DO NOTHING
	}

	get gradient(): EShapeGradientLike | undefined {
		return undefined;
	}

	set gradient( gradient: EShapeGradientLike | undefined ) {
		// DO NOTHING
	}

	get radius(): number {
		return 0;
	}

	set radius( radius: number ) {
		// DO NOTHING
	}

	get image(): HTMLImageElement | undefined {
		return undefined;
	}

	set image( image: HTMLImageElement | undefined ) {
		// DO NOTHING
	}

	get points(): EShapePoints | undefined {
		return undefined;
	}

	set points( points: EShapePoints | undefined ) {
		// DO NOTHING
	}

	abstract clone(): EShapeGroupViewer;

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		return false;
	}
}
