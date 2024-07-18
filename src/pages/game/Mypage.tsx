import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

type MyPageParams = {
  title: string;
  linkUrl?: string;
};
const MyPage: ActivityComponentType<MyPageParams> = () => {
  const buyinList = [1, 2, 3, 4, 5];
  const buyinHandler = () => {
    const answer = confirm("바이인 하시겠습니까?");
    if (answer) {
    }
  };
  const exitHandler = () => {
    const answer = confirm("바이인을 종료하시겠습니까?");
    if (answer) {
    }
  };
  return (
    <AppScreen appBar={{ title: "내 바인 관리" }}>
      <article className="w-full h-full flex flex-col justify-center">
        <div className="w-full p-[2rem] flex flex-col gap-[0.5rem]">
          <div>바이인 금액 : </div>
          <input className="border rounded-lg mx-[2rem]" type="number" />
          <button onClick={buyinHandler} className="bg-orange mx-[2rem]">
            바이인 하기
          </button>
        </div>

        <section className=" flex-1 flex flex-col w-full items-center justify-start gap-[1rem]">
          <div>현재 {buyinList.length}회 바이인했습니다.</div>
          <div>
            내 총 바이인 금액 :{" "}
            {buyinList.reduce((accumulator, currentValue) => {
              return accumulator + currentValue;
            }, 0)}
            원
          </div>
          {buyinList.map((buyin, index) => (
            <div>
              <span>{index + 1}회차 바이인 : </span>
              <input disabled type="number" value={buyin} />
            </div>
          ))}
        </section>
        <div className="w-full p-[2rem] flex flex-col gap-[0.5rem]">
          <div>정산요청 금액 : </div>
          <input className="border rounded-lg mx-[2rem]" type="number" />
          <button onClick={exitHandler} className="bg-red mx-[2rem]">
            바이인 종료
          </button>
        </div>
      </article>
    </AppScreen>
  );
};

export default MyPage;
