import { useContext } from "react";
import { UploaderUrlContext } from "../context/Upload";

// const BackgroundColorStateContext = createContext();
function useUploaderUrlState() {
  const uploadState = useContext(UploaderUrlContext);
  if (typeof uploadState === "undefined") {
    throw new Error(
      "useUploaderUrlState must be used within a UploaderUrlProvider"
    );
  }
  return uploadState;
}
export default useUploaderUrlState;
