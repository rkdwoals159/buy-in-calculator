import { useState } from "react";
import axios from "axios";
import { useFlow } from "../../utils/stackflow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useNavigate, useParams } from "react-router-dom";

const SignInPage = () => {
  const router = useNavigate();
  const { replace, push } = useFlow();
  const [name, setName] = useState("");
  const params = useParams();
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          name,
          password,
        }
      );
      console.log("로그인 성공:", response.data);
      localStorage.setItem("userId", response.data.id);
      if (params.cardId) {
        router("/game/" + params.cardId);
      }
      replace("StartPage", {
        title: "Hello",
      });
      // 로그인 성공 시 필요한 처리 (예: 로컬 스토리지에 토큰 저장 등)
    } catch (error) {
      console.error("로그인 실패:", error);
      // 로그인 실패 시 필요한 처리
    }
  };

  return (
    <AppScreen appBar={{ title: "바인비 계산기" }}>
      <article className="dark : text-black relative w-full h-full flex flex-col items-center justify-center gap-[5rem]">
        <header>로그인</header>
        <section className="flex-1 flex w-full items-center justify-center">
          <form className="flex flex-col gap-[1rem]" onSubmit={handleSubmit}>
            <div className="flex justify-between gap-[1rem]">
              <label>한글이름:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between gap-[1rem]">
              <label>비밀번호:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">로그인</button>
          </form>
        </section>
        <button
          onClick={() => {
            push("SignUpPage", {
              title: "Hello",
            });
          }}
          type="submit"
        >
          회원가입
        </button>
      </article>
    </AppScreen>
  );
};

export default SignInPage;
