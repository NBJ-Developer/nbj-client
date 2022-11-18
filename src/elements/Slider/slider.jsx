import React from "react";
import { useInView } from "react-intersection-observer";

const Slider = ({ slideComponent }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {slideComponent}
    </div>
  );
};

export default Slider;