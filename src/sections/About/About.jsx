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

                <div className="about__description">
                    <p className="about__text">
                        Founded with the belief that great design meets robust engineering,
                        Groflex has grown into a trusted partner for startups and enterprises
                        across the globe. We combine creativity with technical excellence to
                        deliver digital products that make a difference.
                    </p>
                </div>

                <div className="about__video">
                    <div className="about__video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
