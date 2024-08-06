function customRender(reactElement, container)
{
  /*  const domeElement = document.createElement(reactElement.type)
    domeElement.innerHTML =reactElement.children
    domeElement.setAttribute('herf',reactElement.props.herf)
    domeElement.setAttribute('target',reactElement.props.target)

container.appendChild(domeElement)
    */

const domeElement = document.createElement(ReactElement.type)
domeElement.innerHTML =ReactElement.children
for(const prop in ReactElement.props) {
if(prop === 'childern' ) continue;
domeElement.setAttribute(prop,ReactElement.props[prop])

}
container.appendChild(domeElement)
}

const ReactElement = {
    type : 'a',  // type of element to create                               
    props:{
        href: 'https://www.google.com/',  // attributes of the element  // can be any string or number      
        target: '_blank'
    }, 
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(ReactElement,mainContainer)