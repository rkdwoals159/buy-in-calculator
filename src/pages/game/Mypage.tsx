import { useState, useEffect, useCallback } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { addBuyin, getBuyins, settleGame } from "../../api/game";
import { useParams } from "react-router-dom";

type MyPageParams = {
  title: string;
  linkUrl?: string;
};
export type BuyinType = {
  id: string;
  gameId: string;
  userId: number;
  amount: number;
  createdAt: "2024-07-21T17:36:38.552Z";
  user: {
    id: number;
    createdAt: string;
    name: string;
    password: string;
    bindCount: number;
    bindFee: number;
    settlementAmount: number;
    gameId: null;
  };
};
export type addBuyinType = {
  amount: number;
  createdAt: string;
  gameId: string;
  id: string;
  userId: number;
};
const MyPage: ActivityComponentType<MyPageParams> = () => {
  const userId = Number(localStorage.getItem("userId"));
  const params = useParams();
  const gameId = params.cardId;
  const [buyinList, setBuyinList] = useState<BuyinType[]>([]);
  const [buyinAmount, setBuyinAmount] = useState<number>(0);

  const [settleAmount, setSettleAmount] = useState<number>(0);

  const fetchBuyins = useCallback(async () => {
    try {
      const buyins = await getBuyins(gameId || "");
      setBuyinList(buyins);
    } catch (error) {
      console.error("Failed to fetch buyins:", error);
    }
  }, [gameId]);
  useEffect(() => {
    fetchBuyins();
  }, [fetchBuyins]);

  const buyinHandler = async () => {
    const answer = confirm("바이인 하시겠습니까?");
    if (answer) {
      try {
        const buyin = await addBuyin(
          gameId || "",
          userId,
          buyinAmount,
          buyinList.length + 1
        );
        console.log("Buyin added:", buyin);
        fetchBuyins();
      } catch (error) {
        console.error("Failed to add buyin:", error);
      }
    }
  };

  const exitHandler = async () => {
    const answer = confirm("바이인을 종료하시겠습니까?");
    if (answer) {
      try {
        const response = await settleGame(gameId || "", settleAmount);
        console.log("Game settled:", response);
      } catch (error) {
        console.error("Failed to settle game:", error);
      }
    }
  };

  return (
    <AppScreen appBar={{ title: "내 바인 관리" }}>
      <article className="dark: text-black w-full h-full flex flex-col justify-center">
        <div className="w-full p-[2rem] flex flex-col gap-[0.5rem]">
          <div>바이인 금액 : </div>
          <input
            className="border rounded-lg mx-[2rem] dark:bg-white dark:text-black px-2"
            type="number"
            value={buyinAmount}
            onChange={(e) => setBuyinAmount(Number(e.target.value))}
          />
          <button
            onClick={buyinHandler}
            className="bg-orange mx-[2rem] dark:text-white"
          >
            바이인 하기
          </button>
        </div>

        <section className=" flex-1 flex flex-col w-full items-center justify-start gap-x-[1rem] px-[2rem]">
          <div>현재 {buyinList.length}회 바이인했습니다.</div>
          <div className="py-[0.5rem]">
            내 총 바이인 금액 :{" "}
            {buyinList
              .map((buyin) => buyin.amount)
              .reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              }, 0)}
            원
          </div>
          {buyinList.map((buyin, index) => (
            <div className="flex w-full gap-[0.5rem] p-4" key={index}>
              <span>{index + 1}회차 바이인 : </span>
              <div className="flex-1 border rounded-lg dark:bg-white dark:text-black px-2">
                {buyin.amount}
              </div>
            </div>
          ))}
        </section>
        <div className="w-full p-[2rem] flex flex-col gap-[0.5rem]">
          <div>정산요청 금액 : </div>
          <input
            className="border rounded-lg mx-[2rem] dark:bg-white dark:text-black px-2"
            type="number"
            value={settleAmount}
            onChange={(e) => setSettleAmount(Number(e.target.value))}
          />
          <button
            onClick={exitHandler}
            className="bg-red mx-[2rem] dark:text-white"
          >
            바이인 종료
          </button>
        </div>
      </article>
    </AppScreen>
  );
};

export default MyPage;
