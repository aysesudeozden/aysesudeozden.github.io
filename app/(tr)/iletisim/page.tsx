import ContactForm from '@/components/ContactForm';

export default function Iletisim() {
    const labels = {
        title: 'BİR FİKRİN<br>Mİ VAR?',
        subtitle: 'BİRLİKTE ÇALIŞALIM',
        desc: 'Yeni projeler, iş birlikleri veya sadece merhaba demek için bana ulaşabilirsiniz. Mesajlarınıza en kısa sürede dönüş yapacağım.',
        nameLabel: 'ADINIZ SOYADINIZ',
        namePlaceholder: 'İsim Giriniz',
        emailLabel: 'E-POSTA ADRESİNİZ',
        emailPlaceholder: 'ornek@email.com',
        messageLabel: 'MESAJINIZ',
        messagePlaceholder: 'Buraya yazın...',
        submitButton: 'GÖNDER',
        sending: 'GÖNDERİLİYOR...',
        sent: 'GÖNDERİLDİ',
        retry: 'TEKRAR DENE',
        successMsg: 'Mesajınız başarıyla gönderildi!',
        errorMsg: 'Hata oluştu! Lütfen daha sonra tekrar deneyin.'
    };

    return <ContactForm labels={labels} />;
}
