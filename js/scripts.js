(() => {
  const containerMain = document.querySelector('.t2')
  const containerSecondary = document.querySelector('.t1')

  setTimeout(() => {
    containerMain.classList.toggle('t2--hide')
    containerSecondary.classList.toggle('t1--hide')
  }, 10000)
})()