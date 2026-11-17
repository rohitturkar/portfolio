import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const articles = [
  {
    number: "01",
    category: "JAVASCRIPT · FUNDAMENTALS",
    title: "Difference between var, let and const in JavaScript",
    description: "A practical look at JavaScript’s three declaration keywords and the differences in how they behave.",
    href: "https://rohitturkar02.hashnode.dev/difference-between-var-let-and-const-in-javascript",
    visual: "scope",
  },
  {
    number: "02",
    category: "JAVASCRIPT · FUNCTIONS",
    title: "Function hoisting in JavaScript",
    description: "An introduction to function hoisting and what happens when declarations are evaluated in JavaScript.",
    href: "https://rohitturkar02.hashnode.dev/function-hoisting-in-javascript",
    visual: "hoisting",
  },
  {
    number: "03",
    category: "JAVASCRIPT · OBJECTS",
    title: "What is an object in JavaScript?",
    description: "A beginner-friendly introduction to JavaScript objects and the way they organize related data.",
    href: "https://rohitturkar02.hashnode.dev/what-is-object-in-javascript",
    visual: "objects",
  },
];

function ArticleVisual({ type }) {
  if (type === "scope") {
    return <div className="blog-card-visual blog-card-visual--scope" aria-hidden="true"><div className="scope-code"><span><b>var</b><i>function scope</i></span><span><b>let</b><i>block scope</i></span><span><b>const</b><i>block scope</i></span></div><small>01 / DECLARATIONS</small></div>;
  }

  if (type === "hoisting") {
    return <div className="blog-card-visual blog-card-visual--hoisting" aria-hidden="true"><div className="hoist-code"><span>01&nbsp; greet();</span><span>02&nbsp; <b>function</b> greet() {"{"}</span><span>03&nbsp;&nbsp;&nbsp; return <i>"hello"</i>;</span><span>04&nbsp; {"}"}</span></div><div className="hoist-arrow">↑<small>HOISTED</small></div></div>;
  }

  return <div className="blog-card-visual blog-card-visual--objects" aria-hidden="true"><div className="object-code"><span className="object-brace">{`{`}</span><span><i>name</i>: <b>"Rohit"</b>,</span><span><i>curious</i>: <b>true</b>,</span><span><i>interests</i>: [<em>…</em>]</span><span className="object-brace">{`}`}</span></div><small>KEYS &amp; VALUES</small></div>;
}

function Blog() {
  return (
    <main className="blog-page">
      <section className="blog-wrap blog-index" aria-labelledby="blog-title">
        <header className="blog-index-header">
          <div><div className="section-kicker">ROHIT TURKAR / JAVASCRIPT NOTES</div><h1 id="blog-title">Notes &amp; <i>ideas.</i></h1><p>Articles on JavaScript fundamentals, published on Hashnode.</p></div>
          <span className="blog-index-count">03 ARTICLES</span>
        </header>
        <div className="blog-card-grid">
          {articles.map((article) => <a className="blog-article-card" href={article.href} target="_blank" rel="noreferrer" key={article.number}>
            <ArticleVisual type={article.visual} />
            <div className="blog-article-body">
              <div className="blog-article-meta"><span>{article.category}</span><span>{article.number}</span></div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <span className="blog-read-link">READ ON HASHNODE <FaArrowRight aria-hidden="true" /></span>
            </div>
          </a>)}
        </div>
      </section>
      <footer className="blog-footer">
        <div className="blog-wrap blog-footer-inner">
          <a className="blog-back-link" href="/"><FaArrowLeft aria-hidden="true" /> BACK TO THE PORTFOLIO</a>
          <p>Thanks for spending a little time here.</p>
          <a className="blog-contact-link" href="mailto:rohittur2002@gmail.com">Say hello <FaArrowRight aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}

export default Blog;
