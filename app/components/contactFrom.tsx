// /components/contactFrom.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './contactFrom.module.css'

const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 charachters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactFrom() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData> ({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data:FormData) => {
        setStatus('loading');

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                reset();
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className={styles.divAlign}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label htmlFor="name" className={styles.labelAlign}>
                        Name
                    </label>
                    <input 
                        {...register('name')}
                        id='name'
                        placeholder='Your name'
                        aria-invalid={!!errors.name}
                        className={styles.input} 
                    />
                    {errors.name && (
                        <p role= 'alert'>
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className={styles.labelAlign}>
                        Email
                    </label>
                    <input 
                        {...register('email')}
                        type='email'
                        id='email'
                        placeholder='your@email.com'
                        aria-invalid={!!errors.email}
                        className={styles.input}
                    />
                    {errors.email && (
                        <p role='alert'>
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="message" className={styles.labelAlign}>
                        Message
                    </label>
                    <textarea 
                        {...register('message')}
                        id='message'
                        placeholder='Your message...'
                        rows={5}
                        aria-invalid={!!errors.message}
                        className={styles.input}
                    />
                    {errors.message && (
                        <p role='alert'>
                            {errors.message.message}
                        </p>
                    )}
                </div>
                <button
                    type='submit'
                    disabled={status === 'loading'}
                    aria-disabled={status === 'loading'}
                    className={styles.buttonStyle}
                >
                    {status === 'loading' ? (
                        <span >   Sending...
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>

                {status === 'success' && (
                    <p role='status'>
                        Message sent successfully!
                    </p>
                )}
                {status === 'error' && (
                    <p role='alert'>
                        Error sending message. Please try again.
                    </p>
                )}
            </form>
        </div>
    );
}