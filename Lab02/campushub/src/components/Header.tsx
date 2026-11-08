interface HeaderProps {
    title: string;
    subtitle?: string;
}

export function Header({
    title,
    subtitle = "Faculty of Science · Course catalog"
}: HeaderProps) {
    return (
        <header className="header">
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
        </header>
    );
}