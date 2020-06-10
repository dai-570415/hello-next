import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// Blog Sample
// const PostLink = ({ id, title, content }) => {
//     return (
//         <li>
//             <Link as={`/p/${id}`} href={`/post?title=${title}&content=${content}`}>
//                 <a>{title}</a>
//             </Link>
//         </li>
//     );
// }
// const Index = () => {
//     return (
//         <Layout>
// Blog 
//             <h3>Blog Sample</h3>
//             <ul>
//                 <PostLink
//                     id="1"
//                     title="初めてのNextアプリです"
//                     content="NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦"
//                 /> 
//             </ul>
//         </Layout>
//     );
// }

// Fetch Sample
const Index = (props) => {
    return (
        <Layout>
            <h3>Fetch Sample</h3>
            <ul>
                {props.shows.map(({show}) => (
                    <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
Index.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    return {
        shows: data,
    }
}

export default Index;