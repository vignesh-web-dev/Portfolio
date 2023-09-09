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
        <source
          media="(min-width: 767px)"
          className={Sec2.Proimg}
          srcSet="https://res.cloudinary.com/de8yvffdl/image/upload/v1694193496/UI_BG_3_zjurko.png"
          alt=""
        />
        <source
          media="(min-width: 480px)"
          className={Sec2.Proimg}
          srcSet="https://res.cloudinary.com/de8yvffdl/image/upload/v1694254495/Asset_6main_fnvguu.png"
          alt=""
        />
        <img
          className={Sec2.Proimg}
          src="https://res.cloudinary.com/de8yvffdl/image/upload/v1694254490/Asset_7main_fed8ni.png"
          alt=""
        />
      </picture>
    </div>
  );
};

export default HomeSection2;
