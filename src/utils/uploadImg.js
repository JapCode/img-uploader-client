const uploadImg = async (data) => {
  let imgResult;
  const formData = new FormData();
  formData.append("pic", data);
  await fetch("/api/v1/Upload", {
    method: "POST",
    headers: {
      contentType: "multipart/form-data",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then(async (data) => await (imgResult = data));
  console.log(imgResult);
  return imgResult;
};
export default uploadImg;
