// exo 1

function testHealtcheck(url) {
	return fetch(url).then((response) => {
		expect(response.status).toBe(200);
	});
}
test("Status : Request fullfiled", () => {
	return testHealtcheck("https://api-test-jest.up.railway.app/healthcheck");

	
});

// exo 2
function testHealth(url) {
return fetch(url).then((response) => {
     // recuperer les données de l'api
    expect(response.status).not.toBeGreaterThanOrEqual(400)
    
});
}


test("Status : Request fullfiled", () => {
	return testHealth("https://api-test-jest.up.railway.app/healthcheck");

	
});

// exo 3
function testCar(url) {
    return fetch(url).then((response) => {
        // recuperer les données de l'api
        return response.json();
    })
    .then((data) => {
       
        expect(data).toHaveProperty("brand");
        expect(data.brand).toMatch("Ford");
        expect(data).toHaveProperty("model");
        expect(data.model).toEqual("Mustang");
        expect(data).toHaveProperty("year");
        expect(data.year).toBe(1969);
    });
}

test("Status : Request fullfiled", () => {
    return testCar("https://api-test-jest.up.railway.app/test-get");
});


// exo 4
// Serie 1
function testId(url){
   return fetch(url).then((response) => {
    // recuperer les données de l'api
    return response.json();
 })
.then((identity) => {
    expect(identity.id).not.toBeLessThanOrEqual(100);
    expect(identity.firstName).not.toBeNull();
});
}


test("Status : Request fullfiled", () => {
    return testId("https://api-test-jest.up.railway.app/test-user");
});


// Serie 2
function testId2(url){
    return fetch(url).then((response) => {
     // recuperer les données de l'api
     return response.json();
  })
 .then((contact) => {
    expect(contact.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
 });
 }
 
 
 test("Status : Request fullfiled", () => {
     return testId2("https://api-test-jest.up.railway.app/test-user");
 });

// Serie 3
function testId3(url){
    return fetch(url).then((response) => {
     // recuperer les données de l'api
     return response.json();
  })
 .then((date) => {
    expect(date.registeredAt.split("T")[0]).toMatch(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
    expect(date.registeredAt.split("T")[0]).toBe>Date("2020-01-01");
 });
 }
 
 
 test("Status : Request fullfiled", () => {
     return testId3("https://api-test-jest.up.railway.app/test-user");
 });


// exo 5
// Serie 1
function testCar(url) {
    return fetch(url).then((response) => {
        // recuperer les données de l'api
        return response.json();
    })
    .then((data) => {
       
      
    });
}

test("Status : Request fullfiled", () => {
    return testCar("https://api-test-jest.up.railway.app/test-post");
});











// function testHealtcheck(url) {
//     try {
//         return fetch(url).then((response) => {
//             if (response.status < 400) {
//                 return false
//             } else {
//                 expect(response.status).toBe(399);
//                 return true

//             }

//         });
//     } catch (error) {
//         return error.response
//     }
// }

// test("Status : Request fullfiled", () => {
//     return testHealtcheck("https://api-test-jest.up.railway.app/healthcheck");
// });




