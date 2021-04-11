export const MyProfile = (props) => (
    <header className="App-header">
        <p>My Profile</p>
        <body className="App-pages">
        <form>
            <label >
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
                Street Address:
                    <input type="text" name="street-address" />
            </label>
            <br />
            <label>
                City:
                    <input type="text" name="city" />
            </label>
            <br />
            <label>
                Postal Code:
                    <input type="text" name="postal-code" />
            </label>
            <br />
            <label>
                Province:
                    <input type="text" name="province" />
            </label>
            <br />
        </form>
        <p>Dietary restrictions
        <br />
        <select>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="paleo">Paleo</option>
            <option value="keto">Keto</option>
            <option value="halal">Halal</option>
            <option value="kosher">Kosher</option>
            <option value="nut-allergy">Nut Allergy</option>
            <option value="gluten-free">Gluten Free</option>
        </select>
        </p>
        <input type="submit" value="Submit" />
        </body>
    </header>

)