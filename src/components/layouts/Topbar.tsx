import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification, IconSearch } from "../icons";

const Topbar = () => {
  return (
    <div className="bg-grayfc py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-[82px] flex-1">
        <Logo />
        <Search />
      </div>
      <User />
    </div>
  );
};

export default Topbar;

function Logo({}) {
  return (
    <Link href={"/"} className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Yariga"
        width={173}
        height={35}
        priority={true}
      />
    </Link>
  );
}

function Search({}) {
  return (
    <div className="py-[10px] px-[10px] rounded-lg bg-grayf4 flex gap-x-2 items-center flex-[0_1_405px] h-[38px]">
      <IconSearch />
      <input
        type="text"
        placeholder="Search Property, Customer etc"
        className="bg-transparent text-xs font-normal outline-none w-full text-primary placeholder:text-gray80"
      />
    </div>
  );
}

function User({}) {
  return (
    <div className="flex items-center gap-5">
      <IconNotification></IconNotification>
      <div className="flex gap-2">
        <Image
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col text-sm">
          <h4 className="font-semibold">Phan Phuong Binh</h4>
          <p className="text-gray80">Company Manager</p>
        </div>
      </div>
    </div>
  );
}
