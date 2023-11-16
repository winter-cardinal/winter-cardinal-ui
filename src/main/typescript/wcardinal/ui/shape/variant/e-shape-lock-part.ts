export const EShapeLockPart = {
	TRANSFORM_CHILD: 1,
	TRANSFORM_THIS: 2,
	TRANSFORM_PARENT: 4,
	TRANSFORM: 7,
	UPLOADED: 8,
	TRANSFORM_AND_UPLOADED: 15,
	CONNECTOR: 16,
	ALL: 31
} as const;

export type EShapeLockPart = number;
