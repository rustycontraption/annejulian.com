'use client'

import { useState } from 'react';
import { Button, TextInput, Textarea, Group } from '@mantine/core';
import { useForm, isEmail } from '@mantine/form';
import classes from "../components/Contact.module.css"

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface formValues {
    email: string;
    message: string;
}

export default function Contact() {
    const form = useForm({
        mode: 'controlled',
        initialValues: { email: '', message: '' },
        validate: {
            email: isEmail('Invalid email'),
        },
    });

    const [status, setStatus] = useState<SubmissionStatus>('idle');

    const handleSubmit = async (values: formValues) => {
        setStatus('submitting');

        try {
            const response = await fetch(`/api/send_email`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`${response.status}: ${errorText}`)
            };

            setStatus('success');
            form.reset();
        } catch (error) {
            console.error("Failed to submit form:", error);
            setStatus('error');
        }
    };

    return status === 'success' ? (
        <div className={classes.success}>
            Success! Thanks for reaching out.
        </div>
    ) : (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                placeholder='email'
                {...form.getInputProps('email')}
                required
            />
            <Textarea
                mt="md"
                rows={5}
                placeholder='message'
                {...form.getInputProps('message')}
                required
            />
            <Group justify="flex-start" mt="md">
                <Button type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Submitting...' : 'Submit'}
                </Button>
            </Group>

            {status === 'error' && (
                <p style={{ color: 'red' }}>
                    Oops, something went wrong. Please try again later.
                </p>
            )}
        </form>
    );
}