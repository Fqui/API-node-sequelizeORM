//Rutas de usuario

const User = (Router) => {
    Router.get('/', (req, res) => {
        res.json({ message: "holis"})
    })
};

module.exports = User;