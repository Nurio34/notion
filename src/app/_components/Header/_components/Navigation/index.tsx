import CaretDown from "@/icons/CaretDown";
import "./index.css";

const navigation = [
  { name: "Product", icon: <CaretDown /> },
  { name: "Teams", icon: <CaretDown /> },
  { name: "Individuals", icon: <CaretDown /> },
  { name: "Download", icon: <CaretDown /> },
  { name: "Pricing", icon: null },
];

function Navigation() {
  return (
    <ul className="contents">
      {navigation.map((item) => (
        <li key={item.name}>
          <button
            type="button"
            className="Navigation_Button flex items-center font-semibold py-1 px-3 rounded-md transition-all hover:bg-gray-200"
          >
            {item.name}
            <span className="Icon">{item.icon}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
