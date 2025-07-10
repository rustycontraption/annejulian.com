'use client'

import React, { useState } from 'react';
import { Button, TextInput, Textarea, Group } from '@mantine/core';
import { useForm, isEmail } from '@mantine/form';

interface FormState {
    email: string;
    message: string;
}

const initialFormState: FormState = {
    email: '',
    message: '',
};

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [status, setStatus] = useState<SubmissionStatus>('idle');

    const form = useForm({
        mode: 'controlled',
        initialValues: initialFormState,
        validate: {
            email: isEmail('Invalid email'),
        },
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async () => {
        setStatus('submitting');

        try {
            const response = await fetch(`/api/send_email`, {
                method: "POST",
                body: JSON.stringify(formState),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            };

            setStatus('success');
            setFormState(initialFormState);
        } catch (error) {
            console.error("Form submission error", error);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                id='email'
                placeholder='email'
                value={formState.email}
                onChange={handleInputChange}
                key={form.key('email')}
                {...form.getInputProps('email')}
                required
            />

            <Textarea
                mt="md"
                rows={5}
                id='message'
                placeholder='message'
                value={formState.message}
                onChange={handleInputChange}
                required
            />
            <Group justify="flex-start" mt="md">
                <Button type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Submitting...' : 'Submit'}
                </Button>
            </Group>

            {status === 'success' && (
                <p style={{ color: 'green' }}>
                    Success! Thanks for reaching out.
                </p>
            )}
            {status === 'error' && (
                <p style={{ color: 'red' }}>
                    Oops, something went wrong. Please try again later.
                </p>
            )}
        </form>
    );
}