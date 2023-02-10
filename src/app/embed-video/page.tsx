import styles from './page.module.scss';
import { YtBasic, Layout, Yt, YtLite } from "@/components";

const EmbedYtPage = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <Yt title="YouTube (normal)">
                    <YtBasic />
                </Yt>
                <Yt title="YouTube (lite)">
                    <YtLite />
                </Yt>
            </div>
        </Layout>
    );
};

export default EmbedYtPage;
