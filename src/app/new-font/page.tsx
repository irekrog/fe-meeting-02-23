import { LoremIpsum } from '@/components';
import { Kanit } from '@next/font/google';

const font = Kanit({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const NewFontPage = () => {
    return (
        <div className={font.className}>
            <LoremIpsum />
        </div>
    );
};

export default NewFontPage;
