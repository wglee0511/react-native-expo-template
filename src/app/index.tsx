import { useEffect } from "react";

import { Text, View } from "react-native";

import * as ScreenOrientation from "expo-screen-orientation";
import { RecoilRoot } from "recoil";

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
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </RecoilRoot>
  );
}
