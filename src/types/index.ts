export * from "./param-types";

export type WallPaperType = {
  id: number;
  imgUri: string;
  authur: {
    name: string;
    id: string;
    avatar: string;
  };
};
