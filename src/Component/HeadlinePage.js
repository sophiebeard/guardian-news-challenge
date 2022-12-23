import Header from './Header';
import Footer from './Footer';
import Article from './Article';

function HeadlinePage({ articles }) {

    return (
        <div className="headlinePage" data-testid="headlinePage-test">
            <Header />
            <main>
                {articles.map(article => (
                    <Article key={article.id} id={article.id.replaceAll('/', '-')} headline={article.fields.headline} thumbnail={article.fields.thumbnail} />))}
            </main>
            <Footer />
        </div>
    );
};

export default HeadlinePage;