import React from "react";
import Sec2 from "../Styles/HomeSection2.module.css";

const HomeSection2 = () => {
  return (
    <div className={Sec2.Wrapper}>
      <picture>
        <source
          className={Sec2.Proimg}
          media="(min-width: 991px)"
          srcSet="https://res.cloudinary.com/de8yvffdl/image/upload/v1694182923/UI_BG_1_cza1uj.png"
        />
        <img
          className={Sec2.Proimg}
          src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694193496/UI_BG_3_zjurko.png"
          alt=""
        />
      </picture>
    </div>
  );
};

export default HomeSection2;
