import { getData } from "./request";

const url = "c007d773f03842438bae65fb032c036d"
console.log(url);

const root = document.getElementById("root")
const nav = document.createElement("nav")
const data =[]

await getDataa()



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


function createPost(params) {
    
}

const story = document.createElement("article")
root.appendChild(story)
story.classList.add("the-article")


const numStory = document.createElement("b")
story.appendChild(numStory)
story.classList.add("one-article")
numStory.textContent = "1"



const imgStory = document.createElement("img")
story.appendChild(imgStory)
imgStory.classList.add("one-article")
imgStory.src = "images/food.jpg"



const informetion = document.createElement("article")
informetion.classList.add("informetion")
story.appendChild(informetion)

const h1Story = document.createElement("h1")
informetion.appendChild(h1Story)
h1Story.classList.add("one-article")
h1Story.textContent = "bibi love trump"




const author = document.createElement("span")
informetion.appendChild(author)
author.classList.add("one-article")
author.textContent = " By Netanel Ozeri"



const paragraph = document.createElement("p")
informetion.appendChild(paragraph)
paragraph.classList.add("one-article")
paragraph.textContent = "lorem 30 vedsjfi eefi ef he fie hfif ei hfie f oewfhoew iff eo hfoe hfo ofeh ewof"















