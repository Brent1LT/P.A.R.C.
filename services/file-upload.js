const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const keys = require("../config/keys");
aws.config.update({
  secretAccessKey: keys.awsSecret,
  accessKeyId: keys.awsAccess,
  region: "us-east-2"
});

const s3 = new aws.S3();

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ){
//     cb(null, true);
//   }else{
//     cb(new Error('Invalid File Type, only JPEG and PNG'), false);
//   }
// };

const upload = multer({
  // fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: "parc-web-app-dev",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING META DATA" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
