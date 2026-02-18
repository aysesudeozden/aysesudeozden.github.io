
import HeroSection from '@/components/home/HeroSection';
import HeartSection from '@/components/home/HeartSection';
import InspiredBySection from '@/components/home/InspiredBySection';
import TravelDatesSection from '@/components/home/TravelDatesSection';
import FooterSection from '@/components/home/FooterSection';

export default function EnglishHome() {
    return (
        <main>
            <HeroSection
                subtitle="SCARLET<br/>MAROON"
                title="THE ARTIST"
                description="I am a computer engineer who recently stepped into the software world. I learn a new technology every day and develop open source projects on GitHub."
                buttonText="READ MORE"
                imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                buttonLink="#about"
            />
            <HeartSection
                subtitle="WHY I DO THIS"
                title="THE HEART BEHIND<br/>SCARLET STUDIO"
                description="Recently, I have focused on web technologies and game development (Unity). Writing code is not just a job for me, it is also a creative process. Solving complex problems and creating aesthetic, functional interfaces is my greatest passion."
            />
            <InspiredBySection />
            <TravelDatesSection
                title="PROJECTS"
                items={[
                    {
                        title: "GITHUB / OPEN SOURCE",
                        desc: "CODE & CONTRIBUTIONS",
                        linkText: "VIEW PROFILE",
                        linkUrl: "https://github.com/aysesudeozden",
                        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    },
                    {
                        title: "WEB DESIGN",
                        desc: "HTML, CSS & NEXT.JS",
                        linkText: "VIEW PROJECTS",
                        linkUrl: "/projects",
                        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    },
                    {
                        title: "GAME DEV",
                        desc: "UNITY 3D & C#",
                        linkText: "PLAY NOW",
                        linkUrl: "/game",
                        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    }
                ]}
            />
            <FooterSection
                title="LET'S TELL YOUR STORY"
                buttonText="INQUIRE"
                location="Based in Istanbul, TR"
                copyright="© 2024 Ayşe Sude Özden"
            />
        </main>
    );
}
