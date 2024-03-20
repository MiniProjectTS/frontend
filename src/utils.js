export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}

//The getImageUrl function is a utility function designed to generate a URL 
//for an image asset based on a given path

// How It Works
// Template Literal: The function uses a template literal (`/assets/${path}`) to construct the path to the image file. The ${path} part is replaced with the actual path argument passed to the function.
// new URL() Constructor: The new URL() constructor is used to create a new URL object. This constructor takes two arguments:
// The first argument is the relative URL to the image file. In this case, it's the path constructed in the previous step.
// The second argument is import.meta.url, which provides the URL of the current module. This is used as the base URL for resolving the relative URL to the image file.
// .href Property: The .href property of the URL object is accessed to get the full URL as a string. This is the URL that the function returns.