module.exports = ({ env }) => {
  return {
    seo: {
      enabled: true,
    },
    ckeditor: true,
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          params: {
            Bucket: env("AWS_BUCKET_NAME"),
          },
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    placeholder: {
      enabled: true,
      config: {
        size: 10,
      },
    },
    "strapi-plugin-populate-deep": {
      config: {
        defaultDepth: 4, // Default is 5
      },
    },
    "duplicate-button": true,
  };
};
