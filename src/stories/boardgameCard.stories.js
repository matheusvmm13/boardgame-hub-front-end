import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import BoardgameCard from "../components/boardgameCard/BoardgameCard";
import store from "../redux/store";
import theme from "../themes/theme";

export default {
  title: "Boardgame Card",
  component: BoardgameCard,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <BoardgameCard {...args} />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);

export const BoardgameCardComponent = Template.bind({});
BoardgameCardComponent.args = {
  name: "Root",
  image_url:
    "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324760985.jpg",
  min_players: 2,
  max_players: 4,
  max_playtime: 90,
  _id: "622dcd3487c35208164d62a2",
};
