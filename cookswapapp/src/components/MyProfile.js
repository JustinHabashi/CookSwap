export const MyProfile = (props) => (
    <div className="Form-format">
        Welcome to CookSwap

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
        </form>

        Dietary restrictions
        <select>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="halal">Halal</option>
            <option value="kosher">Kosher</option>
        </select>

        <input type="submit" value="Submit" />
    </div>

)