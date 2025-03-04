"use client";

import { baseUrl } from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

function Register() {
  const route = useRouter();

  const onSubmits = async (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    try {
      let res = await axios.post(`${baseUrl}/users`, {
        name,
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.token);
        route.push("/dashboard");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  if (localStorage.getItem("accessToken")) {
    route.push("/dashboard");
  }
  return (
    <div>
      <form
        action=""
        onSubmit={onSubmits}
        className="flex flex-col gap-3 items-center"
      >
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Register;