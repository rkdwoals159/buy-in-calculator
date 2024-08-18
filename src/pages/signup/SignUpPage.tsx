// SignUpPage.jsx

import React, { useState } from "react";
import axios from "axios";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../../utils/stackflow";

const SignUpPage: ActivityComponentType = () => {
  const { pop } = useFlow();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/signup`,
        {
          name,
          password,
        }
      );
      console.log("회원가입 성공:", response.data);
      pop();

      console.log("move");
      // 회원가입 성공 시 필요한 처리 (예: 리다이렉트, 알림 등)
    } catch (error) {
      alert("회원가입 실패:");
      console.error("회원가입 실패:", error);
      // 회원가입 실패 시 필요한 처리
    }
  };

  return (
    <AppScreen appBar={{ title: "바인비 계산기" }}>
      <article className="dark : text-black relative w-full h-full flex flex-col items-center">
        <header>회원가입</header>
        <section className="flex-1 flex w-full items-center justify-center">
          <form className="flex flex-col gap-[1rem]" onSubmit={handleSubmit}>
            <div className="flex justify-between gap-[1rem]">
              <label>한글이름 : </label>
              <input
                autoComplete="off"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex justify-between gap-[1rem]">
              <label>비밀번호 : </label>
              <input
                autoComplete="off"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="mt-[2rem]" type="submit">
              가입하기
            </button>
          </form>
        </section>
      </article>
    </AppScreen>
  );
};

export default SignUpPage;
