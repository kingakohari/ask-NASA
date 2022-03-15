
function loadEvent() {


  const rootElement = document.getElementById("root")

  const form = rootElement.querySelector("form")

  form.addEventListener("submit", function(e) {
  
    e.preventDefault()

    let requestedDate = document.getElementById("date").value

    console.log(requestedDate);

    const apiKey = "bT4tpRHIuLBqvqfsmafjX2qeyIaykEQUv26jx1wg"

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`).then(
      function (apodResponse){
          console.log(apodResponse);
          apodResponse.json().then(
              function (apodResponseJson) {
                
              document.querySelector("h2").innerText = apodResponseJson.title

              if (apodResponseJson.media_type === "image"){

                document.querySelector("img").src = apodResponseJson.hdurl

                } else {

                let iframe = document.querySelector("iframe");
                iframe.src = apodResponseJson.url
                iframe.style.display = "block"
              }

              document.getElementById("description").innerText= apodResponseJson.explanation;
            })
            .catch(err => {
              console.log(`error ${err}`)
              alert("Sorry, there are no results for your search")
          });
      }
    )
  })
}

window.addEventListener("load", loadEvent) 