import './Header.css'

function Header() {

    return(
        <header className="App-header">
            <nav>
                <h1>Festo</h1>
                <div className="hamburger">
                </div>
                <ul className="navlinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" className="festi">Festivals
                        <ul className="navextra navextraload">
                            <li><a href="#">Sankranti</a></li>
                            <li><a href="#">Diwali</a></li>
                            <li><a href="#">Dhassehra</a></li>
                            <li><a href="#">Onam</a></li>
                        </ul>
                    </a></li>
                    <li><a href="#">About & Social</a></li>
                </ul>
            </nav>    
      </header>
    );
}

export default Header;
