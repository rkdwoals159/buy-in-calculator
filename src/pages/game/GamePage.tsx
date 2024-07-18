import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { GameUseFlow } from "../../utils/gameStackFlow";
import { useParams } from "react-router";
import UserCard from "../../components/userCard";

const GamePage: ActivityComponentType = () => {
  const { push } = GameUseFlow();
  const params = useParams();
  const onClick = () => {
    push("MyPage", {
      title: "Hello",
    });
  };
  const userList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23, 2, 2, 2, 2];
  return (
    <AppScreen appBar={{ title: "바인비 계산기" }}>
      <article className="relative w-full h-full flex flex-col items-center">
        <div className="flex w-full justify-start p-[2rem] py-[1rem]">
          <button onClick={onClick} className=" border border-blue rounded-lg ">
            내 바인 관리
          </button>
        </div>
        <div className="w-full pt-[2rem] border-y pb-[1rem]">
          <header className=" font-bold text-[1.5rem]">
            <div>총 바인비 : 0원</div>
            <div>정산액 합계 : 0원</div>
          </header>
        </div>

        <section className="flex-1 flex flex-col w-full items-center justify-start overflow-auto p-[1rem]">
          <div className="font-bold text-[1rem] mb-[1rem]">참가자</div>
          <div className="grid grid-cols-2 gap-[1rem]">
            {userList.map(() => (
              <UserCard />
            ))}
          </div>
        </section>
      </article>
    </AppScreen>
  );
};

export default GamePage;
