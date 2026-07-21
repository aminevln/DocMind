import { useEffect, useState } from "react";
import { getStatus } from "../services/api";

function Home() {

    const [status, setStatus] = useState("Loading...");

    useEffect(() => {

        const loadStatus = async () => {

            try {
                const data = await getStatus();
                setStatus(data);
            } catch (err) {
                setStatus("Backend Offline");
            }

        };

        loadStatus();

    }, []);

    return (

        <div>

            <h1>DocMind</h1>

            <p>{status}</p>

        </div>

    );

}

export default Home;