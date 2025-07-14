'use server'

import { SNSClient, PublishCommand, SNSServiceException } from '@aws-sdk/client-sns';
import { z } from 'zod';

const snsClient = new SNSClient({
    region: 'us-west-2',
});

const contactFormSchema = z.object({
    fromEmail: z.string().email({ message: "Invalid email address." }),
    message: z.string().max(1000, { message: "Message cannot be more than 1000 characters long." }),
});

export interface SNSProps {
    fromEmail: string,
    message: string,
}

export default async function PubSNS({ fromEmail, message }: SNSProps) {
    if (!process.env.CONTACT_TOPIC_ARN) {
        console.error('CONTACT_TOPIC_ARN environment variable is not set.');
        return { error: "Server configuration error. Unable to send message." };
    }

    const inputValidationResult = contactFormSchema.safeParse({ fromEmail, message });
    if (!inputValidationResult.success) {
        return { error: inputValidationResult.error };
    }

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
            console.error(error.name, error.message)
            return { error: "Message could not be sent due to an error with the service." };
        }
        console.error("Error publishing to SNS: ", error);
        return { error: "An unexpected error occurred.  Please try again later, and hopefully I've fixed it by then." };

    }
}
