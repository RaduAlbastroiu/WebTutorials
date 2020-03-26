const passport = require('passport');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 499,
      currency: 'usd',
      description: '$$$',
      source: req.body.id
    });

    console.log(charge);
  });
};
