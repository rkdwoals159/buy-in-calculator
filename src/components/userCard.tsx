export default function UserCard() {
  return (
    <div className="w-[10rem] dark:text-black dark:border-black rounded-lg flex flex-col border p-[1rem]">
      <span className="text-blue">강재민</span>
      <span>현재 바인 0회</span>
      <span>총 바인비 0원</span>
      <span className="text-red">정산액 0원</span>
    </div>
  );
}
