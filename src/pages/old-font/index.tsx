import { LoremIpsum } from '@/components';
import Head from 'next/head';

const OldFontPage = () => {
    return (
        <>
            <style jsx global>{`
                * {
                    margin: 0;
                }
            `}</style>
            <Head>
                <title>My page title</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/* @ts-ignore */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap"
                    rel="stylesheet"
                    // @ts-ignore
                    precedence="default"
                />
            </Head>
            <div style={{ fontFamily: 'Kanit' }}>
                <LoremIpsum />
            </div>
        </>
    );
};

export default OldFontPage;
