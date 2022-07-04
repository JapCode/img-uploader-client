import { useState, useEffect } from "react";
import imgBg from "../assets/images/image.svg";
import useUploaderUrlUpdaterContext from "../hooks/useUploadUpdate";

function DragAndDrop(prop) {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(null);
  useUploaderUrlUpdaterContext(loading);

  const handleFile = async (file) => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  const handleOndragOver = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    let imageFile = event.target.files[0];
    handleFile(imageFile);
  };
  const handleOndrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };
  useEffect(() => {
    if (image !== null) {
      prop.uploadImage(image);
      setLoading("loading");
    }
  }, [image]);
  return (
    <section className="rounded-xl w-10/12 h-3/5 shadow-1xc font-poppins pt-auto sm:w-8/12 sm:h-4/6 min-h-minHS min-w-minWS max-w-fullWS max-h-fullHS">
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full my-auto">
        <h1 className="text-fontCPrimary">Upload your image</h1>
        <h2 className="text-fontCSecondary text-xs">
          File should be Jpeg, PNG,...
        </h2>
        <figure
          onDragOver={handleOndragOver}
          onDrop={handleOndrop}
          className="flex flex-col items-center justify-center gap-3 h-44 w-4/5 border-dashed bg-bGreyC border-borderC border-2 rounded-xl sm:h-56"
        >
          <img src={imgBg} alt="" />
          <p className="text-fontCTertiary text-xs">
            Drag & drop your image here
          </p>
        </figure>
        <p className="text-fontCTertiary">Or</p>
        <label
          className="flex items-center justify-center cursor-pointer bg-blueC w-28 h-9 text-xs rounded-lg text-white font-noto_sans"
          htmlFor="btnChoose"
        >
          Choose a File
        </label>
        <input
          className="hidden"
          type="file"
          id="btnChoose"
          accept="image/png, image/jpeg"
          onChange={handleChange}
        ></input>
      </div>
    </section>
  );
}
export default DragAndDrop;
