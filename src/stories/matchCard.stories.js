import React from "react";
import MatchCard from "../components/matchCard/MatchCard";

export default {
  title: "Match Card",
  component: MatchCard,
};

const Template = (args) => <MatchCard {...args} />;

export const MatchCardComponent = Template.bind({});
MatchCardComponent.args = {
  gameTitle: "Dune",
  image:
    "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg",
  date: "10-03-2022",
  maxPlayers: 4,
  players: ["", "", ""],
  location: "Madrid",
};
