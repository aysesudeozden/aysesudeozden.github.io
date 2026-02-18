import HeroSection from '@/components/home/HeroSection';
import HeartSection from '@/components/home/HeartSection';
import InspiredBySection from '@/components/home/InspiredBySection';
import TravelDatesSection from '@/components/home/TravelDatesSection';
import FooterSection from '@/components/home/FooterSection';

export default function Home() {
    return (
        <main>
            <HeroSection
                subtitle="SCARLET<br/>MAROON"
                title="THE ARTIST"
                description="Yazılım dünyasına yeni adım atmış bir bilgisayar mühendisiyim. Her gün yeni bir teknoloji öğreniyor ve GitHub üzerinde açık kaynaklı projeler geliştiriyorum."
                buttonText="DAHA FAZLA"
                videoSrc="/assets/1131.mp4"
                buttonLink="#about"
            />
            <HeartSection
                subtitle="NEDEN YAPIYORUM"
                title="THE HEART BEHIND<br/>SCARLET STUDIO"
                description="Şu sıralar web teknolojileri ve oyun geliştirme (Unity) üzerine yoğunlaştım. Kod yazmak benim için sadece bir iş değil, aynı zamanda bir yaratım süreci. Karmaşık problemleri çözmek ve estetik, işlevsel arayüzler oluşturmak en büyük tutkum."
            />
            <InspiredBySection />
            <TravelDatesSection
                title="PROJELER"
                items={[
                    {
                        title: "GITHUB/AÇIK KAYNAK",
                        desc: "KODLAR & KATKILAR",
                        linkText: "PROFİLİ GÖR",
                        linkUrl: "https://github.com/aysesudeozden",
                        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    },
                    {
                        title: "WEB TASARIM",
                        desc: "HTML, CSS & NEXT.JS",
                        linkText: "PROJELERİ GÖR",
                        linkUrl: "/projeler",
                        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    },
                    {
                        title: "OYUN GELİŞTİRME",
                        desc: "UNITY 3D & C#",
                        linkText: "İNCELE",
                        linkUrl: "/game-tr",
                        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    }
                ]}
            />
            <FooterSection
                title="HİKAYENİ ANLATALIM"
                buttonText="İLETİŞİM"
                location="İstanbul, TR"
                copyright="© 2026 Ayşe Sude Özden"
            />
        </main>
    );
}
