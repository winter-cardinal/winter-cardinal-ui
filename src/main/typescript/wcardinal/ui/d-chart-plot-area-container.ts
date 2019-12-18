import { Rectangle, Transform } from "pixi.js";
import { DBasePoint } from "./d-base-point";
import { DViewTarget } from "./d-view-to-target";
import { EShapeContainer } from "./shape";

export class DChartPlotAreaContainer extends EShapeContainer implements DViewTarget {
	protected _position: DBasePoint;
	protected _scale: DBasePoint;
	protected _workRect: Rectangle;

	constructor( onChange: () => void ) {
		super();
		const transform: Transform = this.transform;
		this._position = new DBasePoint( transform.position, onChange );
		this._scale = new DBasePoint( transform.scale, onChange );
		this._workRect = new Rectangle();
	}

	get position(): DBasePoint {
		return this._position;
	}

	get scale(): DBasePoint {
		return this._scale;
	}

	getBounds( skipUpdate?: boolean, rect?: Rectangle ): Rectangle {
		(this as any)._lastBoundsID = -1;
		return super.getBounds( skipUpdate, rect );
	}

	calculateBounds(): void {
		const bounds = this._bounds;
		const work = this._work;
		const rect = this._workRect;
		const worldTransform = this.transform.worldTransform;

		let xmin = 0;
		let xmax = 0;
		let ymin = 0;
		let ymax = 0;
		const children = this.children;
		if( 0 < children.length ) {
			let isFirst = true;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const child = children[ i ];
				if( child.visible ) {
					child.getBoundsInternal( work, false, rect );
					if( isFirst ) {
						isFirst = false;
						xmin = rect.x;
						ymin = rect.y;
						xmax = rect.x + rect.width;
						ymax = rect.y + rect.height;
					} else {
						xmin = Math.min( xmin, rect.x );
						ymin = Math.min( ymin, rect.y );
						xmax = Math.max( xmax, rect.x + rect.width );
						ymax = Math.max( ymax, rect.y + rect.height );
					}
				}
			}
		}

		bounds.clear();

		work.set( xmin, ymin );
		worldTransform.apply( work, work );
		bounds.addPoint( work );

		work.set( xmax, ymax );
		worldTransform.apply( work, work );
		bounds.addPoint( work );
	}
}
