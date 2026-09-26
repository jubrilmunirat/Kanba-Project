import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const saved = JSON.parse(localStorage.getItem("padipal_user"))
        if (saved && saved.email === form.email && saved.password === form.password) {
            localStorage.setItem("isLoggedIn", "true")
            navigate("/")
        } else {
            alert("Invalid email or password")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f6fdf7] px-4">
            <form onSubmit={handleSubmit} className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-[#800000] mb-6">Welcome Back</h2>
                <input className="w-full mb-4 p-3 border rounded-lg" type="email" placeholder="Email" required
                    onChange={e => setForm({ ...form, email: e.target.value })} />
                <input className="w-full mb-6 p-3 border rounded-lg" type="password" placeholder="Password" required
                    onChange={e => setForm({ ...form, password: e.target.value })} />
                <button className="w-full bg-[#800000] text-white py-3 rounded-lg font-semibold hover:bg-green-700">Log In</button>
                <p className="mt-4 text-sm text-center">No account? <Link to="/signup" className="text-[#800000] font-bold">Sign Up</Link></p>
            </form>
        </div>
    )
}