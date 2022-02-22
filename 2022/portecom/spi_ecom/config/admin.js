module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '47ef8a5fb9eb69d54b55654ed6a00c72'),
  },
});
