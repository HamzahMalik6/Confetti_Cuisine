var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },

    {
        title: "Async Artichoke",
        cost: 25
    },

    {
        title: "OOP Orange Juice",
        cost: 10
    }
];

exports.showCourses = (req,res) => {
    res.render("courses", {
        offeredCourses: courses
    });
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};

exports.showRecipes = (req, res) => {
    res.render("recipes");
};

exports.showShop = (req, res) => {
    res.render("shop");
};

exports.showAbout = (req, res) => {
    res.render("about");
};