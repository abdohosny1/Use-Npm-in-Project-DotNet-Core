// Configure your AWS credentials and region
AWS.config.credentials = new AWS.Credentials({
    accessKeyId: "YourAccessKey",
    secretAccessKey: "YourSecretKey",
});

AWS.config.region = "us-east-1"; // Replace with your desired AWS region

// Create an S3 client
const s3 = new AWS.S3();

// Use the S3 client to interact with Amazon S3 (e.g., list buckets, upload/download objects, etc.)
const params = {
    Bucket: "your-bucket-name",
};

s3.listBuckets(params, (err, data) => {
    if (err) {
        console.error("Error listing buckets:", err);
    } else {
        console.log("Buckets:", data.Buckets);
    }
});
