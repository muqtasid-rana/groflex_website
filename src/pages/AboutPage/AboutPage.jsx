import { useEffect } from 'react';
import About from '../../sections/About/About';

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return <About />;
}
