const memberContainer = document.getElementById("group-info");
const documentContainer = document.getElementById("documents");
const groupInfo = [
    {
        id: `1`,
        member: "Mariana Lozano",
        discipline: "Electrical Engineer",
        description: `Mariana Lozano is currently a Senior at the 
        University of Central Florida currently doing a study program 
        with Ford Motor Company in Product Development. 
        Upon completion of her BSEE and graduation, she will continue
        working with Ford Motor Company and doing their Ford College Graduate Program.`,
        image: "./assets/images/Mlozano.webp",
        linkedIn: "https://www.linkedin.com/in/marianalozano12/",
        customCSS: ""

    },
    {
        id: `2`,
        member: "Austen Ordos",
        discipline: "Electrical Engineer",
        description: `Austen Ordos is a Senior at the 
        University of Central Florida getting his BSEE.  
        Following his internship with Northrop Grumman
        he plans on continuing to work with them as an Electronics Engineer.`,
        image: "./assets/images/Aordos.webp",
        linkedIn: "https://www.linkedin.com/in/austen-ordos-5765971b8/",
        customCSS: ""
    },
    {
        id: `3`,
        member: "Nicholas Leon",
        discipline: "Electrical Engineer",
        description: `Nicholas Leon is currently a Senior at the 
        University of Central Florida working towards his BSEE. 
        Following graduation Nicholas plans on working with 
        John Deere as a Product Engineer 2.`,
        image: "./assets/images/Nleon.webp",
        linkedIn: "https://www.linkedin.com/in/nicholas-leon-1b1b3b1b8/",
        customCSS: "customFitImage"
    },
    {
        id: `4`,
        member: "Hamzah Ullah",
        discipline: "Computer Engineer",
        description: `Hamzah Ullah is a Senior at the University of Central Florida 
        acquiring his Computer Engineering Bachelor's Degree. Hamzah is currently working 
        full time with 2U | edX as a Software Engineer and plans on continuing with 
        them following graduation.`,
        image: "./assets/images/Hullah.webp",
        linkedIn: "https://www.linkedin.com/in/hamzahullah/",
        customCSS: ""

    }
]

const documentInfo =
    [
        {
            type: "Divide and Conquer",
            src: false,
            video: false,
        },
        {
            type: "Senior Design I, Final Documentation",
            src: false,
            video: false,
        },
        {
            type: "blockDiagram",
            src: false,
            video: false
        },
        {
            type: "Critical Design Review",
            src: "./assets/documents/CDRProgressPresentation.pdf",
            video: "3WKtcWqygaI"
        },
        {
            type: "Mid Term Demo",
            src: false,
            video: "iwd3igbQGEE"
        },
        {
            type: "Conference Paper",
            src: "./assets/documents/Senior_Design_Conference_Paper.pdf",
            video: false
        },
        {
            type: "Showcase Submission",
            src: "./assets/documents/AutomatedIndoorNurseryShowcase.pdf",
            video: "P5IIi22P9Ys"
        },
        {
            type: "Final Presentation",
            src: "./assets/documents/FinalPresentation.pdf",
            video: "tEvSyLN_F3M"

        },
        {
            type: "Final Demonstration",
            src: false,
            video: "sS_38u6jRV8"
        },
        // {
        //     type: "Senior Design II, Final Documentation",
        //     src: false,
        //     video: false,
        // }
    ]

function generateVideos({ video }) {
    if (video !== false) {
        return `
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        `
    }
}

function generateDocumentDownload({ type, src }) {

    let typeNoSpace = type.replace(/\s/g, '');
    return `
    <a href=${src} download="${typeNoSpace}" target="_blank" rel="noreferrer"><button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg> Download</button></a>
    </div>
    `
}

function generateDocument({ type, src }) {
    let typeNoSpace = type.replace(/\s/g, '');
    return `
    <iframe title=${typeNoSpace} src=${src}></iframe>
    `
}

function generateMember({ id, member, discipline, description, image, linkedIn, customCSS }) {
    return `
            <div class="card m-5" style = "width: 22rem;" >
                <img id="img-cap${id}" class="card-img-top img-cap  ${customCSS}" src="${image}" alt="Image of ${discipline}, ${member}">
                    <div class="card-body">
                        <a class="d-flex text-decoration-none" href="${linkedIn}" class="card-link text-decoration-none link-font"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin flex-left" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg><h2 class="flex-right">${member}</h2></a>
                        <h6 class="card-subtitle mb-2 mt-1 text-muted">${discipline}</h6>
                        <hr class="hr-black" />
                        <p class="card-text text-container">${description}</p>
                    </div>
                </div>
        `;
}

document.onreadystatechange = async function () {
    if (document.readyState === "complete") {
        for (var i = 0; i < groupInfo.length; i++) {
            memberContainer.innerHTML += generateMember(groupInfo[i]);
        }
        for (var j = 0; j < documentInfo.length; j++) {
            if (documentInfo[j].video) {
                documentContainer.innerHTML += generateVideos(documentInfo[j]);
            }
            else {
                documentContainer.innerHTML += generateDocument(documentInfo[j]);
            }
            if (documentInfo[j].src) {
                documentContainer.innerHTML += generateDocumentDownload(documentInfo[j]);
            }
        }
        const allFiles = document.getElementById('allFiles');
        allFiles.removeAttribute('hidden');
    }
}