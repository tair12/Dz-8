import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostPage from "./Pages/postPage/PostPage";
import Post from "./Components/post/Post";



function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<PostPage/>}/>
                    <Route path="/post/:id" element={<Post/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App








