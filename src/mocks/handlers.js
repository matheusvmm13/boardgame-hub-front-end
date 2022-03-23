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
    `${process.env.REACT_APP_PUBLIC_API}my-matches/622b0ae8a25d83e35893b3cc`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            images: {
              thumb:
                "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1629324760985.jpg",
              small:
                "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1629324760985.jpg",
              medium:
                "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629324760985.jpg",
              large:
                "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1629324760985.jpg",
              original:
                "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324760985.jpg",
            },
            _id: "622dcd3487c35208164d62a2",
            handle: "root",
            url: "https://www.boardgameatlas.com/game/TAAifFP590/root",
            edit_url: "https://www.boardgameatlas.com/game/TAAifFP590/edit",
            name: "Root",
            price_ca: "60.96",
            price_uk: "43.73",
            price_au: "67.99",
            msrp: 60,
            discount: "0.20",
            year_published: 2018,
            min_players: 2,
            max_players: 4,
            min_playtime: 60,
            max_playtime: 90,
            min_age: 10,
            description:
              "<p>Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again.</p>",
            commentary:
              "<p>During a car ride, designer Cole and his wife were listening to an audio book of T. H. White's <strong>The Once and Future King</strong>. When the Monarch of Moat delivered the following line to Arthur, it spawned a series of ideas creating the framework for Root, a game of Might and Right: &quot;...There is only power. Power is of the individual mind, but the mind's power is not enough. Power of the body decides everything in the end, and only Might is Right.&quot;</p>",
            faq: '<p><strong>Who goes first?</strong></p>\n<p>According to the official rules, your group determines the starting player and seating order randomly (Rule 5.1.1). After the starting player finishes their turn, the next clockwise player begins their turn (Rule 1.5). A common house (unofficial) rule among fans is to have the Marquise (Cat) faction start the game especially at 4 or more player counts.</p>\n<p><strong>Is this a good 2-player game?</strong></p>\n<p>While some may still enjoy the 2-player gameplay (and I am one of them), it\'s not the ideal player count due to limited number of viable faction combinations. Every faction has an assigned "Reach Value" that represents the amount of influence they can have over the board state, and Leder Games recommends that the total Reach Value should equal or exceed the minimum indicated for the player count (see table below). For example, for 2-player gameplay using the base game, the only viable factions are Marquise and Eyrie.</p>\n<p><img class="w-50" src="https://d2k4q26owzy373.cloudfront.net/700x700/games/userfiles/1613783703105-root%20faction%20reach%20values.png" alt="" /></p>\n<p>If you want to have a fuller experience at a 2-player count, here are some options:</p>\n<ul>\n<li>Get <a class="game-preview" href="/game/AMEwdJGV5c/root-the-clockwork-expansion" data-tipped-options="ajax: {data: { ids: \'AMEwdJGV5c\', client_id: \'W0AQGbjlZE\' }}">Root: The Clockwork Expansion</a> - Adds simulated opponent(s). This also allows an option for cooperative play where you and a friend can team up against a bot on hard mode</li>\n<li>Get <a class="game-preview" href="/game/a9lyo08Quk/root-the-underworld-expansion" data-tipped-options="ajax: {data: { ids: \'a9lyo08Quk\', client_id: \'W0AQGbjlZE\' }}">Root: The Underworld Expansion</a> - Adds another viable faction, the Underground Duchy (Moles)</li>\n<li>Back <a class="game-preview" href="/game/0YEVy0ZiDD/root-the-marauder-expansion" data-tipped-options="ajax: {data: { ids: \'0YEVy0ZiDD\', client_id: \'W0AQGbjlZE\' }}">Root: The Marauder Expansion</a> on Kickstarter - Introduces two additional factions (Warlord and Stone Seekers) with high Reach Values. Adds "Hirelings" or minor factions on the board that you and your opponent can compete to influence</li>\n</ul>\n<p><strong>I have questions about the rules, what should I do?</strong></p>\n<p>Leder Games maintains a <a href="https://docs.google.com/document/d/1usz2D3BCurx2nKEOtDseCwNaFL7vOArvGHdrIt_KPio/edit">Google Doc</a> with answers to the most common rules-related questions. If this doesn\'t help, you can try sharing your question through any of these channels:</p>\n<ul>\n<li>Publisher\'s <a href="https://ledergames.com/pages/contact">Contact page</a></li>\n<li><a href="https://discord.com/invite/uRRRbXF">Woodland Warriors</a> Discord group&nbsp;</li>\n<li><a href="https://boardgamegeek.com/forum/2344730/root/rules">Root Forum</a> on BoardGameGeek</li>\n<li><a href="https://www.facebook.com/groups/rootbg">Root - Board Game</a> Facebook Group</li>\n<li><a href="https://www.reddit.com/r/rootgame/">r/rootgame</a> on Reddit</li>\n</ul>\n<p><strong>I own a copy of the game but I\'ve heard of balance updates, what should I do?</strong></p>\n<p>Leder Games has offered an update kit containing the minor changes to the boards. You can obtain this kit through one of their Kickstarters for a Root expansion, or print them for free and affix them yourself using this <a href="https://drive.google.com/file/d/1ErlgQGIQm_T4DFkDKJKiCkuyymZF6hpY/view">PDF</a>.</p>\n<p><strong>How do I know which printing my copy is?</strong></p>\n<p>This is indicated on the back of the box right next to the barcode.</p>\n<p><img class="w-50" src="https://d2k4q26owzy373.cloudfront.net/700x700/games/userfiles/1615869640644-root%20box%20barcode.png" alt="" /></p>\n<p><strong>Is there a way to play this online?</strong></p>\n<p>If you want an experience that closely mimics in-person gameplay, then <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1297678386">Tabletop Simulator has a mod</a> that will allow you and your friends to enjoy Root in a 3D tabletop environment. Otherwise, I\'d strongly recommend buying the <a href="https://www.direwolfdigital.com/root/">official digital adaptation</a> created by Dire Wolf Digital.</p>\n<ul>\n<li>Available for purchase on Steam, Nintendo Switch, iOS, and Android</li>\n<li>Modes available:\n<ul>\n<li>Tutorial</li>\n<li>Local Play - Includes solo play and unique challenges against AI opponents</li>\n<li>Online Play</li>\n</ul>\n</li>\n</ul>\n<p>Here\'s the official release trailer shared by Dire Wolf Digital back in August 18, 2020.</p>\n<div>\n<div class="d-block d-sm-none"><div class="iframe-placeholder" data-html="%3Ciframe%20src=%22https://www.youtube.com/embed/0D1thV6RF5A%22%20width=%22300%22%20height=%22170%22%20frameborder=%220%22%20allowfullscreen=%22allowfullscreen%22%20data-mce-fragment=%221%22%3E%3C/iframe%3E"></div></div>\n<div class="d-none d-sm-block"><div class="iframe-placeholder" data-html="%3Ciframe%20src=%22https://www.youtube.com/embed/0D1thV6RF5A%22%20width=%22560%22%20height=%22315%22%20frameborder=%220%22%20allowfullscreen=%22allowfullscreen%22%20data-mce-fragment=%221%22%3E%3C/iframe%3E"></div></div>\n</div>',
            thumb_url:
              "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/root-board-game.jpg?v=1611089915",
            image_url:
              "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324760985.jpg",
            matches_specs: null,
            specs: [],
            developers: [],
            related_to: [],
            artists: ["Kyle Ferrin"],
            names: [],
            rules_url:
              "https://drive.google.com/drive/folders/1i9-iCUDzfGMs7HjFHhahwMS6efvvfX5w",
            amazon_rank: 16636,
            official_url:
              "http://ledergames.com/root/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
            comment_count: 1,
            num_user_ratings: 385,
            average_user_rating: 4.071092365468892,
            weight_amount: 4,
            weight_units: "lbs ",
            size_height: 9,
            size_depth: 3,
            size_units: "inches ",
            active: true,
            num_user_complexity_votes: 11,
            average_learning_complexity: 3.818181818181818,
            average_strategy_complexity: 3.6363636363636362,
            visits: 29940,
            lists: 1731,
            mentions: 480,
            links: 68,
            plays: 2437,
            rank: 1,
            type: "game",
            sku: "LED01000",
            upc: "602573655900",
            isbn: "",
            video_links: [],
            availability_status: "Available",
            num_distributors: 6,
            trending_rank: 0,
            listing_clicks: 186,
            is_historical_low: false,
            msrp_text: "$60.00",
            tags: [
              "Корни",
              "茂林源记",
              "루트",
              "Root",
              "Root A Game of Woodland Might Right",
              "Root A Game of Woodland Might and Right",
              "Root Collection Base Game 5 Expansions Extras",
              "Root Collection Root The Riverfolk Expansion",
              "ROOT",
              "Root: A Game of Woodland Might and Right",
              "Root A Game of Woodland Might and Right w Resin Clearing Pack",
            ],
            description_preview:
              " Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again. ",
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
