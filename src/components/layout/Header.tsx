import HamMenu from "../ui/HamMenu";
import Link from "next/link";
import classes from "./Header.module.scss";

const Header = () => {
  function openMenuHandler() {
    console.log("you tried to open a menu");
  }

  return (
    <header className={classes.header}>
      <Link href="/" passHref legacyBehavior>
        <a className={classes.logo}>MovieStore</a>
      </Link>
      <button onClick={openMenuHandler} className={classes.hamMenu}>
        <HamMenu />
      </button>
    </header>
  );
};

export default Header;
