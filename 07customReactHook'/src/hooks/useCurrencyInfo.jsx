import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Fetch the data from the API
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                // Check if the currency exists in the API response
                if (res[currency]) {
                    setData(res[currency]);
                } else {
                    console.warn(`Currency "${currency}" not found.`);
                }
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency]);

 

    return data;
}

export default useCurrencyInfo;
