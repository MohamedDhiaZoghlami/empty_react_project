// aws-config.js
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "J9rTAr4gt9NJVOEgfPDj",
  secretAccessKey: "akVGoqmIsAK5vPgEY9O0iIvI9ALuzbdvgBqxxRgR",
  region: "eu-west-1",
  s3ForcePathStyle: true,
  s3BucketEndpoint: false,
  endpoint: "https://scorpion-modest-robin.ngrok-free.app",
});

const s3 = new AWS.S3();
export default s3;
