import { rest } from "msw";
import { mockedMatch } from "./mockedObjects";

export const handlers = [
  rest.get(`${process.env.REACT_APP_PUBLIC_API}matches`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        matches: [
          {
            _id: "6228e6045f993b30541b3dd6",
            gameTitle: "Spirit Island",
            image:
              "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg",
            creator: {
              _id: "622a34ef55c15b820edc9a3e",
              name: "Eric Lang",
              username: "ericrage",
              picture:
                "https://cf.geekdo-images.com/0B3BF9BtfsopNybuP3GK-w__imagepage/img/iy0CsTSvAOoAzxzoOFtnKDoTCsQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2342125.jpg",
              id: "622a34ef55c15b820edc9a3e",
            },
            date: "2022-04-16T00:00:00.000Z",
            maxPlayers: 5,
            location: "Carrer de Sans, Barcelona",
            players: [
              {
                _id: "622a34ef55c15b820edc9a3e",
                name: "Eric Lang",
                username: "ericrage",
                picture:
                  "https://cf.geekdo-images.com/0B3BF9BtfsopNybuP3GK-w__imagepage/img/iy0CsTSvAOoAzxzoOFtnKDoTCsQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2342125.jpg",
                id: "622a34ef55c15b820edc9a3e",
              },
              {
                _id: "622b0ae8a25d83e35893b3cc",
                name: "Lina Bo",
                username: "libogamer",
                picture:
                  "https://cf.geekdo-images.com/0B3BF9BtfsopNybuP3GK-w__imagepage/img/iy0CsTSvAOoAzxzoOFtnKDoTCsQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2342125.jpg",
                id: "622b0ae8a25d83e35893b3cc",
              },
            ],
            id: "6228e6045f993b30541b3dd6",
          },
        ],
      })
    );
  }),

  rest.get(
    `${process.env.REACT_APP_PUBLIC_API}all-boardgames`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          boardgames: [
            {
              _id: "622dcd3487c35208164d62a2",
              handle: "root",
              url: "https://www.boardgameatlas.com/game/TAAifFP590/root",
              name: "Root",
            },
          ],
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_PUBLIC_API}my-matches/622dcd3487c35208164d62a2`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: "622dcd3487c35208164d62a2",
          gameTitle: "Root",
          image:
            "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg",
          creator: "",
          date: "2022-08-01",
          maxPlayers: 4,
          players: ["", ""],
          location: "Barcelona",
        })
      );
    }
  ),

  rest.post(
    `${process.env.REACT_APP_PUBLIC_API}my-matches/new-match`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockedMatch[0]));
    }
  ),

  rest.patch(
    `${process.env.REACT_APP_PUBLIC_API}all-boardgames/add/622dd09e87c35208164d62c3/622a34ef55c15b820edc9a3e`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          userData: {
            _id: "622a34ef55c15b820edc9a3e",
            name: "Eric Lang",
            username: "ericrage",
            picture:
              "https://cf.geekdo-images.com/0B3BF9BtfsopNybuP3GK-w__imagepage/img/iy0CsTSvAOoAzxzoOFtnKDoTCsQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2342125.jpg",
            matches: ["62288d05c84b1704c29341e8"],
            boardgames: [
              "622dcd8a87c35208164d62a6",
              "622dd09e87c35208164d62c3",
            ],
            id: "622a4dc955c15b820edc9a45",
          },
        })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_PUBLIC_API}my-matches/delete/531452`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: "531452",
          gameTitle: "Carcassone",
          image: "",
          creator: "username2",
          date: "march 2020",
          maxPlayers: 4,
          players: ["", "", ""],
          location: "Barcelona",
        })
      );
    }
  ),
];
