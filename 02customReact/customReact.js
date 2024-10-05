function customRender(raectelem, placeHolder) {

    // const domEle = document.createElement(raectelem.type)
    // domEle.innerHTML = raectelem.children
    // domEle.setAttribute('href', raectelem.props.href)
    // domEle.setAttribute('target', raectelem.props.target)
    // placeHolder.appendChild(domEle)


    const domEle = document.createElement(raectelem.type)
    domEle.innerHTML = raectelem.children
    for (const prop in reactElement.props) {
        if(prop === "childer"){
            continue
        }
        domEle.setAttribute(prop,reactElement.props[prop])
    }
    placeHolder.appendChild(domEle)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click here to vist'

}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)