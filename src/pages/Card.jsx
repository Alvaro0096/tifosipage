import React from 'react';

const Card = () => {
  return (
    <>
        <h2>Completar el formulario</h2>
        <form className='m-5'>
          <div className="form-row">
              <div class="form-group md-6">
                <label for="day">Día</label>
                <select class="form-control" id="day" aria-describedby="day">
                  <option>Lunes</option>
                  <option>Martes</option>
                  <option>Miércoles</option>
                  <option>Jueves</option>
                  <option>Viernes</option>
                  <option>Sábado</option>
                  <option>Domingo</option>
                </select>
              </div>
            
              <div class="form-group md-6">
                <label for="dayNumber">Fecha del día</label>
                <input 
                type="number" 
                class="form-control" 
                id="dayNumber" 
                aria-describedby="dayNumber" 
                placeholder="Ingresa la fecha del día" />
              </div>
          </div>
          
          <div class="form-group">
            <label for="month">Mes</label>
            <select class="form-control" id="month" aria-describedby="month">
              <option>Enero</option>
              <option>Febrero</option>
              <option>Marzo</option>
              <option>Abril</option>
              <option>Mayo</option>
              <option>Junio</option>
              <option>Julio</option>
              <option>Agosto</option>
              <option>Septiembre</option>
              <option>Octubre</option>
              <option>Noviembre</option>
              <option>Diciembre</option>
            </select>
          </div>
          <div class="form-group">
            <label for="hourBegin">Hora de comienzo</label>
            <input 
            type="number" 
            class="form-control" 
            id="hourBegin" 
            aria-describedby="hourBegin" 
            placeholder="Desde las..." 
            min="00"
            max="23"
            maxLength={2}/>
          </div>
          <div class="form-group">
            <label for="hourEnd">Hora de final</label>
            <input 
            type="number" 
            class="form-control" 
            id="hourEnd" 
            aria-describedby="hourEnd" 
            placeholder="Hasta las..." 
            min="00"
            max="23"
            maxLength={2}/>
          </div>
          <div class="form-group">
            <label for="place">Localidad</label>
            <input type="text" class="form-control" id="place" placeholder="Ingrese la localidad"  maxLength={20}/>
          </div>
          <div class="form-group">
            <label for="address">Dirección</label>
            <input type="address" class="form-control" id="address" placeholder="Ingrese la dirección"  maxLength={20}/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default Card