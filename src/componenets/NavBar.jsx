function NavBar() {
  return (
    <nav className="navigation">
        <div className="nav-left">
            <h1 className="nav-title">Nik's Fitness Tracker</h1>
        </div>
        <div className="nav-right">
            <a href="/">Home</a>
            <a href="/about">Contact</a>
            <a href="/about">About</a>
        </div>
    </nav>
  );
}

export default NavBar;
