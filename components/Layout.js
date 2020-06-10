import Header from '../elements/Header';
import Aside from '../elements/Aside';
import styles from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Aside />
                <main className={styles.main}>
                    { props.children }
                </main>
            </div>
        </div>
    );
}

export default Layout;