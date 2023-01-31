//images
import blogheroimage from "../../assets/images/hero/blogheroimage.png";

export const BlogHero = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12 py-5">
            <h3
              className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none text-center"
              style={{ color: "#2B0947" }}
            >
              WAYS TO ENGAGE YOUR CHAMPS THIS SUMMER
            </h3>
            <h4
              className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none text-center"
              style={{ color: "#2B0947" }}
            >
              WAYS TO ENGAGE YOUR CHAMPS THIS SUMMER
            </h4>
            <p className="d-flex text-center mx-2">
              A great thing to do this summer is start a vegetable garden by
              saving your own seeds from fruits and vegetables. It’s very easy,
              lots of fun, and you still get to eat the vegetables so you don’t
              lose any money. You may start with cucumber and tomato
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 container-fluid">
        <div className="row align-items-center justify-content-between mt-2 mx-2">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
            <img
              src={blogheroimage}
              className="d-block mx-lg-auto img-fluid"
              alt=""
              loading=""
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 pt-5">
            <h3
              className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none"
              style={{ color: "#2B0947" }}
            >
              Attend a Summer Camp
            </h3>
            <h5
              className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none"
              style={{ color: "#2B0947" }}
            >
              Attend a Summer Camp
            </h5>
            <p className="d-flex ">
              Summer Camps draw children together and help build team spirit.
              Kids not only make new friends but also learn to cooperate and
              respect the views of others. They imbibe the value of sincere
              communication and learn to resolve disagreements. The Kids enjoys
              fun, safe educational/recreational programs, outdoor experiences
              and group activities.
            </p>
            <h5 className="lh-5 " style={{ color: "#2B0947" }}>
              Learn self-defence
            </h5>
            <p className="d-flex">
              One of the greatest gifts you can ever give your children is the
              confidence, discipline, and fortitude to accomplish their own life
              goals. Committing to Martial Arts classes is one of these gifts.
            </p>
            <h5 className="lh-5" style={{ color: "#2B0947" }}>
              Learn a new language
            </h5>
            <p className="d-flex">
              Learning a new language promotes open-mindedness and introduces
              your kids to different people, cultures, and ways of life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
