window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const type =params.get('type');
    const date =params.get('date');
    const heure =params.get('heure');
    const Remarque =params.get('Remarque'); 

    document.getElementById('type').innerHTML =type;
    document.getElementById('date').innerHTML =date;
    document.getElementById('heure').innerHTML =heure;
    document.getElementById('Remarque').innerHTML = Remarque;

} )