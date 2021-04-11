export const MyProfile = (props) => (
    <div className="App-pages">
        <b>Welcome to CookSwap</b>
        <br /><br />
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
        <br />
        Dietary restrictions
        <select>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="paleo">Paleo</option>
            <option value="halal">Halal</option>
            <option value="keto">Kosher</option>
            <option value="nut-allergy">Nut Allergy</option>
            <option value="gluten-free">Gluten Free</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
    </div>

)