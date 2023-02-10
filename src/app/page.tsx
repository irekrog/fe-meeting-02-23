import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <iframe
                    src="https://slides.com/ireczek92/deck/embed"
                    width="576"
                    height="420"
                    title="frontend meeting 02.23"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={styles.column}>
                <h2>react-native-select-pro</h2>
                <a href="https://github.com/MobileReality/react-native-select-pro" target="_blank">
                    react native select pro v2
                </a>
                <h2>Font loading in Next.js 13</h2>
                <Link href="/old-font">Old Font</Link>
                <Link href="/new-font">New Font</Link>
                <h2>Embed a video</h2>
                <Link href="/yt-basic">Yt basic iframe</Link>
                <Link href="/yt-lite">Yt lite</Link>
                <Link href="/embed-video">Compare</Link>
                <h2>Animations</h2>
                <Link href="/framer-motion">Animations (framer-motion)</Link>
                <h2>Dialog HTML Element</h2>
                <Link href="/modal">Dialog</Link>
                <h2>Others</h2>
                <a href="https://react.email/" target="_blank">
                    react-email
                </a>
                <a href="https://reactnative.dev/blog/2023/01/12/version-071" target="_blank">
                    react-native 0.71
                </a>
                <a href="https://beta.reactjs.org/reference/react" target="_blank">
                    react beta docs
                </a>
                <a href="https://beta.nextjs.org/docs" target="_blank">
                    next.js beta docs
                </a>
            </div>
        </main>
    );
}
