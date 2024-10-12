async function fetchData() {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error(
                `Erro ao carregar o arquivo JSON: ${response.statusText}`
            );
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON: ", error);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchData();
    console.log(data);
});
