import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

export interface Option {
  id: Key | null | undefined;
  name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}
