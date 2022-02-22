module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2d9275e56359454a5cb365d090bdac4c'),
  },
});
