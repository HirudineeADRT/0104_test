let AWS = require('aws-sdk');
const sqs = new AWS.SQS();
const s3 = new AWS.S3();
const rekognition = new AWS.Rekognition();
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    try {
        let data = await sqs.receiveMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/testqueue.fifo`,
            MaxNumberOfMessages: 1,
            VisibilityTimeout: 30,
            WaitTimeSeconds: 0,
            AttributeNames: ['All']
        }).promise();

    } catch (err) {
        // error handling goes here
    };




    return { "message": "Successfully executed" };
};