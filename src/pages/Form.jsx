import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const {formData, setFormData} = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (newDate) => {
    setFormData({...formData, date: newDate});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/card');
  }

  return (
    <>
      <div className="container">
        <h2 className='text-center m-3'>Completa el formulario</h2>
        <form className='col-12 d-flex flex-column justify-content-center' onSubmit={(e) => handleSubmit(e)}>
          {/* FIRST ROW */}
          <div className="row mb-3 align-items-end">
            <div className="col-lg-2 col-md-12">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Cumpleaños"
                  inputFormat="dd/MM/yyyy"
                  autoComplete="off"
                  value={formData.date}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="form-group">
                <label htmlFor="hourBegin">Hora de comienzo</label>
                <input 
                type="number" 
                className="form-control" 
                id="hourBegin" 
                name='hourBegin'
                aria-describedby="hourBegin" 
                placeholder="Desde las..." 
                min="00"
                max="24"
                required
                maxLength={2}
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
              </div>
            </div>
            
            <div className="col-lg-5 col-md-12">
              <div className="form-group">
                <label htmlFor="hourEnd">Hora de final</label>
                <input 
                type="number" 
                className="form-control" 
                id="hourEnd" 
                name='hourEnd'
                aria-describedby="hourEnd" 
                placeholder="Hasta las..." 
                min="00"
                max="24"
                required
                maxLength={2}
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
              </div>
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="row mb-3">
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <label htmlFor="place">Localidad</label>
                <input 
                type="text" 
                className="form-control" 
                id="place" 
                name='place'
                placeholder="Ingrese la localidad"  
                autoComplete='off'
                required
                maxLength={20}
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <input 
                type="address" 
                className="form-control" 
                id="address" 
                name='address'
                placeholder="Ingrese la dirección" 
                autoComplete='off' 
                required
                maxLength={20}
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
              </div>
            </div>
          </div>

          {/* THIRD ROW */}
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-lg m-2">VISTA PREVIA</button>
              <button className="btn btn-primary btn-lg m-2">LIMPIAR DATOS</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form