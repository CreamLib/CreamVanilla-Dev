module.exports = function (array, filterString) {
    array = array.filter(item => {
        console.log(item.name);
        return item.tags.includes(filterString);
    });
    return array
}