const search = function () {
    const input = document.querySelector('.search-block > input').querySelector,
          searchBtn = document.querySelector('.search-block > button');

    input.addEventListener('input', (event) => {
        console.log(event.target.value);
    });
};

search();