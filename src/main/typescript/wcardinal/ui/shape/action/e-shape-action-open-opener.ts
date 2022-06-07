/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type EShapeActionOpenOpener = (target: string, inNewWindow: boolean) => void;

export const EShapeActionOpenOpeners: Record<number, EShapeActionOpenOpener> = {};
