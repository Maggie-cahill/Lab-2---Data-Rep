
import Content from './Components/Content'; {/* import the information from the contents "page or section" to combine on this live page */}
import Header from './Components/Header'; {/* import the information from the Header "page or section" to combine on this live page */}
import Footer from './Components/Footer'; {/* import the information from the Footer "page or section" to combine on this live page */}
//import NavigationBar from './Components/NavigationBar'; {/ *import the information from the NavigationBar "page or section" to combine on this live page - Unused at the end because we added a nav in the App.jsx*/}


import './App.css'; {/* import the css file for styling*/}
import {Nav, Navbar, Container} from 'react-bootstrap'; {/* import components/elements from the react bootstap (bootstrap makes it easier because it will have preset designs for components) */}
import {BrowserRouter , Routes, Route} from 'react-router-dom'; {/* import the router functionality to allow us to change the url path */}

function App() { {/*only live "page" which combines all the components into one functioning interface */}

  return (
    <div>
      <BrowserRouter>
        <Navbar bg="primary" data-bs-theme="dark"> {/*bootstrap navbar predesigned and assigned a dark blue theme */}
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand> {/* bootsrap element which represents the corner header where you typically put the logo or site name */}
            <Nav className="me-auto"> {/*navbar element to input list items or links */}
              <Nav.Link href="/">Home</Nav.Link> {/*navigate to path outlined (Home) in the href when the user clicks on this link */}
              <Nav.Link href="/read">Read</Nav.Link> {/*navigate to path outlined (Read) in the href when the user clicks on this link */}
              <Nav.Link href="/create">Create</Nav.Link> {/*navigate to path outlined (Creater) in the href when the user clicks on this link */}
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Content/>} /> {/* when the "home" path is accessed, display the Content component - acts as a dynamic way of "navigating" as site even though we are technically staying on the same page */}
          <Route path="/read" element={<Header />} /> {/* when the "read" path is accessed, display the Header component  */}
          <Route path="/create" element={<Footer />} /> {/* when the "create" path is accessed, display the Footer component  */}
        </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App; {/* export the App component as the default export */}
