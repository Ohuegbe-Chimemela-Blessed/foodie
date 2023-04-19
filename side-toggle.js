let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.products-filter-side');
    let mainAdmin = document.querySelector('.all-products-main')

    toggle.onclick = function() {
        navigation.classList.toggle('active')
        mainAdmin.classList.toggle('active')
}