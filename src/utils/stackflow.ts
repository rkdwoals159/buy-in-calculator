import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import StartPage from "../pages/StartPage";
import LinkPage from "../pages/LinkPage";
import Article from "../pages/Article";
import SignUpPage from "../pages/signup/SignUpPage";
import SignInPage from "../pages/signIn/signInPage";
export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: { StartPage, Article, LinkPage, SignUpPage, SignInPage },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "SignInPage",
});
