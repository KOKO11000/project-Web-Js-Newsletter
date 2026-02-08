export async function getData() {
    if (!localStorage.getItem("data")) {
        await fetch("https://newsapi.org/v2/everything?q=global&apiKey=c007d773f03842438bae65fb032c036d", {}).then(v=> {return v.json()}).then(v=> {
            console.log(v.articles);
            
            return data = v
        } )
        localStorage.setItem("data", JSON.stringify(url))
    }
}