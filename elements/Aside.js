import Link from 'next/link';

const Aside = () => {
    return (
        <div className="side-bar">
            <aside>
                <Link href="/">
                    <a className="link">HOME</a>
                </Link>
                <Link href="/about">
                    <a className="link">ABOUT</a>
                </Link>
                <Link href="/blog">
                    <a className="link">BLOG SAMPLE</a>
                </Link>
                <Link href="/fetch">
                    <a className="link">FETCH SAMPLE</a>
                </Link>
            </aside>
            
            <style jsx>{`
                .side-bar {
                    min-width: 150px;
                    margin: 0 0 0 50px;
                    height: 80vh;
                }
                aside {
                    margin: 0 0 100px 0;
                }
                aside .link {
                    display: block;
                    font-size: 15px;
                    margin: 0 0 25px 0;
                }
                @media screen and (max-width: 768px) {
                    .side-bar {
                        margin: 0;
                        height: 25vh;
                    }
                    aside {
                        margin: 50px 0 0 0;
                    }
                }
            `}</style>
        </div>
    );
}

export default Aside;