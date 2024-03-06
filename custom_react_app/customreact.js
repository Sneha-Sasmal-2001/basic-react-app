//4.
function customrender(reactElement,container)
{
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    //we may not know the no of attributes so using a modular approach is always safe
    for(const prop in reactElement.porps){
        if(prop == 'childern') continue; //can be ignored
        domElement.setAttribute(prop,reactElement.porps[prop])
    }
    container.appendChild(domElement)
}

//2.
//react try to make a tree with my element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childern: 'Click me to visit google'
}

//1.
const maincontainer = document.querySelector('#root');

//3.
// render it on page
//inject reactElement into maincotainer
customrender(reactElement,maincontainer)