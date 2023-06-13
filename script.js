function stripArticles(bandName) {
  // Create a regular expression to match articles
  const regex = new RegExp('^(a |the |an )', 'i');

  // Replace any articles in the band name with an empty string
  return bandName.replace(regex, '');
}

// Get the array of band names
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Sort the band names without articles
const sortedBands = bands.map(stripArticles).sort();

// Create a list element for each band name
const bandList = sortedBands.map((bandName) => `<li>${bandName}</li>`);

// Append the list of band names to the band ul element
document.getElementById('band').innerHTML = bandList.join('');
