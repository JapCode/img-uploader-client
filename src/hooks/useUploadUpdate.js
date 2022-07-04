import { useContext, useEffect } from "react";
import { UploaderUrlUpdaterContext } from "../context/Upload";

function useUploaderUrlUpdaterContext(url) {
  const setUploaderUrl = useContext(UploaderUrlUpdaterContext);
  if (typeof setUploaderUrl === "undefined") {
    throw new Error(
      "useUploaderUrlUpdaterContext must be used within a UploaderUrlProvider"
    );
  }
  const newUrl = useEffect(() => {
    setUploaderUrl(url);
  }, [url, setUploaderUrl]);
  return newUrl;
}

export default useUploaderUrlUpdaterContext;
