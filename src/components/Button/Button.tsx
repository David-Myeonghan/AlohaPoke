import "./Button.scss";

type ButtonPropType = {
  menu: { name: string; type: string };
};
const Button = ({ menu }: ButtonPropType) => {
  const className = getButtonStyle(menu.type);
  return (
    <button key={menu.name} className={className}>
      {menu.name}
    </button>
  );
};

export default Button;

const getButtonStyle = (type: string) => {
  let className = "";
  switch (type) {
    case "search":
      className = "button-search";
      break;
    case "menu":
    default:
      className = "button-menu";
      break;
  }
  return className;
};
