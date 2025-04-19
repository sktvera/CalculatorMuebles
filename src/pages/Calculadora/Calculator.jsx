// src/pages/Calculator.jsx
import { useState } from 'react'
import '/src/assets/styles.css' // ✅ Ruta absoluta desde raíz del proyecto
import {
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Paper,
  Divider
} from '@mui/material'

import detailcarp from './Assets/Img/detailcarp.png';
import carp from './Assets/Img/carp.png';


export default function Calculator() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [tieneCurvas, setTieneCurvas] = useState(false)
  const [modulos, setModulos] = useState('')
  const [resultado, setResultado] = useState(null)
  const [mostrarAlternativo, setMostrarAlternativo] = useState(false)

  const [altLargo, setAltLargo] = useState('')
  const [altAlto, setAltAlto] = useState('')
  const [altAncho, setAltAncho] = useState('')
  const [precioBase, setPrecioBase] = useState('')
  const [baseCalculada, setBaseCalculada] = useState(null)
  const [aumentoLargo, setAumentoLargo] = useState('')
  const [aumentoAlto, setAumentoAlto] = useState('')
  const [aumentoAncho, setAumentoAncho] = useState('')
  const [resultadoAumento, setResultadoAumento] = useState(null)
  const [modulosLinea, setModulosLinea] = useState('')
  const [curvasLinea, setCurvasLinea] = useState(false)

  const calcular = () => {
    const largo = parseFloat(input1)
    const alto = parseFloat(input2)
    const ancho = parseFloat(input3)
    const numeroModulos = parseInt(modulos)

    if (
      isNaN(largo) || isNaN(alto) || isNaN(ancho) || isNaN(numeroModulos) ||
      largo <= 0 || alto <= 0 || ancho <= 0 || numeroModulos <= 0
    ) {
      setResultado('Por favor completa todos los campos con valores numéricos positivos válidos.')
      return
    }

    const sumaDimensiones = largo + alto + ancho
    const baseDisenoNuevo = sumaDimensiones > 560 ? 400000 : 600000
    const volumen = (largo * alto * ancho) / 1000000
    const valorSala = volumen * baseDisenoNuevo + (numeroModulos * 100000)
    const porcentaje = tieneCurvas ? 0.4 : 0.2
    const resultadoBase = valorSala * (porcentaje + 1)

    setResultado(`$${resultadoBase.toLocaleString('es-CO')}`)
  }

  const calcularBaseAlternativa = () => {
    const l = parseFloat(altLargo)
    const a = parseFloat(altAlto)
    const an = parseFloat(altAncho)
    const pb = parseFloat(precioBase)
    const nm = parseInt(modulosLinea)

    if (isNaN(l) || isNaN(a) || isNaN(an) || isNaN(pb) || l <= 0 || a <= 0 || an <= 0 || pb <= 0 || isNaN(nm) || nm < 0) {
      setBaseCalculada('Por favor completa los valores con números positivos válidos.')
      return
    }

    const base = pb / ((l * a * an) / 1000000)
    setBaseCalculada(`Base original calculada: $${base.toLocaleString('es-CO')}`)

    const al = parseFloat(aumentoLargo)
    const aa = parseFloat(aumentoAlto)
    const an2 = parseFloat(aumentoAncho)

    if (!isNaN(al) && !isNaN(aa) && !isNaN(an2) && al > 0 && aa > 0 && an2 > 0) {
      const volumenAumento = (al * aa * an2) / 1000000
      const aumento = volumenAumento * base
      const valorModulos = nm * 100000
      const factorCurvas = curvasLinea ? 1.4 : 1.2
      const resultadoFinal = (aumento + valorModulos) * factorCurvas

      setResultadoAumento(`Aumento estimado: $${resultadoFinal.toLocaleString('es-CO')}`)
    } else {
      setResultadoAumento(null)
    }
  }


  const inputProps = {
    inputProps: {
      inputMode: 'numeric',
      min: 1,
      style: { appearance: 'textfield' },
    },
    sx: {
      '& input[type=number]': {
        MozAppearance: 'textfield',
      },
      '& input[type=number]::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '& input[type=number]::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
    }
  }




  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${mostrarAlternativo ? detailcarp : carp})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.8s ease-in-out',
    zIndex: -1,
  }

  const estiloBotonArtesanal = {
    fontFamily: 'Playfair Display, serif',
    fontWeight: 600,
    fontSize: '0.9rem',
    px: 2,
    py: 1,
    borderRadius: '12px',
    color: '#5a3e2b',
    border: '1px solid #c2a77c',
    backgroundColor: 'rgba(255, 248, 240, 0.7)',
    textTransform: 'none',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#f7e3c5',
      borderColor: '#a17855',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    },
  }

  return (
    <Box style={backgroundStyle}>
    <Container maxWidth="md" sx={{ px: [2, 4, 6] }}>
      <Box  textAlign="right" mb={1}>
        <Button  sx={estiloBotonArtesanal} variant="outlined" size="small" onClick={() => setMostrarAlternativo(!mostrarAlternativo)}>
          {mostrarAlternativo ? 'Diseño especial' : 'Diseño de línea'}
        </Button>
      </Box>

      <div className={`flip-card ${mostrarAlternativo ? 'flipped' : ''}`}>
        <div className="flip-card-inner">
          {/* Front side */}
          <Paper className="flip-card-front" elevation={8} sx={{ borderRadius: 4, padding: 5,   background: 'rgba(255, 255, 255, 0.85)',backdropFilter: 'blur(6px)', }}>
            <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
              Cotizador de Sala Modular
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
              Ingresa las dimensiones del mueble y obtén el valor estimado para tu cliente.
            </Typography>
         
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField label="Largo (cm)" type="number" value={input1} onChange={(e) => setInput1(e.target.value)} fullWidth {...inputProps} />
              <TextField label="Alto (cm)" type="number" value={input2} onChange={(e) => setInput2(e.target.value)} fullWidth {...inputProps} />
              <TextField label="Ancho (cm)" type="number" value={input3} onChange={(e) => setInput3(e.target.value)} fullWidth {...inputProps} />
              <TextField label="Número de módulos" type="number" value={modulos} onChange={(e) => setModulos(e.target.value)} fullWidth {...inputProps} />
              <FormControlLabel control={<Checkbox checked={tieneCurvas} onChange={() => setTieneCurvas(!tieneCurvas)} />} label="¿El mueble incluye curvas?" />
              <Button  variant="contained" color="primary" onClick={calcular} size="large" sx={estiloBotonArtesanal}>Calcular Valor</Button>
            </Box>
            {resultado && (
              <Box mt={4} textAlign="center" sx={{ background: '#ffffff', padding: 3, borderRadius: 3, border: '1px solid #e0e0e0', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
                <Typography variant="subtitle1" color="text.secondary">Valor total estimado:</Typography>
                <Typography variant="h5" fontWeight={700} color="success.main">{resultado}</Typography>
              </Box>
            )}
          </Paper>

          {/* Back side */}



         {/* Back side */}
         <Paper className="flip-card-back" elevation={8} sx={{ borderRadius: 4, padding: 5,  background: 'rgba(255, 255, 255, 0.85)',backdropFilter: 'blur(6px)', }}>
            <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
              Cotizador Diseño de línea
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" gutterBottom>
              Calcula la base según dimensiones y define el precio del diseño base.
            </Typography>
     
            <Box display="flex" flexDirection="column" gap={3}>
          

  {/* Campos principales en 3 columnas */}
  <Box
    display="grid"
    gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr 1fr' }}
    gap={2}
    mb={3}
  >
    <TextField label="Largo (cm)" type="number" value={altLargo} onChange={(e) => setAltLargo(e.target.value)} fullWidth {...inputProps} />
    <TextField label="Alto (cm)" type="number" value={altAlto} onChange={(e) => setAltAlto(e.target.value)} fullWidth {...inputProps} />
    <TextField label="Ancho (cm)" type="number" value={altAncho} onChange={(e) => setAltAncho(e.target.value)} fullWidth {...inputProps} />
  </Box>






              <TextField label="Precio del diseño base (COP)" type="number" value={precioBase} onChange={(e) => setPrecioBase(e.target.value)} fullWidth {...inputProps} />

              <Divider sx={{ my: 2 }} />
              <Box
  display="grid"
  gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr 1fr' }}
  gap={2}
  mb={3}
>
  <TextField
    label="Aumento largo (cm)"
    type="number"
    value={aumentoLargo}
    onChange={(e) => setAumentoLargo(e.target.value)}
    fullWidth
    {...inputProps}
  />
  <TextField
    label="Aumento alto (cm)"
    type="number"
    value={aumentoAlto}
    onChange={(e) => setAumentoAlto(e.target.value)}
    fullWidth
    {...inputProps}
  />
  <TextField
    label="Aumento ancho (cm)"
    type="number"
    value={aumentoAncho}
    onChange={(e) => setAumentoAncho(e.target.value)}
    fullWidth
    {...inputProps}
  />
</Box>
  

              <TextField label="Número de módulos" type="number" value={modulosLinea} onChange={(e) => setModulosLinea(e.target.value)} fullWidth {...inputProps} />
              <FormControlLabel control={<Checkbox checked={curvasLinea} onChange={() => setCurvasLinea(!curvasLinea)} />} label="¿Incluye curvas?" />

              <Button sx={estiloBotonArtesanal} variant="contained" onClick={calcularBaseAlternativa}>Calcular Base</Button>
      {/*         {baseCalculada && (
                <Typography variant="subtitle1" color="primary.main" align="center">
                  {baseCalculada}
                </Typography>
              )} */}
              {resultadoAumento && (
                <Typography variant="subtitle1" color="secondary" align="center">
                  {resultadoAumento}
                </Typography>
              )}
            </Box>
          </Paper>
        </div>
      </div>
    </Container>
    </Box>
  )
}


