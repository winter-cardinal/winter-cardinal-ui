import { EShape } from "../e-shape";
import { EShapeAcceptorEdge } from "../e-shape-acceptor-edge";
import { EShapeAcceptorImpl } from "../e-shape-acceptor-impl";
import { EShapeEmbedded } from "./e-shape-embedded";

export class EShapeEmbeddedAcceptor extends EShapeAcceptorImpl {
	get(shape: EShape, id: string): EShapeAcceptorEdge | null {
		const edges = this.getEdges(shape);
		if (edges != null) {
			const edge = edges.get(id);
			if (edge != null) {
				return edge;
			}
		}
		return super.get(shape, id);
	}

	each(shape: EShape, iteratee: (edge: EShapeAcceptorEdge, id: string) => void): this {
		const edges = this.getEdges(shape);
		if (edges != null) {
			edges.forEach((edge, id): void => {
				iteratee(edge, id);
			});
		}
		return super.each(shape, iteratee);
	}

	protected getEdges(shape: EShape): Map<string, EShapeAcceptorEdge> | null {
		if (shape instanceof EShapeEmbedded) {
			return shape.edges;
		}
		return null;
	}
}
