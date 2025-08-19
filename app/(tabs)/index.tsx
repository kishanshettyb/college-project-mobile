import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="light" />
			<WebView source={{ uri: "https://reactnative.dev" }} style={{ flex: 1 }} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
