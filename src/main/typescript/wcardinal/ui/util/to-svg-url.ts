/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const toSvgUrl = ( svg: string ): string => {
	return `data:image/svg+xml;base64,${btoa(svg)}`;
};
