"use client";

import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

import React from "react";

function Home() {
  const route = useRouter();

  return (
    <div>
      {/* <Navbar /> */}
      <Main />
    </div>
  );
}

export default Home;
