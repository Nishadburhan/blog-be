const slugify = require('slugify');

const makeSlug = (name) => {
    return slugify(name, { lower: true });
};

module.exports = makeSlug;