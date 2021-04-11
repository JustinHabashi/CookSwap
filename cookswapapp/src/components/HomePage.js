import cookswap from '../cookswap.jpeg'
import { Link } from "react-router-dom";

export const HomePage = (props) => (
    <header className="App-header">
        <img src={cookswap} className="App-logo" alt="logo" />
        <p>
        Welcome to CookSwap
        </p>
        <Button className="App-link" to="/MyProfile">My Profile</Button>
        <Link className="App-link" to="/NearbySwaps">Nearby Swaps</Link>
        <Link className="App-link" to="/StartASwap">Start A Swap</Link>
        <Link className="App-link" to="/MealIdeas">Meal Ideas</Link>
    </header>
)