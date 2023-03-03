import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setLoading(true);
    setError(null);

    const res = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if (!res.ok) {
      setLoading(false);
      setError(json.error);
    }

    if (res.ok) {
      dispatch({ type: "LOGIN", payload: json });

      localStorage.setItem("user", JSON.stringify(json));
    }
  };
  return { signup, error, loading };
};

export default useSignup;
