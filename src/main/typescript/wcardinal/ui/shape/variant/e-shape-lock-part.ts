export const EShapeLockPart = {
	TRANSFORM: 1,
	TRANSFORM_PARENT: 2,
	UPLOADED: 4,
	TRANSFORM_AND_UPLOADED: 7,
	CONNECTOR: 8
} as const;

export type EShapeLockPart = number;
