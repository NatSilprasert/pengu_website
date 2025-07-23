"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState<string>("หน้าหลัก");
  const openMenuRef = useRef(openMenu);
  openMenuRef.current = openMenu;

  const navList = ["หน้าหลัก", "เกี่ยวกับ", "บริการ", "ผลงาน", "ติดต่อ"];

  /* ---------- ANIMATION HELPERS ---------- */
  const expandMenu = () => {
    const tl = gsap.timeline();
    tl.to(".tabs-container", {
      scale: 1,
      duration: 0.2,
      ease: "power2.inOut",
    });
    tl.to(
      ".nav-menu",
      {
        scale: 0.001,
        duration: 0.2,
        ease: "power3.out",
      },
      "<"
    );
    // เลื่อน login-button ให้ชิดขวา (ถ้าอยากให้เคลื่อนไปพร้อม nav-menu)
    tl.to(
      ".login-button",
      {
        x: 60, // ขยับไปทางขวา 60px
        duration: 0.2,
        ease: "power3.inOut",
      },
      "<"
    );
  };

  const collapseMenu = () => {
    const tl = gsap.timeline();
    tl.to(".tabs-container", {
      scale: 0.001,
      duration: 0.2,
      ease: "power2.inOut",
    });
    tl.to(
      ".nav-menu",
      {
        scale: 1,
        duration: 0.2,
        ease: "power3.out",
      },
      "<"
    );
    tl.to(
      ".login-button",
      {
        x: 0,
        duration: 0.2,
        ease: "power2.inOut",
      },
      "<"
    );
  };

  const openMenuHandler = () => {
    setOpenMenu(true);
    expandMenu();
  };

  /* ---------- AUTO COLLAPSE WHEN SCROLL ---------- */
  useEffect(() => {
    if (!openMenu) return;

    const startY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - startY) > 5 && openMenuRef.current) {
        setOpenMenu(false);
        collapseMenu();
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openMenu]);

  /* ---------- SCROLLTRIGGER ---------- */
  useGSAP(() => {
    gsap.set(".tabs-container", { scale: 1, transformOrigin: "center center" });
    gsap.set(".nav-menu", { scale: 0.001, transformOrigin: "center center" });
    gsap.set(".login-button", { x: 60 });

    const st = ScrollTrigger.create({
      trigger: ".tabs-container",
      start: "top top",
      end: "+=0.6",
      onLeave: () => {
        if (!openMenuRef.current) collapseMenu();
      },
      onEnterBack: () => {
        if (!openMenuRef.current) expandMenu();
      },
    });

    const changeColorTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".screen-section",
            start: "bottom top", 
            endTrigger: document.body,
            toggleActions: 'play reverse play reverse', 
        }
    });

    changeColorTl.to('.nav-menu', {
        backgroundColor: 'white',
        color: 'black',
        duration: 0.5,
    })
    changeColorTl.to('.login-button', {
        backgroundColor: 'white',
        color: 'black',
        duration: 0.5,
    }, '<')
    changeColorTl.to('.logo-text', {
        color: 'white',
        duration: 0.5,
    }, '<')

    return () => st.kill();
  }, []);

  /* ---------- TAB INDICATOR ---------- */
  const updateIndicator = (target: HTMLElement) => {
    const indicator = document.querySelector(".indicator") as HTMLElement | null;
    const tabRow = document.querySelector(".tab-row") as HTMLElement | null;
    if (!indicator || !tabRow) return;

    const tabBounds = target.getBoundingClientRect();
    const rowBounds = tabRow.getBoundingClientRect();

    const width = tabBounds.width;
    const offset = tabBounds.left - rowBounds.left;

    gsap.to(indicator, {
      x: offset,
      width,
      duration: 0.4,
    });
  };

  useEffect(() => {
    const currentTab = document.querySelector(
      `.tab[data-nav="${active}"]`
    ) as HTMLElement | null;
    if (currentTab) updateIndicator(currentTab);
  }, [active]);

  return (
    <div className="z-50 fixed top-0 py-5 w-full flex items-center px-24">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <b className="logo-text mt-1 text-lg">PENGU STUDIO</b>
      </div>

      {/* Tab Bar */}
      <div className="tabs-container absolute left-1/2 transform -translate-x-1/2 origin-center">
        <div className="tab-row flex items-center px-1 py-4 bg-white rounded-full shadow-md relative">
          {navList.map((nav, index) => (
            <div
              key={index}
              className={`tab px-5 cursor-pointer z-10 transition-colors ${
                active === nav ? "text-white " : "text-primary"
              }`}
              data-nav={nav}
              onClick={() => setActive(nav)}
            >
              {nav}
            </div>
          ))}
          <span className="indicator absolute bottom-1/2 transform translate-y-1/2 left-0 h-[90%] bg-primary rounded-full"></span>
        </div>
      </div>

      {/* Buttons (Login and Menu) */}
      <div className="ml-auto flex gap-3 items-center origin-center">
        <Button className="login-button">เข้าสู่ระบบ</Button>
        <Button
          size={"icon"}
          className="nav-menu p-7"
          onClick={openMenuHandler}
        >
          <MenuIcon width={24} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;