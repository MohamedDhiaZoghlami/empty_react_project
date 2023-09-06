// aws-config.js
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "J9rTAr4gt9NJVOEgfPDj",
  secretAccessKey: "akVGoqmIsAK5vPgEY9O0iIvI9ALuzbdvgBqxxRgR",
  region: "eu-west-1",
  s3ForcePathStyle: true,
  s3BucketEndpoint: false,
  endpoint: "http://192.168.1.12:9000",
});

const s3 = new AWS.S3();
export default s3;
