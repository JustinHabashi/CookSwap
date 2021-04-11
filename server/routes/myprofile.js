var express = require('express');
var router = express.Router();


const user = [{
	"id": 111,
	"firstname": "Edward",
	"lastname": "Eater",
	"email": "eddy@munchmunchmunch.com",
	"address": {
		"street": "2329 West Mall",
		"city": "Vancouver",
		"prov": "BC",
		"postal": "V6T 1Z4",
		"geo": {
			"lat": "49.2606",
			"lng": "-123.2460"
		}
	},
	"pref": {
		"radius": "5",
		"restrictions": {
			"gluten": "false",
			"vegan": "false",
			"vegetarian": "true",
			"kosher": "false",
			"halal": "false",
			"pescetarian": "false",
			"keto": "false",
			"nutallergy": "false",
			"note": "avoiding sugar"
		}
	}
}];


/* GET users listing. */
router.get('/', function (req, res, next) {
	// res.send('info about the user {}');
	return res.json({user});
});

module.exports = router;
