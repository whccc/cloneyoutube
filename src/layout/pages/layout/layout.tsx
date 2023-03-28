import { Tooltip } from "react-tooltip";
import css from "./layout.module.scss";
import Router from "next/router";

const Layout = ({ children }: { children: any }) => {
  return (
    <main>
      <Tooltip id="menu" />
      <Tooltip id="buscar" />
      <Tooltip id="user" />

      <div className={css.wrapper_index}>
        <div className="wrapper_index_header_tab_1">
          <i
            className={`pi pi-align-justify`}
            data-tooltip-id="menu"
            data-tooltip-content="Menu"
            data-name="icon-menu"
          ></i>
          <i className="pi pi-video" data-name="icon-video"></i>
          <h1>Whc</h1>
        </div>

        <div className={css.wrapper_index_header_tab_2}>
          <input
            type="text"
            placeholder="Buscar"
            className={`wrapper_index_header_tab_2_input`}
          />
          <div className={css.wrapper_search_input}>
            <i className={`pi pi-search `}></i>
          </div>
          <div
            className={` ${css.wrapper_index_header_tab_2_i}`}
            data-tooltip-id="buscar"
            data-tooltip-content="Buscar"
          >
            <i className={`pi pi-search `}></i>
          </div>
        </div>

        <div
          className="wrapper-layout-user"
          onClick={() => {
            Router.push("/user/login");
          }}
        >
          <i
            data-tooltip-id="user"
            data-tooltip-content="Iniciar Sesión"
            className="pi pi-user"
            data-name="icon-user"
          ></i>
        </div>
      </div>
      {children}
    </main>
  );
};

export default Layout;
