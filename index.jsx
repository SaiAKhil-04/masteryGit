import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            setMessage("Please enter both email and password.");
            return;
        }
        setMessage(`Logging in as ${email}`);
        // Add login logic here
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h1 style={styles.title}>Login</h1>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            placeholder="you@example.com"
                        />
                    </label>
                    <label style={styles.label}>
                        Password
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            placeholder="Enter your password"
                        />
                    </label>
                    <button type="submit" style={styles.button}>
                        Sign In
                    </button>
                </form>
                {message && <p style={styles.message}>{message}</p>}
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f7fb",
        padding: "16px",
    },
    card: {
        width: "100%",
        maxWidth: "360px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 14px 28px rgba(0,0,0,0.1)",
        padding: "32px",
    },
    title: {
        margin: 0,
        marginBottom: "24px",
        fontSize: "28px",
        textAlign: "center",
        color: "#111827",
    },
    form: {
        display: "grid",
        gap: "16px",
    },
    label: {
        display: "grid",
        gap: "8px",
        color: "#374151",
        fontSize: "14px",
    },
    input: {
        width: "100%",
        padding: "12px 14px",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
        fontSize: "15px",
        outline: "none",
    },
    button: {
        width: "100%",
        padding: "12px",
        borderRadius: "10px",
        border: "none",
        background: "#2563eb",
        color: "#ffffff",
        fontSize: "16px",
        cursor: "pointer",
    },
    message: {
        marginTop: "16px",
        color: "#2563eb",
        textAlign: "center",
    },
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LoginPage />);