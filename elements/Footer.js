const Footer = () => {
    return (
        <header>
            <footer>
                <div>Copyright Next App</div>
            </footer>

            <style jsx>{`
                footer {
                    font-size: 10px;
                    bottom: 0;
                    right: 0;
                    position: fixed;
                    padding: 30px;
                    background: #eee;
                }
                @media screen and (max-width: 768px) {
                    footer {
                        display: none;
                    }
                }
            `}</style>
        </header>
    );
}

export default Footer;