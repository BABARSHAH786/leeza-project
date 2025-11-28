// src/pages/AdminLogin.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'   // YE DAAL DO

export default function AdminLogin() {
  const [email, setEmail] = useState('syedbabarali040@gmail.com')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    
    if (error) {
      alert('Wrong email ya password')
    } else if (data.user?.user_metadata?.role === 'admin') {
      navigate('/admin')
    } else {
      alert('Sirf admin login kar sakta hai!')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-8">Admin Login</h2>
        <input className="w-full p-4 mb-4 border rounded-lg" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-4 mb-6 border rounded-lg" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} disabled={loading} className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold hover:bg-purple-700">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  )
}