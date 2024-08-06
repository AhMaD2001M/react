function customRender(reactElement, container){
  /*  const domeElement = document.createElement(reactElement.type)
    domeElement.innerHTML =reactElement.childern
    domeElement.setAttribute('herf',reactElement.props.herf)
    domeElement.setAttribute('target',reactElement.props.target)

container.appendChild(domeElement)
    */

const domeElement = document.createElement(reactElement.type)
domeElement.innerHTML =reactElement.childern
for(const prop in reactElement.props) {
if(prop === 'childern' ) continue;
domeElement.setAttribute(prop,reactElement.props[prop])

}
container.appendChild(domeElement)
}

const reactElement = {
    tyoe : 'a',
    props:{
        herf:'https://.google.com',
        target: '_blank'
    }, 
    childern: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)