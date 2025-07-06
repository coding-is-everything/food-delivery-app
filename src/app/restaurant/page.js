'use client';
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignup from "../_components/restaurantSignup";

const Restaurant = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            <h1>Restaurant Login / Signup Page</h1>
            {isLogin ? <RestaurantLogin /> : <RestaurantSignup />}
            <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Don't have account? Signup" : "Already have account?Login"}</button>
        </>
    );
};

export default Restaurant;