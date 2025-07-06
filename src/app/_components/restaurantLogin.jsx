const RestaurantLogin = () => {
    return (
        <>
            <h3>Login Component</h3>
            <div>
                <div className="input-wrapper">
                    <input type="text" className="input-field" placeholder="Enter email Id" />
                </div>
            </div>
            <div>
                <div className="input-wrapper">
                    <input type="password" className="input-field" placeholder="Enter password" />
                </div>
            </div>
            <div>
                <button className="button">Login</button>
            </div>
        </>
    );
};

export default RestaurantLogin;