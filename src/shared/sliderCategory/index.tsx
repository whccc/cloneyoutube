import { useRef, useEffect } from "react";

const SliderCategory = () => {
  const refWrapper = useRef<HTMLDivElement>(null);
  const refRigth = useRef<HTMLDivElement>(null);
  const refLeft = useRef<HTMLDivElement>(null);
  const refItems = useRef<Array<HTMLDivElement | null>>([]);
  const refWrapperRefLeft = useRef<HTMLDivElement>(null);
  const refWrapperRefRigth = useRef<HTMLDivElement>(null);

  const data = ["Todo", "Juegos", "Programación", "Ejercicios", "Gym"];

  useEffect(() => {
    valid();
  }, []);

  const rigth = () => {
    refWrapper.current!.scrollLeft = refWrapper.current!.scrollLeft - 100;
    valid();
  };

  const valid = () => {
    const scrollLeft = Math.trunc(refWrapper.current!.scrollLeft);
    const scrollClient = refWrapper.current!.clientWidth;
    const scrollLeftR =
      refWrapper.current!.scrollWidth -
      Math.trunc(refWrapper.current!.scrollLeft);

    refRigth.current!.style.display =
      scrollLeftR === scrollClient ? "none" : "flex";
    refWrapperRefRigth.current!.style.zIndex =
      scrollLeftR === scrollClient ? "-1" : "1";

    refLeft.current!.style.display = scrollLeft > 0 ? "flex" : "none";
    refWrapperRefLeft.current!.style.zIndex = scrollLeft > 0 ? "1" : "-1";
  };

  const left = () => {
    refWrapper.current!.scrollLeft = 100 + refWrapper.current!.scrollLeft;
    valid();
  };

  const selectItem = (e: HTMLDivElement) => {
    for (const d of refItems.current) {
      d?.classList.remove("select");
    }
    e.classList.add("select");
  };
  return (
    <div className="wrapper-slider-category">
      <div ref={refWrapperRefLeft}>
        <i
          onClick={rigth}
          className="pi pi-chevron-left"
          style={{ display: "none" }}
          ref={refLeft}
        ></i>
      </div>
      <div className="wrapper-slider-content" ref={refWrapper}>
        {data.map((data, index) => (
          <div
            ref={(el) => (refItems.current[index] = el)}
            onClick={(e) => {
              selectItem(e.target as HTMLDivElement);
            }}
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
      <div ref={refWrapperRefRigth}>
        <i onClick={left} ref={refRigth} className="pi pi-chevron-right"></i>
      </div>
    </div>
  );
};

export default SliderCategory;
