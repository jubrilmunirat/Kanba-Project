import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Signup() {
    const [form, setForm] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // save for now - you can connect to backend later
        localStorage.setItem("padipal_user", JSON.stringify(form))
        alert("Account created!")
        navigate("/login")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f6fdf7] px-4">
            <form onSubmit={handleSubmit} className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-[#800000] mb-6">Create Account - PadiPal</h2>
                <input className="w-full mb-4 p-3 border rounded-lg" placeholder="Full Name" required
                    onChange={e => setForm({ ...form, name: e.target.value })} />
                <input className="w-full mb-4 p-3 border rounded-lg" type="email" placeholder="Email" required
                    onChange={e => setForm({ ...form, email: e.target.value })} />
                <input className="w-full mb-6 p-3 border rounded-lg" type="password" placeholder="Password" required
                    onChange={e => setForm({ ...form, password: e.target.value })} />
                <button className="w-full bg-[#800000] text-white py-3 rounded-lg font-semibold hover:bg-green-700">Sign Up</button>
                <p className="mt-4 text-sm text-center">Already have an account? <Link to="/login" className="text-[#800000] font-bold">Log in</Link></p>
            </form>
        </div>
    )
}