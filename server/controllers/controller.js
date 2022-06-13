// // const pod = require('../db/MockDB.json')

// exports.getAll = async(req, res) => {
//   try {
//     // const podcasts = await pod.find();
//     res.status(201).json(podcasts);
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// };

// exports.poster = async (req, res) => {
//   try {
//     const postedEvent = await Event.create(req.body);
//     res.status(201).json(postedEvent);
//   } catch (error) {
//     res.status(400).json({ error });
//   }
//  };