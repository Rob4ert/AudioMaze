const express = require('express');
const router = express.Router();
const podcasts = require('./controllers/controller')
const fetch = require("isomorphic-fetch")
const { Client } = require('podcast-api');
const db = require('./db/index.js');
const Podcast = require("./db/schema")
const mockCat = require('./db/mockcat.json')
router.get("/mock", (req, res) => {
  fetch("https://listen-api-test.listennotes.com/api/v2//best_podcasts").then(
    async (response) => {
      const data = await response.json();
      res.status(200).send(data);
    }
  );
});
// router.get("/mock", (req, res) => {
// const client = Client({ apiKey: 'eb939f436a2e49cb9011d410a70d9f79' });
// client.fetchTrendingSearches({
// }).then((response) => {
//   const data = response
//   response.send(data)
//   console.log(response.data);
// }).catch((error) => {
//   console.log(error)
// });
// })



router.get("/genres", (req, res) => {
    fetch(" https://listen-api-test.listennotes.com/api/v2//genres").then(
      async (response) => {
        const data = await response.json();
        res.status(200).send(data);
      }
    );
  })

  router.get(`/podcasts/93`, (req, res) => {
    fetch(`https://listen-api-test.listennotes.com/api/v2//podcasts/93`).then(
      async (response) => {
        const data = await response.json();
        res.status(200).send(data);
      }
    );
    })

    router.get(`/recommendations/93`, (req, res) => {
      fetch(`https://listen-api-test.listennotes.com/api/v2//podcasts/20/recommendations`).then(
        async (response) => {
          const data = await response.json();
          res.status(200).send(data);
        }
      );
      })

      router.get(`/yours`, (req, res) => {
        fetch(`https://listen-api-test.listennotes.com/api/v2//just_listen`).then(
          async (response) => {
            const data = await response.json();
            res.status(200).send(data);
          }
        );
        })
  
      router.post('/stored', async (request, response) => {
          console.log(request.body.name)
          const tit = new Podcast({name: request.body.name})
          console.log(tit)
          try {await tit.save();
            response.send(tit)
          } catch (error) {
            response.status(500).send(error);
          }
        });
    
      router.get("/stored", (req, res) => {
        async (response) => {
          const data = await response.json();
          res.status(200).send(data);
          console.log(data)
        }
      }
      )
      
      const getUser = async (req, res) => {
        try {
          const response = await User.find({ }, { __v: 0 });
          res.status(201).send(response);
        } catch (error) {
          console.log(error);
          res.status(500).send({ error: 'error' });
        }
      };

      router.get("/cat", (req, res) => {
        data = res.json(mockCat)
        // async (response) => {
        //   const data = res.json(mockCat)
          res.status(200).send(data);
          console.log(data)
        }
      )



  module.exports = router;