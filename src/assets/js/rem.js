module.exports = function (designWidth, fit) {
  (function () {
    let w = window
    let d = document
    let b = d.body
    let s = b.style
    s.maxWidth = fit(w.screen)+ 'px'
    d.documentElement.style.fontSize = (b.offsetWidth* 100/designWidth)+'px'
  })()
}
