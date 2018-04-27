//info on candidate
const candidate = Object.create({}, {
    firstName: {
        value: "Marsha"
    },
    lastName: {
        value: "Blackburn"
    },
    District: {
        value: "7th"
    },
    State: {
        value: "TN"
    }
})

//biography
const bio = Object.create({}, {
    fullname: {
        value: "Marsha Blackburn"
    },
    about: {
        value: "As a small business woman, author, mother, grandmother, and Member of Congress, Marsha Blackburn has dedicated her service to making America a more prosperous place to live."
    },

})

 //running platform
const platforms = Object.create({}, {
    taxes: {
        value: "Voted yes on retaining reduced taxes on capital gains and dividens"
    },
    jobs: {
        value: "Is about creating new jobs"
    },
    infrastructure: {
        value: "No to purposed Transit plan"
    },
    healthCare: {
        value: "Is advocate for Nashville's healthcare industry"
    },
    crime: {
        value: "Very little amount of crime"
    }
})

//calendar
const calendar = Object.create({}, {
    events: {
        value: ["breakfast", "lunch", "dinner"]
    },
    dates: {
        value: ["AM", "NOON", "PM"]
    }
})

//volunteer information
const volinfo = Object.create({}, {
    name: {
        value: "John Smith"
    },
    address: {
        value: "Old Hickory Blvd. Brentwood, TN"
    },
    email: {
        value: "johnsmith@comcast.net"
    },
    phonenumber: {
        value: "6155555555"
    },
    availability: {
        value: "Every week day"
    },
    activities: {
        value: "answer the phone, go door to door, host events"
    }
})

//image gallery
const gallery = Object.create({}, {
    headShot: {
        value: "data:image/jpeg;base64,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"
    },
    family: {
        value: "data:image/jpeg;base64,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"
    },
    constituents: {
        value: "https://blackburn.house.govhttps://blackburn.house.gov"
    }
})

//mission statement
const mission = Object.create({}, {
    statement: {
        value: "To make Tennessee a better place"
    }
})

//voting info
const vote = Object.create({}, {
    url: {
        value: "http://www.vote.gov"
    }
})

//donations

const donation = Object.create({}, {
    url: {
        value: "http://www.donate.com"
    }})

    function changeBookState (anyBookObject, thePropertyToChange) {
    }

    const modifyJest = (theObject, theProperty, theNewValue) => {
        theObject[theProperty] = theNewValue
    }
    
    const jest = {
        title: "The Infinite Jest",
        author: "David Foster Wallace",
        publishDate: "1 February 1996"
    }
    
    
    modifyJest(jest, "publishDate", "31 March 1997")
    
    console.log(jest)
    
    
    const documentBody = document.querySelector("#body")
    
    const jestArticle = document.createElement("article")
    // <article>
    jestArticle.setAttribute("id", jest.title)
    // <article id="The Infinite Jest">
    jestArticle.textContent = jest.author
    // <article id="The Infinite Jest">
    //  David Foster Wallace
    // </article>
    
    documentBody.appendChild(jestArticle
    }