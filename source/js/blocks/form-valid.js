const initValidForm = () => {
  document.getElementsByTagName('input')[0].onchange = checkIt;
  document.getElementsByTagName('input')[1].onchange = checkIt;
  document.getElementsByTagName('input')[2].onchange = checkIt;

  function checkIt() {
    if (document.getElementsByTagName('input')[0].value !== '' && document.getElementsByTagName('input')[1].value !== '' && document.getElementsByTagName('input')[2].value !== '') {
      document.getElementById('buttonT').disabled = false;
    }
  }
};

export {initValidForm};
