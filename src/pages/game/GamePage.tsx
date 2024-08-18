import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { GameUseFlow } from "../../utils/gameStackFlow";
// import { useParams } from "react-router";
import UserCard from "../../components/userCard";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getGameParticipants } from "../../api/game";

interface gameType {
  id: string;
  settlementAmount: number;
  title: string;
  totalBindFee: number;
}
const GamePage: ActivityComponentType = () => {
  const router = useNavigate();
  const { push } = GameUseFlow();
  const params = useParams();
  const [game, setGame] = useState<gameType>();
  const [userList, setUserList] = useState([]);
  console.log(userList);
  const onClick = () => {
    push("MyPage", {
      title: "Hello",
    });
  };
  useEffect(() => {
    authCheck();
  });
  const fetchGame = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/games/${params.cardId}`
      );
      setGame(response.data);
      const participantsData = await getGameParticipants(params.cardId!);
      console.log(participantsData);
      setUserList(participantsData);
    } catch (error) {
      console.error("게임 정보를 불러오는데 실패했습니다:", error);
    }
  };
  const authCheck = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      if (params.cardId) router("/signIn");
      router("/" + params.cardId);
    }
  };

  useEffect(() => {
    fetchGame();
  }, []);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <AppScreen appBar={{ title: "바인비 계산기" }}>
      <article className="dark : text-black relative w-full h-full flex flex-col items-center">
        <div className="flex w-full justify-between p-[2rem] py-[1rem]">
          <button
            onClick={onClick}
            className="dark:text-white border border-blue rounded-lg "
          >
            내 바인 관리
          </button>
          <button
            onClick={async () => await fetchGame()}
            className="dark:text-white border border-yellow rounded-lg "
          >
            새로고침
          </button>
        </div>
        <div className="w-full pt-[2rem] border-y pb-[1rem]">
          <header className=" font-bold text-[1.5rem]">
            <div>총 바인비 : {game.totalBindFee || 0}원</div>
            <div>정산액 합계 : {game.settlementAmount || 0}원</div>
          </header>
        </div>

        <section className="flex-1 flex flex-col w-full items-center justify-start overflow-auto p-[1rem]">
          <div className="font-bold text-[1rem] mb-[1rem]">참가자</div>
          <div className="grid grid-cols-2 gap-[1rem]">
            {userList.map((userData, idx) => (
              <UserCard key={idx} />
            ))}
          </div>
        </section>
      </article>
    </AppScreen>
  );
};

export default GamePage;
