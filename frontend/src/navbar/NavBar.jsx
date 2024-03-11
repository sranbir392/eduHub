import React from "react";
import NavBarContainer from "./NavBarContainer";
import MenuToggle from "./MenuToggle";
import Logo from "./Logo";
import ManuLinks from "./ManuLinks";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <ManuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
}

export default NavBar;
