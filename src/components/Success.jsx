import { useEffect, useState } from "react";
import useUploaderUrlState from "../hooks/useUploadState";
import successImg from "../assets/images/clarity_success-standard-solid.svg";

function Success(prop) {
  const url = useUploaderUrlState();
  const [copyUrl, setCopyUrl] = useState(null);
  const [isCopy, setIsCopy] = useState(false);
  const copyToClipboard = async () => {
    try {
      setIsCopy(true);
      navigator.clipboard.writeText(copyUrl);
    } catch {
      throw new Error("Unable to copy");
    }
  };
  useEffect(() => {
    if (url !== null) {
      setCopyUrl(url.publicUrl);
    }
  }, [url]);
  return (
    <section className="flex flex-col items-center justify-center gap-2 rounded-xl w-10/12 h-3/6 shadow-1xc font-poppins min-w-minWS max-w-fullWS">
      <img src={successImg}></img>
      <h1 className="text-fontCPrimary text-lg">Uploaded Successfully</h1>
      <figure className="flex flex-col items-center justify-center gap-3 w-5/6 h-56 rounded-xl my-4 overflow-hidden ">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={prop.src}
          alt="uploaded image"
        />
        {/* <ProgressiveImg placeholderSrc={successImg} src={url.publicUrl} /> */}
      </figure>
      <span className="flex items-center justify-between h-9 w-5/6 bg-bGreyC border border-sGreyC rounded-lg text-xs px-0.5 py-0.5">
        <p className="truncate w-7/12">{url.publicUrl}</p>
        <button
          onClick={copyToClipboard}
          className={`rounded-lg h-full w-2/6 text-white bg-blueC flex justify-center items-center ${
            isCopy ? "bg-checkC" : ""
          }`}
        >
          {isCopy ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 animate-check"
              // className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <span>Copy Link</span>
          )}
        </button>
      </span>
    </section>
  );
}
export default Success;
