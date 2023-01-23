// const apiKey = "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";
// const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";

// // Prompt the user for input
// const prompt = document.getElementById("input").value;

// // Set up the parameters for the API request
// const params = {
//     "prompt": prompt,
//     "temperature": 0.5,
//     "max_tokens": 100,
//     "stop": "."
// };

// // Send the request to the API
// fetch(endpoint, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${apiKey}`
//         },
//         body: JSON.stringify(params)
//     })
//     .then(response => response.json())
//     .then(responseJson => {
//         console.log(responseJson.choices[0].text);
//     })
//     .catch(error => {
//         console.log(error);
//     });