const data = [
    {
        name: "Paid",
        counts: 15,
        color: "#ffe2ec",
        legendFontColor: "#fff",
        legendFontSize: 15
    },
    {
        name: "Free",
        counts: 45,
        color: "#f89a54",
        legendFontColor: "#fff",
        legendFontSize: 15
    },
];
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};
export {
    data as reveneue_data,
    chartConfig
}