/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";

export class DButtonSecondary extends DButton {
	protected getType(): string {
		return "DButtonSecondary";
	}
}
