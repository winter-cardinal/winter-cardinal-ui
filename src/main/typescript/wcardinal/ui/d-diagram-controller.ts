/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseController, DDiagramBasePieceController } from "./d-diagram-base-controller";

/**
 * {@link DDiagram} piece controller.
 */
export interface DDiagramPieceController extends DDiagramBasePieceController {}

/**
 * {@link DDiagram} controller.
 */
export interface DDiagramController extends DDiagramBaseController {}
