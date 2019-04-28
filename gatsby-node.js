const path = require('path')
const data = require('./people.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve('./src/templates/person.js')

  data.forEach(({ name, birth, death, about, link }) => {
    var path = name.replace(/ |\./g, '');
    createPage({
      path,
      component: template,
      context: {
        name,
        birth,
        death,
        about,
        link,
      }
    })
  })
}
