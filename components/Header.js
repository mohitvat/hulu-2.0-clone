import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import React from "react";
import Home from "../pages";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className=" flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
      <div className="flex flex-grow justify-start gap-12 max-w-xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCCOUNT" Icon={UserIcon} />
      </div>

      <img
        className="object-contain "
        src="https://tse3.mm.bing.net/th?id=OIP._DGmCuh1xiQ2gjTau3le1wHaD8&pid=Api&P=0&w=302&h=161"
        width={100}
        height={100}
      />
    </header>
  );
}

export default Header;
