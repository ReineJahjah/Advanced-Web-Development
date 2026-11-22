function Header({count, credits}) {
    return (
        <header className="header">
            <div>
                <h1 className="header__title">CampusHub</h1>
                <p className="header__tagline">
                    Find and enrol in your courses
                </p>
            </div>

             <span className="header__term">{count} courses · {credits} credits</span>
        </header>
    );
}

export default Header;