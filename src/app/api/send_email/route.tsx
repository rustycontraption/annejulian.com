import { NextRequest, NextResponse } from 'next/server';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

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
        await snsClient.send(command);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error publishing to SNS:', error);
        return NextResponse.json({ success: false, error: { error } }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: "This endpoint only supports POST requests." }, { status: 405 });
}