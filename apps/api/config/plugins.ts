export default ({ env }) => ({
  // @Feature
  // email: {
  //   config: {
  //     provider: 'nodemailer',
  //     providerOptions: {
  //       host: env('SMTP_HOST'),
  //       port: env('SMTP_PORT', 587),
  //       auth: {
  //         user: env('AUTH_EMAIL'),
  //         pass: env('AUTH_EMAIL_APP_PASS'),
  //       },
  //       // ... any custom nodemailer options
  //     },
  //     settings: {
  //       defaultFrom: env('AUTH_EMAIL'),
  //       defaultReplyTo: env('AUTH_EMAIL'),
  //     },
  //   },
  // },
  upload: {
    config: {
      sizeLimit: 2 * 1024 * 1024, // 2 MB
      providerOptions: {
        localServer: {},
      },
    },
  },
});
