import { getData } from "./request.js"

const url = "c007d773f03842438bae65fb032c036d"

const root = document.getElementById("root")
const nav = document.createElement("nav")

let newsArray = await getData()


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


// =============================================================

function createAllPosts(articles) {
    articles.forEach((el, index) => {

        createPost(index + 1, el.urlToImage, el.title, el.author);
        
    })
    
    }
function showOnePost(newsArray){
    let story = document.querySelectorAll(".the-article")
    console.log(story);
    
    story.forEach((el)=>{
    el.addEventListener("click",()=>{
        const chl = el.children
        const index = chl[0].textContent
        let i = 1;
        let post;
        newsArray.forEach((n) => {
            if(i == index) {
                post = n;
            }
            i ++;
        })
        console.log(post);
    })
    })
  


}
navbar()
createAllPosts(newsArray)
showOnePost(newsArray)






function createPost(num, imgPath, h1, theAuthor) {

    const story = document.createElement("article")
    root.appendChild(story)
    story.classList.add("the-article")
    story.id = num


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



    // const paragraph = document.createElement("p")
    // informetion.appendChild(paragraph)
    // paragraph.classList.add("one-article")
    // paragraph.innerHTML = p
    // informetion.innerHTML += `<p class"one-article">${p}</p>`
}



















