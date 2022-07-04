import { useEffect, useMemo, useState } from 'react';
import DragAndDrop from '../components/DragAndDrop';
import Loading from '../components/Loading';
import Success from '../components/Success';
import useUploaderUrlState from '../hooks/useUploadState';
import useUploaderUrlUpdaterContext from '../hooks/useUploadUpdate';
import uploadImg from '../utils/uploadImg';

function Uploader() {
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState(false);
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const url = useUploaderUrlState();
  useUploaderUrlUpdaterContext(imgUrl);

  async function waitFor(ms) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const update = async () => {
    const newUrl = await uploadImg(image);
    waitFor(1000);
    setImgUrl(newUrl);
  };
  useEffect(() => {
    if (image !== null) {
      update();
    }
  }, [image]);
  useEffect(() => {
    if (url === 'loading') {
      setLoading(true);
      setUpload(false);
    } else if (url !== 'loading' && url !== null) {
      const img = new Image();
      img.src = url.publicUrl;
      img.onload = () => {
        setImgSrc(url.publicUrl);
      };
    } else {
      setUpload(false);
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    if (url !== null) {
      setLoading(false);
      setUpload(true);
    }
  }, [imgSrc]);

  return useMemo(() => {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {loading ? (
          <Loading />
        ) : upload ? (
          <Success src={imgSrc} />
        ) : (
          <DragAndDrop uploadImage={setImage} />
        )}
      </>
    );
  }, [loading, upload]);
}
export default Uploader;
