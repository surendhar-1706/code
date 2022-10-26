const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c7fa8235d3msh1ddce5b747c5aa0p1da4e0jsne5df34823909',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};

export const getTopCharts = async () => {
    const data = await fetch('https://shazam.p.rapidapi.com/charts/list', options)
    const json_data = await data.json()
    return json_data
}