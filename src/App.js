import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeadbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";
function App() {
  const [feedback,setFeedback]=useState(FeedbackData)
  return (
    <>
    <Header/>
    
    <div className="container">
     <FeadbackList feedback={feedback}/>
    
    </div>
   
    </>
  );
}

export default App;
