function Loading() {
  return (
    <section className="flex flex-col justify-center gap-4 rounded-xl w-10/12 h-1/6 shadow-1xc font-poppins min-w-minWS max-w-fullWS">
      <div className="flex flex-col mx-auto gap-4 w-10/12">
        <h1 className="text-fontCPrimary text-lg">Uploading...</h1>
        <div className="w-full h-1.5 bg-greyC mx-auto rounded-lg">
          <div className="h-full w-4/12 bg-blueC rounded-lg animate-[load_3s_ease_infinite]" />
        </div>
      </div>
    </section>
  );
}
export default Loading;
