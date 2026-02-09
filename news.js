const url = "c007d773f03842438bae65fb032c036d"

const root = document.getElementById("root")
const nav = document.createElement("nav")

async function getData() {
    if (!localStorage.getItem("data")) {
        await fetch("https://newsapi.org/v2/everything?q=global&apiKey=c007d773f03842438bae65fb032c036d")
        .then(v=> {return v.json()}).then(v=> {
            const data = v.articles;
            localStorage.setItem("data", JSON.stringify(v.articles))
            return data;
        } )
    } else {
        return JSON.parse(localStorage.getItem("data"));
    }
}


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

// .forEach(i => {
  
   
//     const urlImage =  i.urlImage
//     const content = i.content
    
// });

async function createAllPosts() {
    const articles = await getData();
    articles.forEach(({author, title, urlToImage,description}, index) => {
        createPost(index + 1, urlToImage, title, author,description);
    }) 
}
 
createAllPosts()

function createPost(num,imgPath,h1,theAuthor,p) {


    const story = document.createElement("article")
    root.appendChild(story)
    story.classList.add("the-article")
    
    
    const numStory = document.createElement("b")
    story.appendChild(numStory)
    story.classList.add("one-article")
    numStory.textContent = num
    
    
    
    const imgStory = document.createElement("img")
    story.appendChild(imgStory)
    imgStory.classList.add("one-article")
    imgStory.src = imgPath
    
    
    
    const informetion = document.createElement("article")
    informetion.classList.add("informetion")
    story.appendChild(informetion)
    


    const h1Story = document.createElement("h1")
    informetion.appendChild(h1Story)
    h1Story.classList.add("one-article")
    h1Story.textContent = h1
    
    
    
    
    // const author = document.createElement("span")
    // informetion.appendChild(author)
    // author.classList.add("one-article")
    // author.innerHTML = `By ${theAuthor}.`
    informetion.innerHTML += `<p class"span"><span class"one-article">by</span> ${theAuthor}.</p>`
    
    
    
    const paragraph = document.createElement("p")
    informetion.appendChild(paragraph)
    paragraph.classList.add("one-article")
    paragraph.innerHTML = p
    // informetion.innerHTML= `<p class"one-article">${p}</p>`
}    



















