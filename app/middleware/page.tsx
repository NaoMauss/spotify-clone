"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const MiddlewarePage = () => {
  const searchParams = useSearchParams();

  function setstorage() {
    if (localStorage.getItem("expire_time") && new Date().getTime() > parseInt(localStorage.getItem("expire_time") || "")) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("expire_time");
      window.location.assign('http://localhost:3000/dashboard')
    }
    else {
        localStorage.setItem("access_token", searchParams?.getAll("access_token")[0] || "");
        localStorage.setItem("refresh_token", searchParams?.getAll("refresh_token")[0] || "");
        localStorage.setItem("expire_time", (new Date().getTime() + 3600000).toString());
        window.location.assign('http://localhost:3000/dashboard')
    }
  }

  useEffect(() => {
    setstorage();
  }, [searchParams]);

  return (
    <div>
      <h1>Middleware</h1>
      <p>
        This page is used to set the access token and refresh token in local storage. It is not meant to be viewed.
      </p>
    </div>
  );

};

export default MiddlewarePage;
