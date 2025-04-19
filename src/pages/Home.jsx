// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom'
/* import logo from '../assets/logo.png' */

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="text-center space-y-4">
      {/* <img src={logo} alt="Logo" className="mx-auto w-40" /> */}
      <h1 className="text-2xl font-bold">Bienvenido a nuestra aplicación</h1>
      <button
        onClick={() => navigate('/select-design')}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Continuar
      </button>
    </div>
  )
}