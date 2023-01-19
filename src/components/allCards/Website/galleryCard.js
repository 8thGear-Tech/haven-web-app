export const GallerySection = (props) => {
  const { img } = props;
  return (
    <>
      <div className="container py-5">
        {" "}
        <div className="row g-0">
          <div className="card">
            <img src={img} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};
