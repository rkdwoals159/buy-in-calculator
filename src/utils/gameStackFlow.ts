import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import GamePage from "../pages/game/GamePage";
import MyPage from "../pages/game/Mypage";

export const { Stack: GameStack, useFlow: GameUseFlow } = stackflow({
  transitionDuration: 350,
  activities: { GamePage, MyPage },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "GamePage",
});
