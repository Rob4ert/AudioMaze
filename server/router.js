const express = require('express');
const router = express.Router();
const podcasts = require('./controllers/controller')
const fetch = require("isomorphic-fetch")

router.get("/mock", (req, res) => {
  fetch("https://listen-api-test.listennotes.com/api/v2//best_podcasts").then(
    async (response) => {
      const data = await response.json();
      res.status(200).send(data);
    }
  );
});


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
        fetch(`https://listen-api-test.listennotes.com/api/v2/episodes/93`).then(
          async (response) => {
            const data = await response.json();
            res.status(200).send(data);
          }
        );
        })
  
    
  module.exports = router;