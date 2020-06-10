import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

// Blog Sample
// const Content = withRouter((props) => {
//     return (
//         <>
//             <h3>My Blog</h3>

//             <Link href="/">
//                 <a className="link">← Back</a>
//             </Link>

//             <p className="title">{ props.router.query.title }</p>
//             <p className="content-text">{ props.router.query.content }</p>

            // <style jsx>{`
            //     .title {
            //         font-size: 40px;
            //         color: #3ea8a3;
            //         margin: 0 0 10px 0;
            //     }
            //     .content-text {
            //         font-size: 16px;
            //         line-height: 1.75em;
            //     }
            //     .link {
            //         display: block;
            //         font-size: 15px;
            //     }
            // `}</style>
//         </>
//     );
// });
// const Post = (props) => {
//     return (
//         <Layout>
//             <Content />
//         </Layout>
//     );
// }

// Fetch Sample
const Post = (props) => (
    <Layout>
        <h3>{props.show.name}</h3>

        <Link href="/">
            <a className="link">← Back</a>
        </Link>
        
        <div className="content">
            <img src={props.show.image.medium} />
            <p className="content-text">{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        </div>

        <style jsx>{`
            .content {
                display: flex;
                justify-content: space-between;
            }
            .content img {
                width: 200px;
                height: 100%;
                object-fit: cover;
            }
            .content-text {
                font-size: 14px;
                line-height: 1.75em;
                margin: 0 0 0 30px;
            }
            .link {
                display: block;
                font-size: 15px;
                margin: 0 0 15px 0;
            }
        `}</style>
    </Layout>
)

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show }
}

export default Post;