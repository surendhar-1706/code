module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d0e6e7974bf975228e4e702528a547e'),
  },
});
