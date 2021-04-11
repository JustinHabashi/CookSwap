export const MyProfile = (props) => (
    <div>
        <p>
            Welcome to CookSwap
        </p>
        <form>
                <label>
                    First Name:
                    <input type="text" name="first-name" />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="last-name" />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" />
                </label>
                <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
)