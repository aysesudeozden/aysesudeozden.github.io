import ContactForm from '@/components/ContactForm';

export default function Contact() {
    const labels = {
        title: 'HAVE AN<br>IDEA?',
        subtitle: 'LET\'S WORK TOGETHER',
        desc: 'You can contact me for new projects, collaborations, or just to say hello. I will respond to your messages as soon as possible.',
        nameLabel: 'YOUR NAME & SURNAME',
        namePlaceholder: 'Enter your name here',
        emailLabel: 'YOUR EMAIL ADDRESS',
        emailPlaceholder: 'example@email.com',
        messageLabel: 'YOUR MESSAGE',
        messagePlaceholder: 'Text here...',
        submitButton: 'SEND',
        sending: 'SENDING...',
        sent: 'Message Sent!',
        retry: 'TRY AGAIN',
        successMsg: 'Message sent successfully!',
        errorMsg: 'An error occurred! Please try again later.'
    };

    return <ContactForm labels={labels} />;
}
