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
            </aside>
            <footer>
                <div>Copyright Next App</div>
            </footer>
            
            <style jsx>{`
                .side-bar {
                    min-width: 150px;
                    margin: 0 20px 0 0;
                }
                aside {
                    height: 80vh;
                }
                aside .link {
                    display: block;
                    font-size: 15px;
                    margin: 0 0 25px 0;
                }
                footer div {
                    font-size: 10px;
                }
            `}</style>
        </div>
    );
}

export default Aside;