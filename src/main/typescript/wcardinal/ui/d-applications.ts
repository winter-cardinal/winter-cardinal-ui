/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplication } from "./d-application";

export class DApplications {
	protected static INSTANCE: DApplication | null = null;

	static setInstace( instance: DApplication ): DApplication | null {
		const result = DApplications.INSTANCE;
		DApplications.INSTANCE = instance;
		return result;
	}

	static getInstance(): DApplication {
		if( DApplications.INSTANCE == null ) {
			throw new Error( "Must create a DApplication instance at first" );
		}
		return DApplications.INSTANCE;
	}

	static update(): void {
		this.getInstance().update();
	}
}
