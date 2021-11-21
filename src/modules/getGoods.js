const getGoods = () => {
    const links = document.querySelector('.navigation-link');
       

    const getData = () => { 
        fetch('/db/db.json')
            .then((res) => res.json()) 
            .then((data) =>  {
                console.log(data);
            });
    };

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        });
    });
};

export default getGoods;