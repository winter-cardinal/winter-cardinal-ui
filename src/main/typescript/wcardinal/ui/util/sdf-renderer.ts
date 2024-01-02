/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BLEND_MODES, DRAW_MODES, ObjectRenderer, Renderer, utils } from "pixi.js";
import { SdfMesh } from "./sdf-mesh";

export class SdfRenderer extends ObjectRenderer {
	constructor(renderer: Renderer) {
		super(renderer);
	}

	render(mesh: SdfMesh): void {
		const shader = mesh.shader;
		shader.uniforms.uSampler = mesh.texture;
		shader.uniforms.uSize = [mesh.canvas.width, mesh.canvas.height];

		const renderer = this.renderer;
		renderer.batch.flush();
		renderer.shader.bind(shader, false);
		renderer.state.setBlendMode(utils.correctBlendMode(BLEND_MODES.NORMAL, true));
		renderer.geometry.bind(mesh.geometry, shader);
		renderer.geometry.draw(DRAW_MODES.TRIANGLES, 0, 0, mesh.geometry.instanceCount);
	}
}
