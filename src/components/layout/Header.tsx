import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SearchMenu from "./SearchMenu";
import HamMenu from "../ui/HamMenu";
import Link from "next/link";
import classes from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  function openMenuHandler() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    router.events.on("routeChangeComplete", () =>
      setIsMenuOpen(false)
    );
  }, []);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.toolbar}>
          <Link href="/" passHref legacyBehavior>
            <a className={classes.logo}>MovieStore</a>
          </Link>
          <Link href="/favorites" passHref legacyBehavior>
            <a className={classes.favorites}>
              <img
                src="/icons/favorites.svg"
                alt="Favorites"
                width={28}
                height={25.2}
              />
            </a>
          </Link>
          <button
            onClick={openMenuHandler}
            className={classes.hamMenu}
          >
            <HamMenu />
          </button>
        </div>
      </header>
      <SearchMenu open={isMenuOpen} />
    </>
  );
};

export default Header;
