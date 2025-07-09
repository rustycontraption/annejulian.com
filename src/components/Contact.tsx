'use client'

import React, { useState } from 'react';

interface FormState {
    name: string;
    email: string;
    message: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialFormState: FormState = {
    name: '',
    email: '',
    message: '',
};

export default function Contact() {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [status, setStatus] = useState<SubmissionStatus>('idle');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
        <form onSubmit={handleSubmit} method="POST">

            <label htmlFor="name">name</label>
            <input id="name" name="name" type="text" value={formState.name} onChange={handleInputChange} />

            <label htmlFor="emailAddress">email address</label>
            <input id="emailAddress" name="email" type="email" value={formState.email} onChange={handleInputChange} />

            <br />

            <label htmlFor="message">message</label>
            <textarea rows={5} id="message" name="message" value={formState.message} onChange={handleInputChange} />

            <button type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting...' : 'Submit'}
            </button>

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