import "./Button.scss";

type ButtonPropType = {
  menu: { name: string };
};
const Button = ({ menu }: ButtonPropType) => {
  return (
    <button key={menu.name} className="menu-button">
      {menu.name}
    </button>
  );
};

export default Button;
