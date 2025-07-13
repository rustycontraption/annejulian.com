'use client'

import { useState } from 'react';
import { Button, TextInput, Textarea, Group } from '@mantine/core';
import { useForm, isEmail } from '@mantine/form';
import classes from "./Contact.module.css"
import PubSNS from "../app/actions";

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface formValues {
    fromEmail: string;
    message: string;
}

export default function Contact() {
    const form = useForm({
        mode: 'controlled',
        initialValues: { fromEmail: '', message: '' },
        validate: {
            fromEmail: isEmail('Invalid email'),
        },
    });

    const [status, setStatus] = useState<SubmissionStatus>('idle');

    const handleSubmit = async (values: formValues) => {
        setStatus('submitting');

        try {
            await PubSNS(values);
            setStatus('success');
            form.reset();
        } catch (error) {
            console.log(error)
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
                {...form.getInputProps('fromEmail')}
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