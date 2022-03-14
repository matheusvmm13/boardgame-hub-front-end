import { Provider } from "react-redux";
import BoardgameCard from "../components/boardgameCard/BoardgameCard";
import store from "../redux/store";

export default {
  title: "Boardgame Card",
  component: BoardgameCard,
};

const Template = (args) => (
  <Provider store={store}>
    <BoardgameCard {...args} />
  </Provider>
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
