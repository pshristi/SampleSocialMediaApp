let navlinks = $('.navbar-nav .nav-link')

navlinks.click((event) => {
    console.log($(event.target).attr('data-component'))
    let componentUrl = `/components/${$(event.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})