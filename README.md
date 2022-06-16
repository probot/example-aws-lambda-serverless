# Probot & AWS Lambda example

This repository is an example of how to deploy the "Hello, World" of probot apps to [AWS Lambda](https://aws.amazon.com/lambda/) using [serverless](https://www.serverless.com/).

## Local setup

Install dependencies

```
npm install
```

Start the server

```
npm start
```

Follow the instructions to register a new GitHub app.

## Deployment

In order to deploy the app from you local environment, follow the [Serverless user guide for AWS](https://www.serverless.com/framework/docs/providers/aws/guide/quick-start/).

If you use this example as a template, make sure to update [`serverless.yml`](serverless.yml) and set new values for

- `service`
- `app`
- `org`

Make sure to create the following parameters on [https://app.serverless.com](https://app.serverless.com):

- `APP_ID`
- `PRIVATE_KEY`
- `WEBHOOK_SECRET`

For continuous deployment via GitHub action, copy [this repository's deploy workflow](.github/workflows/deploy.yml) and create the following secrets:

1. `SERVERLESS_ACCESS_KEY` - You can create a Serverless access key at `https://app.serverless.com/<your org>/settings/accessKeys`
2. `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` - you will likely find your AWS credentials in `~/.aws/credentials`

### Debug via unit tests
1. Intall nyc and mocha: `npm install -g nyc mocha`
1. From the VSCode `RUN AND DEBUG` menu select `Mocha` and click the green arrow to start debugging.

### Debug by launching probot locally and sending it a payload 

1. Point your GitHub app to your local using something like smee.io
1. Copy .env-sample to .env and populate with values specific for your GitHub app. For the `PRIVATE_KEY` replace newlines with `\\n` to make the string value a single line.
1. From the VSCode `RUN AND DEBUG` menu select `Launch Probot` and click the green arrow to start debugging.

## License

[ISC](LICENSE)
