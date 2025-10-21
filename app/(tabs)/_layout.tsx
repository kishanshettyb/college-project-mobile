import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute"
					},
					default: {}
				})
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <Feather name="home" size={24} color="black" />
				}}
			/>
			<Tabs.Screen
				name="googledata"
				options={{
					title: "Students Data",
					tabBarIcon: ({ color }) => <Feather name="users" size={24} color="black" />
				}}
			/>
			<Tabs.Screen
				name="excelexport"
				options={{
					title: "Export",
					tabBarIcon: ({ color }) => <Feather name="file" size={24} color="black" />
				}}
			/>
			<Tabs.Screen
				name="analysis"
				options={{
					title: "Analysis",
					tabBarIcon: ({ color }) => <Feather name="bar-chart" size={24} color="black" />
				}}
			/>
		</Tabs>
	);
}
