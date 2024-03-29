import _ from 'lodash'
import './css/common.css'
import Icon from './images/miniCode.png'
import printMe from './print.js'

function component() {
  var element = document.createElement('div')

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  var myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  var btn = document.createElement('button')
  btn.innerHTML = 'click me'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
