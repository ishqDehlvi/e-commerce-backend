module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4843fde9953c555b65f9ca4112a90c69'),
  },
});
