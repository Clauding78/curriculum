import { useEffect, useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './pages/home';
import Works from './pages/works';
import Contact from './pages/contact';

const routes = { '/': Home, '/works': Works, '/contact': Contact };

function getPath() {
    const path = window.location.hash.slice(1) || '/';
    return routes[path] ? path : '/';
}

export default function App() {
    const [path, setPath] = useState(getPath);

    useEffect(() => {
        const onHashChange = () => setPath(getPath());
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    const Page = routes[path];

    return (
        <div className="site-shell">
            <Header currentPath={path} />
            <main className="content"><Page /></main>
            <Footer />
        </div>
    );
}
