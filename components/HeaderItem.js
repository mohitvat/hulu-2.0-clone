import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col group items-center cursor-pointer w-5 sm:20 hover:text-black">
      <Icon className="h-7 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
