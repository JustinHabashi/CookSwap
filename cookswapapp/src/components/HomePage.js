import cookswap from '../HackSymbol111.png'
import { Link } from "react-router-dom";
import "./Button.js"

export const HomePage = (props) => (
    <header className="App-header">
        <img src={cookswap} className="App-logo" alt="logo" />
        <p>
        Welcome to CookSwap
        </p>
        <Link className="App-link" to="/MyProfile">My Profile</Link>
        <Link className="App-link" to="/NearbySwaps">Near by Swaps</Link>
        <Link className="App-link" to="/StartASwap">Start a Swap</Link>
        <Link className="App-link" to="/MealIdeas">Meal Ideas</Link>
    </header>
)