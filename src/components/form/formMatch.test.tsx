import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import FormMatch from "./FormMatch";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

jest.mock("jwt-decode", () => () => ({
  name: "Lina Bo",
  id: "622b0ae8a25d83e35893b3cc",
  iat: 1647183996,
}));

/*
const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
}); */

describe("Given a form component", () => {
  describe("When it's rendered", () => {
    test("It should display a form", () => {
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        users: {
          isLoggedin: true,
          boardgames: [
            {
              images: {
                thumb:
                  "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
                small:
                  "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
                medium:
                  "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
                large:
                  "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
                original:
                  "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
              },
              _id: "622dcdf187c35208164d62aa",
              handle: "gloomhaven",
              url: "https://www.boardgameatlas.com/game/RLlDWHh7hR/gloomhaven",
              edit_url: "https://www.boardgameatlas.com/game/RLlDWHh7hR/edit",
              name: "Gloomhaven",
              price_ca: "129.95",
              price_uk: "99.99",
              price_au: "184.95",
              msrp: 140,
              discount: "0.20",
              year_published: 2017,
              min_players: 1,
              max_players: 4,
              min_playtime: 60,
              max_playtime: 150,
              min_age: 12,
              description:
                "<p><strong>Gloomhaven</strong> is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.<br /><br />Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.<br /><br />This is a legacy game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a &quot;Choose Your Own Adventure&quot; book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn.</p>",
              commentary:
                "<p>After the 1st Kickstarter raised $386,104 from 4,904 backers, this 22 lb monster of a box opened to critical acclaim and went onto raise another $4M from over 40,000 backers for its second print run.</p>",
              faq: '<p><strong>How do you play this game?</strong></p>\r\n<p>Here\'s a how-to-play video by Shea of RTFM:</p>\r\n<div>\r\n<div class="d-block d-sm-none"><div class="iframe-placeholder" data-html="%3Ciframe%20src=%22https://www.youtube.com/embed/Uw7LI2esvp0%22%20width=%22300%22%20height=%22170%22%20frameborder=%220%22%20allowfullscreen=%22allowfullscreen%22%20data-mce-fragment=%221%22%3E%3C/iframe%3E"></div></div>\r\n<div class="d-none d-sm-block"><div class="iframe-placeholder" data-html="%3Ciframe%20src=%22https://www.youtube.com/embed/Uw7LI2esvp0%22%20width=%22560%22%20height=%22315%22%20frameborder=%220%22%20allowfullscreen=%22allowfullscreen%22%20data-mce-fragment=%221%22%3E%3C/iframe%3E"></div></div>\r\n</div>',
              thumb_url:
                "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
              image_url:
                "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
              matches_specs: null,
              specs: [],
              developers: [],
              related_to: [],
              artists: ["Alexandr Elichev", "Josh T. McDowell", "Alvaro Nebot"],
              names: [],
              rules_url: "https://online.flippingbook.com/view/598058/",
              amazon_rank: 4,
              cs_rating: 4.3,
              official_url:
                "http://www.cephalofair.com/gloomhaven?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
              sell_sheet_url: null,
              store_images_url: null,
              comment_count: 0,
              num_user_ratings: 459,
              average_user_rating: 4.361748366013072,
              size_height: 16.2,
              active: true,
              num_user_complexity_votes: 10,
              average_learning_complexity: 3.9,
              average_strategy_complexity: 3.5999999999999996,
              visits: 15043,
              lists: 1672,
              mentions: 329,
              links: 31,
              plays: 8551,
              rank: 4,
              type: "game",
              sku: "CPH0201",
              upc: "019962194719",
              num_distributors: 4,
              trending_rank: 0,
              listing_clicks: 37,
              is_historical_low: false,
              msrp_text: "$140.00",
              tags: [
                "Homályrév",
                "幽港迷城",
                "글룸헤이븐",
                "Gloomhaven",
                "Gloomhaven Fifth Printing",
                "Gloomhaven Revised Edition",
                "Gloomhaven 2nd Edition",
                "Gloomhaven 2nd Printing w Removable Sticker Set",
                "Gloomhaven Second Edition Fourth Printing",
                "GLOOMHAVEN",
                "Gloomhaven Boxed",
              ],
              description_preview:
                '  Gloomhaven  is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.  Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.  This is a legacy game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a "Choose Your Own Adventure" book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn. ',
              id: "622dcdf187c35208164d62aa",
            },
          ],
        },
      });

      render(
        <BrowserRouter>
          <Provider store={storeMock}>
            <FormMatch />
          </Provider>
        </BrowserRouter>
      );

      const textField = screen.queryByRole("combobox", {
        name: /Choose one of your games/i,
      });

      expect(textField).not.toBeInTheDocument();
    });
  });
});
