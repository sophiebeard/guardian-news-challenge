import Header from './Header';
import Footer from './Footer';
import ArticleSummary from './ArticleSummary';
import { useParams } from 'react-router-dom';

function ArticleSummaryPage({ articles }) {

    const { id } = useParams();

    return (
        <div className="articleSummaryPage" >
            <Header />
            <div>
                {articles.map(article => article.id.replaceAll(`/`, `-`) === id ?
                    <ArticleSummary key={article.id} url={article.webUrl} headline={article.fields.headline} thumbnail={article.fields.thumbnail} bodyText={article.fields.bodyText} /> : <p key={article.id}></p>)}
            </div>
            <Footer />
        </div>
    );
};

export default ArticleSummaryPage;