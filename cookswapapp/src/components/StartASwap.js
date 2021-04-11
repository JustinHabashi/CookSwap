export const StartASwap = (props) => (
        <header className="App-header">
        <p>Start a Swap</p>
        <body className="App-pages">
        <form>
            <label >
                Number of meals to swap:
                    <input type="text" name="number-meals" />
            </label>
            <br />
            <label>
                Start date:
                    <input type="text" name="last-name" />
            </label>
            <br />
            <label>
                End date:
                    <input type="text" name="street-address" />
            </label>
            <br />
            <label>
                Preferences:
                    <input type="text" name="street-address" />
            </label>
            <br />
        <input type="submit" value="Enter" />
        </form>
        </body>
    </header>

)