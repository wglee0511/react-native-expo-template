import { Text, View } from "react-native";

import { RecoilRoot } from "recoil";

// if (__DEV__) {
//   import("../../ReactotronConfig").then(() => console.log("Reactotron Config"));
// }

export default function Index() {
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
