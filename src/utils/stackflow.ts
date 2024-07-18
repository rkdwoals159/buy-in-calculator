import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import MyActivity from "../pages/StartPage";
import LinkPage from "../pages/LinkPage";
import Article from "../pages/Article";
export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: { MyActivity, Article, LinkPage },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "MyActivity",
});
