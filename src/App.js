import logo from './img/icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div id="logo">
          <img src={logo} className="LambLink-logo" alt="logo"/>
        </div>
        <div id="nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="index.html">FAQ</a></li>
                    <li><a href="index.html">Tutorials</a></li>
                    <li><a href="index.html">Login</a></li>
                </ul>
            </div>
      </header>
      <main>
          <div id="mainText">
              <h1>A Fresh Approach to FTP</h1>
              <p>Say goodbye to the old, and welcome the new era of free, modern FTP management</p>
              <div id="mainButtons">
                  <a href="download.html" download><button id="DownloadDesktopBTN">Download Desktop App</button></a>
                  <a href="download.html" download><button id="HowItWorksBTN">How does it work?</button></a>
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;
