import { NextRequest, NextResponse } from 'next/server';
import { SNSClient, PublishCommand, SNSServiceException } from '@aws-sdk/client-sns';

const snsClient = new SNSClient({
    region: 'us-west-2',
});

export async function POST(req: NextRequest) {
    const emailBody = await req.json();

    const params = {
        Message: emailBody,
        TopicArn: process.env.CONTACT_TOPIC_ARN!,
    };

    try {
        const command = new PublishCommand(params);
        const response = await snsClient.send(command);

        return NextResponse.json({ status: response.$metadata.httpStatusCode });
    } catch (error) {
        if (error instanceof SNSServiceException) {
            return NextResponse.json({ error: error.message }, { status: error.$metadata.httpStatusCode });
        }
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: "This endpoint only supports POST requests." }, { status: 405 });
}