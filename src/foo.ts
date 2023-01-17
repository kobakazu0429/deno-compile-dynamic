import { getIsCompiled } from "../utils.ts";

export default () => {
  console.log("hello from foo");
  console.log(getIsCompiled());
};
