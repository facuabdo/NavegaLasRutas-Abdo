import { Box } from "@chakra-ui/react";
import { CartWidget } from "../CartWidget/CartWidget";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import logo from "../../assets/facommerce-logo.png";

export function NavBar() {
  const navBarLinks = ["Guitarras", "Amplificadores", "Efectos", "Teclados"];

  const showSelectedLink = (link) => {
    alert("Seleccionaste categoría: " + link);
  };

  return (
    <Box className="navbar">
      <img src={logo} width="200" height="200" />
      <List className="navbar-links">
        {navBarLinks.map((link, index) => (
          <a href="#" key={index} onClick={() => showSelectedLink(link)}>
            <ListItem>
              <ListIcon as={FaCreativeCommonsSamplingPlus} color="blue.500" />
              {link}
            </ListItem>
          </a>
        ))}
      </List>
      <CartWidget />
    </Box>
  );
}
