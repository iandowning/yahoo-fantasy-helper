const getLeague = (id: string) => {
    const data = fetch(`https://api.sleeper.app/v1/league/${id}`).then((response) => response.json());
    console.log(data)
    return data;
}

const getRosters = (id: string) => {
    const data = fetch(`https://api.sleeper.app/v1/league/${id}/rosters`).then((response) => response.json());
    return data;
}

export {
    getLeague,
    getRosters
}
