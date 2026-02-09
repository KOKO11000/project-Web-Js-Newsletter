export async function getData() {
    if (!localStorage.getItem("data")) {
        await fetch("https://newsapi.org/v2/everything?q=global&apiKey=c007d773f03842438bae65fb032c036d")
        .then(v => { return v.json() }).then(v => {
            const data = v.articles;
            localStorage.setItem("data", JSON.stringify(v.articles))
            return data;
        })
    } else {
        return JSON.parse(localStorage.getItem("data"));
    }
}