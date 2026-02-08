const url = "c007d773f03842438bae65fb032c036d"
console.log(url);

const root = document.getElementById("root")
const nav = document.createElement("nav")

function navbar() {
    nav.classList.add("navbar")
    root.appendChild(nav)

    const logo = document.createElement("a")
    nav.appendChild(logo)
    logo.classList.add("logo")

    const imgLogo = document.createElement("img")
    imgLogo.src = "./images/flash.png"
    logo.appendChild(imgLogo)
    imgLogo.classList.add("img-logo")


    const logoWeb = document.createElement("a")
    nav.appendChild(logoWeb)
    logoWeb.textContent = "TRENING"
    logoWeb.classList.add("logo-web")



    const now = document.createElement("a")
    nav.appendChild(now)
    now.textContent = "Now"
    now.classList.add("now")



    const topPost = document.createElement("a")
    nav.appendChild(topPost)
    topPost.textContent = "Top Posts"
    topPost.classList.add("top-post")



    const allTime = document.createElement("a")
    nav.appendChild(allTime)
    allTime.textContent = "All Times"
    allTime.classList.add("all-time")

}
navbar()


// =============================================================


const story = document.createElement("article")
root.appendChild(story)
root.className("one-article")


const numStory = document.createElement("b")
story.appendChild(numStory)
story.className("one-article num-story")


const imgStory = document.createElement("img")
story.appendChild(imgStory)
story.className("one-article img-story")


const h1Story = document.createElement("h1")
story.appendChild(h1Story)
story.className("one-article h1-story")


const author = document.createElement("span")
story.appendChild(author)
story.className("one-article author")


const paragraph = document.createElement("p")
story.appendChild(paragraph)
story.className("one-article paragraph-story")








async function getData() {
    if (!localStorage.getItem("data")) {
        await fetch("https://newsapi.org/v2/everything?q=global&apiKey=c007d773f03842438bae65fb032c036d", {})
        localStorage.setItem("data", JSON.stringify(url))
    }
}



getData()



