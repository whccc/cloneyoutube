import { useRef, useEffect } from "react";

const SliderCategory = () => {
  const refWrapper = useRef<HTMLDivElement>(null);
  const refRigth = useRef<HTMLDivElement>(null);
  const refLeft = useRef<HTMLDivElement>(null);
  const refItems = useRef<Array<HTMLDivElement | null>>([]);
  const data = ["Todo", "Juegos", "Programación", "Ejercicios"];
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

    refRigth.current!.style.display = scrollLeft > 0 ? "flex" : "none";
    refLeft.current!.style.display =
      scrollLeftR === scrollClient ? "none" : "flex";
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
      <div>
        <i
          onClick={rigth}
          className="pi pi-chevron-left"
          style={{ display: "none" }}
          ref={refRigth}
        ></i>
      </div>
      <div className="wrapper-slider-content" ref={refWrapper}>
        {data.map((data, index) => (
          <div
            ref={(el) => (refItems.current[index] = el)}
            onClick={(e) => {
              selectItem(e.target);
            }}
          >
            {data}
          </div>
        ))}
      </div>
      <div onClick={left}>
        <i ref={refLeft} className="pi pi-chevron-right"></i>
      </div>
    </div>
  );
};

export default SliderCategory;
