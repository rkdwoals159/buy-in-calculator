import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { handleCopyClipBoard } from "../utils/cilpboard";
import { Link } from "react-router-dom";
type LinkPageParams = {
  title: string;
  linkUrl?: string;
};
const LinkPage: ActivityComponentType<LinkPageParams> = ({ params }) => {
  return (
    <AppScreen appBar={{ title: "바인비 계산기" }}>
      <article className="w-full h-full flex flex-col justify-center">
        <section className="flex-1 flex flex-col w-full items-center justify-center gap-[1rem]">
          <input type="text" disabled value={params.linkUrl} />
          <button
            onClick={() => {
              handleCopyClipBoard(params.linkUrl || "");
            }}
          >
            복사하기
          </button>
          <Link to={params.linkUrl || ""}>해당 링크로 이동</Link>
        </section>
      </article>
    </AppScreen>
  );
};

export default LinkPage;
