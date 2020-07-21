/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";

/**
 * A {@link DBaseState}-aware function returning R.
 */
export type DStateAware<R> = ( state: DBaseStateSet ) => R;

/**
 * R or a {@link DBaseState}-aware function returning R.
 */
export type DStateAwareOrValue<R> = DStateAware<R> | R;

/**
 * R or a {@link DBaseState}-aware function returning R.
 * If a computed value is undefined, the computed value is supposed to be ignored.
 */
export type DStateAwareOrValueMightBe<R> = DStateAwareOrValue<R | undefined>;
