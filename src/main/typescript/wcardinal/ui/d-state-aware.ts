/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";

/**
 * A {@link DBaseState}-aware function returning R.
 */
export type DStateAware<R> = ( state: DBaseState ) => R;

/**
 * R or a {@link DBaseState}-aware function returning R.
 */
export type DStateAwareOrValue<R> = DStateAware<R> | R;

/**
 * R or a {@link DBaseState}-aware function returning R.
 * If a computed value is undefined, the computed value is supposed to be ignored.
 */
export type DStateAwareOrValueMightBe<R> = DStateAwareOrValue<R | undefined>;
