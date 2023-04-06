import { Tooltip } from "react-tooltip";
import Router from "next/router";
import stylesLayout from "./layout.styles.module.scss";
const Layout = ({ children }: { children: any }) => {
  const navigationIndex = () => {
    Router.push("/");
  };
  return (
    <main>
      <Tooltip id="menu" />
      <Tooltip id="buscar" />
      <Tooltip id="user" />

      <div className={stylesLayout["wrapper_index"]}>
        <div className={stylesLayout["wrapper_index_header_tab_1"]}>
          <i
            className={`pi pi-align-justify`}
            data-tooltip-id="menu"
            data-tooltip-content="Menu"
            data-name="icon-menu"
          ></i>
          <i
            className="pi pi-video"
            data-name="icon-video"
            onClick={navigationIndex}
          ></i>
          <h1 onClick={navigationIndex}>Whc</h1>
        </div>

        <div className={stylesLayout["wrapper_index_header_tab_2"]}>
          <input
            type="text"
            placeholder="Buscar"
            className={stylesLayout["wrapper_index_header_tab_2_input"]}
          />
          <div className={stylesLayout["wrapper_search_input"]}>
            <i className={`pi pi-search `}></i>
          </div>
          <div
            className={stylesLayout["wrapper_index_header_tab_2_i"]}
            data-tooltip-id="buscar"
            data-tooltip-content="Buscar"
          >
            <i className={`pi pi-search `}></i>
          </div>
        </div>

        <div
          className={stylesLayout["wrapper-layout-user"]}
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
