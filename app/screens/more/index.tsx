import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, Button, BackHandler } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const App = () => {
  // ref
  const [isModal, setIsModal] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsModal(true);
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index < 0) {
      setIsModal(false);
    }
  }, []);
  useEffect(()=>{
    const handler = () =>{
      if (bottomSheetModalRef.current && isModal) {
        bottomSheetModalRef.current.dismiss();
        return true; // Prevent default back action
      }
      return false; // Allow default back action
    }
    BackHandler.addEventListener("hardwareBackPress", handler);
    return () => {  BackHandler.removeEventListener("hardwareBackPress", handler); }
  },[isModal])

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <Button onPress={handlePresentModalPress} title="Present Modal" color="black" />
        <BottomSheetModal snapPoints={[200, 500]} ref={bottomSheetModalRef} onChange={handleSheetChanges}>
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default App;
