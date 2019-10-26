/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";

export type DStateAware<R> = ( state: DBaseState ) => R;
export type DStateAwareOrValue<R> = DStateAware<R> | R;
export type DStateAwareOrValueMightBe<R> = DStateAwareOrValue<R | undefined>;
