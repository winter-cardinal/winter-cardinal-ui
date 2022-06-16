/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";

export type EShapeActionOpenOpener = (target: string, inNewWindow: boolean, shape: EShape) => void;

export const EShapeActionOpenOpeners: Record<number, EShapeActionOpenOpener> = {};
