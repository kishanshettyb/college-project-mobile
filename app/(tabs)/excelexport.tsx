import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Platform, StatusBar as RNStatusBar, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

const exportexcel = () => {
	const isFocused = useIsFocused();
	const [webViewKey, setWebViewKey] = useState(0);

	useEffect(() => {
		if (isFocused) {
			// Update key to force WebView reload every time tab is focused
			setWebViewKey((prevKey) => prevKey + 1);
		}
	}, [isFocused]);
	return (
		<SafeAreaView style={[styles.container, { paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0 }]} edges={["left", "right", "bottom"]}>
			<StatusBar style="dark" />
			<WebView key={webViewKey} source={{ uri: "https://college-project-nu-silk.vercel.app/dashboard/excel" }} style={styles.webview} />
		</SafeAreaView>
	);
};

export default exportexcel;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff" // optional for better contrast
	},
	webview: {
		flex: 1
	}
});
