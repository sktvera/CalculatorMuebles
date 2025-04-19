// src/pages/SelectDesign.jsx
import { useNavigate } from 'react-router-dom'

export default function SelectDesign() {
  const navigate = useNavigate()

  return (
    <div className="text-center space-y-4">
      <h2 className="text-xl font-semibold">Selecciona un tipo de diseño</h2>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/calculator')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Diseño Estándar
        </button>
        <button
          onClick={() => navigate('/calculator')}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        >
          Diseño de Línea
        </button>
      </div>
    </div>
  )
}