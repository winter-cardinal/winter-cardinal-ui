/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAcceptorEdgeType } from "./e-shape-acceptor-edge-type";

/**
 * @deprecated in favor of {@link EShapeAcceptorEdgeType}.
 */
export const EShapeAcceptorType = EShapeAcceptorEdgeType;

/**
 * @deprecated in favor of {@link EShapeAcceptorEdgeType}.
 */
export type EShapeAcceptorType = typeof EShapeAcceptorType[keyof typeof EShapeAcceptorType];
