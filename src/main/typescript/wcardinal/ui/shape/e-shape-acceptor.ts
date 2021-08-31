/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EShapeAcceptorEdge {
	x: number;
	y: number;
}

export interface EShapeAcceptor {
	size(): number;
	add(id: string, x: number, y: number): boolean;
	remove(id: string): EShapeAcceptorEdge | null;
	get(id: string): EShapeAcceptorEdge | null;
	contains(id: string): boolean;
	clear(): boolean;
}
