export default async function tilesData() {
    const res =await fetch('https://json-server-h6kx.onrender.com/tiles')
    const data =await res.json()
    return data
}