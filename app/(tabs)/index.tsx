import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StatusBar as RNStatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
const hoemurl = process.env.EXPO_PUBLIC_DASHBOARD_URL;

export default function App() {
	return (
		<SafeAreaView style={[styles.container, { paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0 }]} edges={["left", "right", "bottom"]}>
			<StatusBar style="dark" />
			<WebView source={{ uri: "https://college-project-nu-silk.vercel.app" }} style={styles.webview} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff" // optional for better contrast
	},
	webview: {
		flex: 1
	}
});
