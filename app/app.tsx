import { StatusBar } from "expo-status-bar";
import { Platform, StatusBar as RNStatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function App() {
	return (
		<SafeAreaView style={[styles.container, { paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0 }]}>
			<StatusBar style="dark" />
			<WebView source={{ uri: "https://college-project-nu-silk.vercel.app" }} style={styles.webview} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	webview: { flex: 1 }
});
