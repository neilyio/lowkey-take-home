import React from "react";
import { useSpring, animated } from "react-spring";
import {
  Height,
  Index,
  OnClick,
  Child,
  OnMouseEnter,
  OnMouseLeave,
  Selected,
} from "./types";

export const SidebarCursor = ({ height, index = 0 }: Height & Index) => {
  const spring = useSpring({ y: height * index });
  return (
    <animated.div
      className="w-full rounded-[12px]"
      style={{
        height,
        background:
          "linear-gradient(225deg, #EF9383 0%, #FF4785 48.96%, #8C40D9 100%)",
        ...spring,
      }}
    ></animated.div>
  );
};

export const SidebarTarget = ({
  height,
  onClick,
  children,
  onMouseEnter,
  onMouseLeave,
}: Height & OnClick & Child & OnMouseEnter & OnMouseLeave) => (
  <button
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={"w-full flex p-[20px] items-center focus:outline-none space-x-6"}
    style={{ height }}
  >
    {children}
  </button>
);

export const SidebarIcon = ({ src }) => <img className="h-8" src={src}></img>;

export const SidebarFill = ({ height, selected }: Height & Selected) => (
  <div
    className={
      "w-full rounded-md transition-colors duration-100" +
      (selected ? " bg-gray-900" : "")
    }
    style={{ height, backgroundColor: selected && "rgba(228, 228, 228, 0.1)" }}
  />
);

export const SidebarContainer = ({ children }: any) => (
  <div
    className="w-[350px] h-full p-[20px] box-border flex justify-center"
    style={{ boxShadow: "inset -1px 0px 0px rgba(228, 228, 228, 0.2)" }}
  >
    <div className="w-full h-full relative">{children}</div>
  </div>
);

export const SidebarLabel = ({ children }) => (
  <p
    className="text-white whitespace-nowrap"
    style={{ fontStyle: "normal", fontWeight: 600, fontSize: 16 }}
  >
    {children}
  </p>
);