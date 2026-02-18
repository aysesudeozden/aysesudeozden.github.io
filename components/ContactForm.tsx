'use client';

import { useState } from 'react';

type ContactFormProps = {
    labels: {
        title: string;
        subtitle: string;
        desc: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        messageLabel: string;
        messagePlaceholder: string;
        submitButton: string;
        sending: string;
        sent: string;
        retry: string;
        successMsg: string;
        errorMsg: string;
    };
};

import FadeIn from './FadeIn';

export default function ContactForm({ labels }: ContactFormProps) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Script URL from original site
        const scriptURL = 'https://script.google.com/macros/s/AKfycbze0zqbzLc7k8yLB6uWZjEgV9Pn0MPlAC_qOhlo9Lq_NyqE-_mv9VwHxVvu3y81a9gFxQ/exec';

        try {
            await fetch(scriptURL, { method: 'POST', body: formData });
            setStatus('success');
            form.reset();
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error!', error);
            setStatus('error');
        }
    };

    return (
        <section className="section-split">
            <div className="col-left contact-left">
                <FadeIn delay={200}>
                    <h2 className="contact-subtitle">{labels.subtitle}</h2>
                </FadeIn>
                <FadeIn delay={400}>
                    <h1 className="contact-title" dangerouslySetInnerHTML={{ __html: labels.title }}></h1>
                </FadeIn>
                <FadeIn delay={600}>
                    <p style={{ opacity: 0.9, maxWidth: '400px', marginBottom: '2rem' }}>
                        {labels.desc}
                    </p>
                </FadeIn>

                <FadeIn delay={800} className="contact-links">
                    <a href="mailto:aysesudeozden@gmail.com" className="contact-link-item">aysesudeozden@gmail.com</a>
                    <a href="https://github.com/aysesudeozden" target="_blank" className="contact-link-item">GitHub</a>
                    <a href="https://www.linkedin.com/in/aysesudeozden/" target="_blank" className="contact-link-item">LinkedIn</a>
                    <a href="https://www.instagram.com/aysesudeozden/" target="_blank" className="contact-link-item">Instagram</a>
                </FadeIn>
            </div>

            <div className="col-right contact-right">
                <FadeIn delay={600} animationName="animate-scale">
                    <form onSubmit={handleSubmit} name="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">{labels.nameLabel}</label>
                            <input type="text" id="name" name="name" required placeholder={labels.namePlaceholder} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">{labels.emailLabel}</label>
                            <input type="email" id="email" name="email" required placeholder={labels.emailPlaceholder} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{labels.messageLabel}</label>
                            <textarea id="message" name="message" rows={4} required placeholder={labels.messagePlaceholder}></textarea>
                        </div>

                        <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                            {status === 'sending' ? labels.sending :
                                status === 'success' ? labels.sent :
                                    status === 'error' ? labels.retry : labels.submitButton}
                        </button>

                        {status === 'success' && <p id="status-message" className="status-success" style={{ display: 'block' }}>{labels.successMsg}</p>}
                        {status === 'error' && <p id="status-message" className="status-error" style={{ display: 'block' }}>{labels.errorMsg}</p>}
                    </form>
                </FadeIn>
            </div>
        </section>
    );
}
