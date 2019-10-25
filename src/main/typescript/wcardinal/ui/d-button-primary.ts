/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";

export class DButtonPrimary extends DButton {
	protected getType(): string {
		return "DButtonPrimary";
	}
}
