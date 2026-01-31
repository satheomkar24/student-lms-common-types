export * from "./admin";
export * from "./auth";
export * from "./common";
export * from "./course";
export * from "./instructor";
export * from "./student";

// Generic payload type for creating/updating models without _id
export type Payload<T> = Omit<T, "_id">;
