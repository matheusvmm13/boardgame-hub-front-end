import { rest } from "msw";
import { loggedUser, mockedMatch, userRegistered } from "./mockedObjects";

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
            {
              _id: "622dcd8a87c35208164d62a6",
              handle: "scythe",
              url: "https://www.boardgameatlas.com/game/yqR4PtpO8X/scythe",
              name: "Scythe",
            },
          ],
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_PUBLIC_API}my-boardgames/622b0ae8a25d83e35893b3cc`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            _id: "622dcd8a87c35208164d62a6",
            handle: "scythe",
            url: "https://www.boardgameatlas.com/game/yqR4PtpO8X/scythe",
            name: "Scythe",
          },
        ])
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_PUBLIC_API}my-matches/6238cbdb3ae9bb76b01b7dbc`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            _id: "6238da4bcb6e77864e4495f1",
            gameTitle: "Sushi Go!",
            image:
              "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1632756769364",
            creator: "6238cbdb3ae9bb76b01b7dbc",
            date: "2022-03-27T17:30:00.000Z",
            players: ["6238cbdb3ae9bb76b01b7dbc"],
            maxPlayers: 5,
            location: "Carrer de Padilla, 255, 08013 Barcelona",
            id: "6238da4bcb6e77864e4495f1",
          },
          {
            _id: "6238de6bcb6e77864e44962f",
            gameTitle: "Tzolk'in: The Mayan Calendar",
            image:
              "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254183526-61f2BdYqPR4L.jpg",
            creator: "6238cbdb3ae9bb76b01b7dbc",
            date: "2022-03-24T00:20:00.000Z",
            players: ["6238cbdb3ae9bb76b01b7dbc"],
            maxPlayers: 4,
            location: "Avinguda Diagonal, 643, 08028 Barcelona",
            id: "6238de6bcb6e77864e44962f",
          },
        ])
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_PUBLIC_API}matches/62349fe9c93388f7b096ab02`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          match: {
            id: "62349fe9c93388f7b096ab02",
            gameTitle: "Ticket to Ride: Europe",
            image:
              "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg",
            creator: {},
            date: "2022-08-01",
            maxPlayers: 4,
            players: [],
            location: "Barcelona",
          },
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
    `${process.env.REACT_APP_PUBLIC_API}all-boardgames/add/622dcf0a87c35208164d62b1/622a4dc955c15b820edc9a45`,
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
            boardgames: ["622dcf0a87c35208164d62b1"],
            id: "622a4dc955c15b820edc9a45",
          },
        })
      );
    }
  ),

  rest.post(
    `${process.env.REACT_APP_PUBLIC_API}users/login`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(loggedUser.response));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_PUBLIC_API}users/signup`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(userRegistered.response));
    }
  ),

  rest.put(
    `${process.env.REACT_APP_PUBLIC_API}my-matches/edit/6233075705443313063349fd`,
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
