import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './About.css';

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="overlay-gradient-radial" />
            <div className="container">
                <SectionHeading
                    tag="Who Are We"
                    title="A Team Passionate About Building What Matters"
                    subtitle="We are a full-service digital agency that partners with brands to create impactful software, stunning designs, and measurable growth strategies."
                    align="center"
                />


                <div className="about__video">
                    <div className="about__video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/QdXUOngKZiY?si=pIlQqNeg6w7YVg1P"
                            title="Groflex — Who We Are"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="about__iframe"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
