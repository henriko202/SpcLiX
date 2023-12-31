"use client"

import { initializeApp } from "firebase/app"
import { fetchAndActivate, getBoolean, getRemoteConfig, getString, getValue } from "firebase/remote-config"
import React, { useEffect, useState } from "react"

const firebaseConfig = {
  apiKey: "AIzaSyDX4cD35gKa30MVv2L5s8GY7sHyRlbgdoU",
  authDomain: "spclix.firebaseapp.com",
  projectId: "spclix",
  storageBucket: "spclix.appspot.com",
  messagingSenderId: "205068650909",
  appId: "1:205068650909:web:f81e9c6867356370458774",
  measurementId: "G-ES1TNN909M",
}

const navItems = [
  {
    text: "Próximo Lançamento",
    href: "#next-launch",
  },
  {
    text: "Último Lançamento",
    href: "#last-launch",
  },
  {
    text: "Próximos Lançamentos",
    href: "#next-launches",
  },
  {
    text: "Lançamentos passados",
    href: "#past-launches",
  },
]

const Header = () => {
  const [changeColor, setChangeColor] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const app = initializeApp(firebaseConfig)
      const remoteConfig = getRemoteConfig(app)

      remoteConfig.settings.minimumFetchIntervalMillis = 1000

      remoteConfig.defaultConfig = {
        change_text_color: false,
      }

      fetchAndActivate(remoteConfig)
        .then(() => {
          const val = getBoolean(remoteConfig, "change_text_color")
          setChangeColor(val)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })

  return (
    <>
      <div className="drawer sticky top-0 z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            {/* Hamburger icon */}
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className={"flex-1 px-2 mx-2 " + (changeColor ? "text-orange-400" : "text-white")}>SpcLiX</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content */}
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 pt-16">
            {/* Sidebar content */}
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => {
                    const myDrawer = document.getElementById("my-drawer")
                    if (myDrawer) {
                      myDrawer.click()
                    }
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
