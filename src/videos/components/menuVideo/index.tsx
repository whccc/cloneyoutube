import Menu from "../../../shared/lateralMenu";

const MenuVideo = () => {
  return (
    <div>
      <Menu>
        <ul>
          <li>
            <a>
              <i className="pi pi-images"></i>
              <label>Inicio</label>
            </a>

            <a>
              <i className="pi pi-images"></i>
              <label>Buscar por categorías</label>
            </a>
          </li>
        </ul>
      </Menu>
    </div>
  );
};

export default MenuVideo;
