'use server'

import { SNSClient, PublishCommand, SNSServiceException } from '@aws-sdk/client-sns';

const snsClient = new SNSClient({
    region: 'us-west-2',
});

export interface SNSProps {
    fromEmail: string,
    message: string,
}

export default async function PubSNS({ fromEmail, message }: SNSProps) {
    const messageBody = `${fromEmail}: ${message}`

    const params = {
        Message: messageBody,
        TopicArn: process.env.CONTACT_TOPIC_ARN!,
    };

    try {
        const command = new PublishCommand(params);
        const response = await snsClient.send(command);
        return { httpStatusCode: response.$metadata.httpStatusCode };
    } catch (error) {
        if (error instanceof SNSServiceException) {
            return { error: error.name };
        }

        return { error: error };

    }
}
