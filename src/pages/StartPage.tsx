import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../utils/stackflow";
import cryptoRandomString from "crypto-random-string";

const MyActivity: ActivityComponentType = () => {
  const { push } = useFlow();
  const randomString = cryptoRandomString({ length: 30, type: "base64" })
    .toString()
    .split("/")
    .join("")
    .split("?")
    .join("");
  const linkUrl = `${import.meta.env.VITE_BASE_URL}/game/${randomString}`;
  const onClick = () => {
    push("LinkPage", {
      title: "Hello",
      linkUrl: linkUrl,
    });
  };
  return (
    <AppScreen appBar={{ title: "바인비 계산기" }}>
      <article className=" w-full h-full flex flex-col items-center">
        <section className="flex-1 flex w-full items-center justify-center">
          <button className="text-blue" onClick={onClick}>
            방만들기
          </button>
        </section>
      </article>
    </AppScreen>
  );
};

export default MyActivity;
