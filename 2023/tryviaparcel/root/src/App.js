import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ShowCard from './ShowCard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCard text={'/ is path'} />} />

        <Route path="/home" element={<ShowCard text={'Home Component'} />} />
        <Route path="/lead" element={<ShowCard text={'Lead Component Mounted'} />} />
        <Route path="/account" element={<ShowCard text={'Account Component Mounted'} />} />
        <Route path="/contact" element={<ShowCard text={'Contacts Component Mounted'} />} />








        <Route path="/platform" element={<ShowCard text={'/platform is path'} />} />
        <Route path="/platform/home" element={<ShowCard text={'Home Component'} />} />
        <Route path="/platform/lead" element={<ShowCard text={'Lead Component Mounted'} />} />
        <Route path="/platform/account" element={<ShowCard text={'Account Component Mounted'} />} />
        <Route path="/platform/contact" element={<ShowCard text={'Contacts Component Mounted'} />} />


      </Routes >
    </BrowserRouter>
  );
}

export default App;
