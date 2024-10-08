import { useEffect } from "react";

import { View } from "react-native";

import * as ScreenOrientation from "expo-screen-orientation";
import { RecoilRoot } from "recoil";

import RootRouter from "@/screens/RootRouter";

// if (__DEV__) {
//   import("../../ReactotronConfig").then(() => console.log("Reactotron Config"));
// }

export default function Index() {
  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    })();
  }, []);

  return (
    <RecoilRoot>
      <View
        style={{
          flex: 1
        }}
      >
        <RootRouter />
      </View>
    </RecoilRoot>
  );
}
