import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DView } from "./d-view";
import { UtilExtract } from "./util/util-extract";

export interface DDiagramSnapshotParent<CANVAS> {
	canvas: CANVAS | null;
	view: DView;
}

export class DDiagramSnapshot<CANVAS extends DBase = DBase> {
	protected _parent: DDiagramSnapshotParent<CANVAS>;

	constructor(parent: DDiagramSnapshotParent<CANVAS>) {
		this._parent = parent;
	}

	createAsUrl(size: number): string | undefined {
		return this.create(size, (canvas) => {
			return UtilExtract.base64({ target: canvas });
		});
	}

	createAsFile(size: number, filename: string): void {
		this.create(size, (canvas) => {
			return UtilExtract.file({ target: canvas, filename: filename! });
		});
	}

	create<DATA>(size: number, extractor: (canvas: CANVAS) => DATA): DATA | undefined {
		const parent = this._parent;
		const canvas = parent.canvas;
		if (canvas) {
			const view = parent.view;
			const viewPosition = view.position;
			const viewScale = view.scale;

			const oldPositionX = viewPosition.x;
			const oldPositionY = viewPosition.y;
			const oldScaleX = viewScale.x;
			const oldScaleY = viewScale.y;

			const newScale =
				size / DApplications.getResolution(canvas) / Math.max(canvas.width, canvas.height);

			view.transform(0, 0, newScale, newScale, 0);
			const result = extractor(canvas);
			view.transform(oldPositionX, oldPositionY, oldScaleX, oldScaleY, 0);
			return result;
		}
	}
}
