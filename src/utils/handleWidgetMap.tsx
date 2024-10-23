import Wrapper from "../components/graph/wrapper";
import PieGraph from "../components/graph/pie";
import LineGraph from "../components/graph/line";
import AreaGraph from "../components/graph/area";
import BarGraph from "../components/graph/bar";

import Data from "../assets/dashboard.json";

export const WidgetMap = (element: string, title: string, key: string) => {
    switch (element) {
        case "PIE":
            return (
                <Wrapper content={{ title, key, element }} >
                    <PieGraph data={Data.data} />
                </Wrapper>
            );
        case "LINE":
            return (
                <Wrapper content={{ title, key, element }}>
                    <LineGraph data={Data.data} />
                </Wrapper>
            );
        case "AREA":
            return (
                <Wrapper content={{ title, key, element }}>
                    <AreaGraph data={Data.data} />
                </Wrapper>
            );
        case "BAR":
            return (
                <Wrapper content={{ title, key, element }}>
                    <BarGraph data={Data.data} />
                </Wrapper>
            );
        default:
            return <Wrapper content={{ title, key, element }}>Unknown widget</Wrapper>;
    }
};