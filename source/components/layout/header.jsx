const navigation = [
    { href: '#/', label: 'Home', path: '/' },
    { href: '#/works', label: 'Trabalhos', path: '/works' },
    { href: '#/contact', label: 'Contacto', path: '/contact' }
];

export default function Header({ currentPath }) {
    return (
        <header className="site-header">
            <a className="brand" href="#/">O teu nome</a>
            <nav aria-label="Navegação principal">
                {navigation.map((item) => (
                    <a aria-current={currentPath === item.path ? 'page' : undefined} href={item.href} key={item.path}>
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
