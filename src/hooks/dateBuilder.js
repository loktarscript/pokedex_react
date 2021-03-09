export const dateBuilder = (d) => {
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let dia = dias[d.getDay()];
    let fecha = d.getDate();
    let mes = meses[d.getMonth()];
    let anio = d.getFullYear();
    let hora = d.getHours();
    let obj = { dia, fecha, mes, anio, hora };
    return obj;
};