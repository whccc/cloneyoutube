import Menu from "../../../shared/lateralMenu";
const MenuUser = () => {
  return (
    <div>
      <Menu>
        <ul>
          <li>
            <a>
              <i className="pi pi-images"></i>
              <label>Mis Videos</label>
            </a>
          </li>
          <li>
            <a>
              <i className="pi pi-images"></i>
              <label>Subir Video</label>
            </a>
          </li>
        </ul>
      </Menu>
    </div>
  );
};

export default MenuUser;
