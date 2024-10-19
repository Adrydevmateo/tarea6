type GenreResponse = {
    count: number,
    gender: "male" | "female",
    name: string,
    probability: number
}

export const fetchGenre = async (name: string) => {
    try {
        const url = `https://api.genderize.io/?name=${name}`
        const res = await fetch(url)
        if (!res.ok) throw new Error(res.statusText)
        const data: GenreResponse = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
